import { getAxiosInstance } from "../api";
export const LoginApi=(data,CallBack)=>{
    getAxiosInstance().post("/login",data)
    .then(response=>{
        const data= response.data;
        CallBack(true,data)
    })
    .catch(err=>{
        CallBack(false,err)
    })
}
// export const LoginApi = async (data) => (await getAxiosInstance().post("/login",data));