import React, {useState} from 'react'
import {IconButton, Menu, MenuItem} from "@mui/material";
import MoreVertIcon from'@mui/icons-material/MoreVert'
import UserList from "../UserList/UserList";
import SubmissionList from "./SubmissionList";
import EditTaskForm from "./EditTaskForm";

const role="ROLE_ADMIN"
export const TaskCard = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = Boolean(anchorEl);
    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const [openUserList,setOpenUserList]=useState(false);

    const handleCloseUserList=()=>{
        setOpenUserList(false)
    }

    const [openSubmissionList,setOpenSubmissionList]=useState(false);

    const handleCloseSubmissionList=()=>{
        setOpenSubmissionList(false)
    }

    const [openUpdateTaskForm,setOpenUpdateTaskForm]=useState(false);
    const handleCloseUpdateTaskForm=()=>{
        setOpenUpdateTaskForm(false)
    }
    const handleOpenUpdateTaskModel = () => {
        setOpenUpdateTaskForm(true);
        handleMenuClose();
    };


    const  handleOpenUserList=()=>{
        setOpenUserList(true);
        handleMenuClose()
    }

    const handleOpenSubmissionList=()=>{
        setOpenSubmissionList(true)
        handleMenuClose()
    }

    const handleDeleteTask=()=>{
        handleMenuClose();

    }





    return (
        <div>
            <div className='card lg:flex justify-between'>
                <div className='lg:flex gap-5 items-center space-y-2 w-[90%] lg:w-[70%]'>
                    <div>
                        <img className='lg:w-[7rem] lg:h-[7rem] object-cover'
                        src="https://cdn.pixabay.com/photo/2015/04/07/22/24/mirroring-711926_640.jpg"
                        alt=""/>
                    </div>
                    <div className='space-y-5'>
                        <div className='space-y-2'>
                            <h1 className='font-bold text-lg'>Car Rental Website</h1>
                            <p className='text-gray-500 text-sm'>use latest framworks and technology to</p>p
                        </div>
                        <div className='flex flex-wrap gap-2 items-center'>
                            {[1,1,1,1].map((item)=><span className='py-1 px-5 rounded-full techStack'>Angular</span> )}
                        </div>
                    </div>
                </div>
                <div>
                   <IconButton
                       id="basic-button"
                       aria-controls={openMenu ? 'basic-menu' : undefined}
                       aria-haspopup="true"
                       aria-expanded={openMenu ? 'true' : undefined}
                       onClick={handleMenuClick}
                   >
                       <MoreVertIcon></MoreVertIcon>
                   </IconButton>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={openMenu}
                        onClose={handleMenuClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        {
                            role==="ROLE_ADMIN"?(
                                <>
                                {/*<MenuItem onClick={handleMenuClose}>Profile</MenuItem>*/}
                                <MenuItem onClick={handleOpenUserList}>Asssigned User</MenuItem>
                                <MenuItem onClick={handleOpenSubmissionList}>See Submissions</MenuItem>
                                <MenuItem onClick={handleOpenUpdateTaskModel}>Edit</MenuItem>
                                <MenuItem onClick={handleDeleteTask}>Delete</MenuItem>
                            </>
                            ):(
                                <></>
                            )}
                    </Menu>
                </div>
            </div>
            <UserList open={openUserList} handleClose={handleCloseUserList}/>
            <SubmissionList open={openSubmissionList} handleClose={handleCloseSubmissionList}/>
            <EditTaskForm open={openUpdateTaskForm} handleClose={handleCloseUpdateTaskForm}/>
        </div>
    );
};

export default TaskCard