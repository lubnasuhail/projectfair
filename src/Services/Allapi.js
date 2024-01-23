import { commonApi } from "./commonApi";
import { BASE_URL } from "./baseUrl";

export const registerApi=async(data)=>{
    return await commonApi("POST",`${BASE_URL}/register`,data,"")
}