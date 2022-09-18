import axios from "axios";
export const getAxiosInstance=(token)=>{ 
    return axios.create({
        baseURL:"https://dummyjson.com/auth",
        headers:{
            ContentType: 'multipart/form-data',
            Authorization: token,
            Accept: "application/json"
    }

    })
}
