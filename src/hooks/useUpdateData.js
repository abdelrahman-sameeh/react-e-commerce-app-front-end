import baseURL from "../Api/BaseURL"

export const useUpdateData = async (url, formData) => {
   const config = {
      headers: { 'Content-Type': 'multipart/form-data' }
   }
   const res = await baseURL.put(url, formData,config )
   return res;
} 