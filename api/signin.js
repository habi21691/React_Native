import axios from "axios";



export default axios.create({
    baseURL:"http://192.168.43.63:5000",
    responseType:"json",
    withCredentials:true
})