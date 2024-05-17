import React, {useState} from 'react'
import Button from "@mui/material/Button";
import Avatar from '@mui/material/Avatar';
import "./Sidebar.css"

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
    const [activeMenu,setActiveMenu]=useState("DONE")
    const handleMenuChange=(item)=>{
        setActiveMenu(item.name)
    }

    const handleLogout=()=>{
        console.log("handle log out")
    }
    return (
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
    )
}
export default Sidebar