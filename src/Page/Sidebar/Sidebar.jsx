import React, {useState} from 'react'
import Button from "@mui/material/Button";
import Avatar from '@mui/material/Avatar';
import "./Sidebar.css"
import CreateNewTaskForm from "../Task/TaskCard/CreateTask";
import {useLocation, useNavigate} from "react-router-dom";

const menu = [
    {name:"Home",value:"Home",role:["ROLE_ADMIN","ROLE_CUSTOMER"]},
    {name:"DONE",value:"DONE",role:["ROLE_ADMIN","ROLE_CUSTOMER"]},
    {name:"ASSIGNED",value:"ASSIGNED",role:["ROLE_ADMIN"]},
    {name:"NOT ASSIGNED",value:"PENDING",role:["ROLE_ADMIN"]},
    {name:"Create New Task",value:"",role:["ROLE_ADMIN"]},
    {name:"Notification",value:"NOTIFICATION",role:["ROLE_CUSTOMER"]},
]
const role="ROLE_ADMIN"
const Sidebar = () => {
    const navigate=useNavigate()
    const location=useLocation();
    const [activeMenu,setActiveMenu]=useState("DONE")
    const [openCreateTaskForm,setOpenCreateTaskForm]=useState(false);
    const handleCloseCreateTaskForm=()=>{
        setOpenCreateTaskForm(false)
    }
    const handleOpenCreateTaskModel = () => {
        setOpenCreateTaskForm(true);

    };


    const handleMenuChange=(item)=>{
        const  updatedParams=new URLSearchParams(location.search);

        if(item.name=="Create New Task"){
            handleOpenCreateTaskModel()
        }else if(item.name=="Home"){
            updatedParams.delete("filter")
            const queryString=updatedParams.toString();
            const updatedPath=queryString?`${location.pathname}?${queryString}`:location.pathname;
            navigate(updatedPath)
        }else{
            updatedParams.set("filter",item.value);
            navigate(`${location.pathname}?${updatedParams.toString()}`)
        }
        setActiveMenu(item.name)

    }

    const handleLogout=()=>{
        console.log("handle log out")
    }
    return (
        <>
            <div className='card min-h-[85vh] flex flex-col justify-center fixed w-[20vw]'>
                <div className='space-y-5 h-full'>
                    <div className='flex justify-center'>
                        <Avatar sx={{width:"8rem",height:"8rem"}} src='https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png' />
                    </div>
                    {
                        menu.filter((item)=>item.role.includes(role))
                            .map((item)=><p onClick={()=>handleMenuChange(item)} className={`py-3 px-5 rounded-full text-center cursor-pointer ${activeMenu===item.name?"activeMenuItem":"menuItem"}`}>{item.name}</p>)
                    }
                    <Button onClick={handleLogout} sx={{padding:".7rem",borderRadius:"2rem"}} fullWidth className='logoutButton'>
                        logout
                    </Button>
                </div>
            </div>
            <CreateNewTaskForm open={openCreateTaskForm} handleClose={handleCloseCreateTaskForm}/>
        </>
            )
}
export default Sidebar
