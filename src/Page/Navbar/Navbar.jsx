import {Avatar} from "@mui/material";
import "./Navbar.css"

const Navbar = () => {
  return(
      <div className='container z-10 sticky left-0 right-0 top-0 py-3 px-5
      lg:px-10, flex justify-between items-center'>
          <p className='font-bold text-lg'> Task Manager</p>
          <div className='flex items-center gap-5'>
              <p>Hello</p>
              {/*sx={{backgroundColor:"#c24dd0"}} className='bg-[#c24dd0]'*/}
              <Avatar src='https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D' >H</Avatar>
          </div>
      </div>
  )
}
export default Navbar