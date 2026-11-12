import enivronment from "../../environment";
import {GET,PATCH} from "../http.service";

export const getProfile = async () => {
  const response = await GET(enivronment.profile);
  return response;
};
export const updateProfile = async (
    {
        firstName,
        lastName,
        phone,
        location,
        bio,
})=>{
    const response = await PATCH(enivronment.profile,{
        firstName,
        lastName,
        phone,
        location,
        bio,    
    });
    return response;
};