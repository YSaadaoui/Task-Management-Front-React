import React, {useState} from 'react'
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import Button from "@mui/material/Button";


const Signup = ({togglePanel}) => {
    const[formData,setFormData]=useState({
        fullName:"",
        email:"",
        password:"",
        role:""
    })
    const handleChange=(e)=>{
        const { name, value }=e.target;
        setFormData({ ...formData,[name]:value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("login form",formData)
    }
    return (
        <div >
            <h1 className='text-lg font-bold text-center pb-8'>Login</h1>
            <form className="space-y-3" onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Full Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder='enter your full name... ' />
                <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='enter your email... ' />
                <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder='enter your password... ' />
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Role</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={formData.role}
                        label="Role"
                        name="role"
                        onChange={handleChange}
                    >
                        <MenuItem value={"ROLE_CUSTOMER"}>USER</MenuItem>
                        <MenuItem value={"ROLE_ADMIN"}>ADMIN</MenuItem>

                    </Select>
                </FormControl>
                <div>
                    <Button fullWidth className="customeButton" type="submit" sx={{padding:".9rem"}}>
                        Register
                    </Button>
                </div>
            </form>
            <div className="mt-5 flex items-center gap-2 py-5 justify-center">
                <span>Already have an account?</span>
                <Button onClick={togglePanel}> Signin</Button>
            </div>
        </div>
    )
}
export default Signup
