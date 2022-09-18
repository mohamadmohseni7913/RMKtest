import { getAxiosInstance } from "../api";
let token = localStorage.getItem("token")
export const GetProduct=(CallBack)=>{
    getAxiosInstance(token).get("/products")
    .then(response=>{
        const data= response.data;
        CallBack(true,data)
    })
    .catch(err=>{
        CallBack(false,err)
    })
}

// export const LoginApi = async (data) => (await getAxiosInstance().post("/login",data));