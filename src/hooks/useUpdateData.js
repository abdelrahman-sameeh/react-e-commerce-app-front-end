import baseURL from "../Api/BaseURL"

export const useUpdateData = async (url, formData) => {
   const config = {
      headers: {
         'Content-Type': 'multipart/form-data',
         Authorization: 'Bearer ' + localStorage.getItem('token')
      }
   }
   const res = await baseURL.put(url, formData, config)
   return res;
}


export const useUpdateDataWithoutImage = async (url, data) => {
   const config = {
      headers: {
         Authorization: 'Bearer ' + localStorage.getItem('token'),
      }
   }
   const res = await baseURL.put(url, data, config)
   return res;
}


