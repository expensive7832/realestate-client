import axios from "axios";

import store from "./../Redux/store"

const axiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND_URL}`,
    
})

axiosInstance.interceptors.request.use((config) =>{
    let token = store.getState().user.token.access
    
    if(token !== "" && token !== undefined){

        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})


export default axiosInstance