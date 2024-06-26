import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../api/api";

export const login=createAsyncThunk("auth/login",async(userData)=>{
    try {
        const {data}=await axios.post(`${BASE_URL}/auth/signin`,userData)
        localStorage.setItem("jwt",data.jwt)
    }catch(error){
        console.log("catch error",error)
    }
})