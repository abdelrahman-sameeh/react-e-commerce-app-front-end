import baseURL from "../Api/BaseURL"

export const useInsertDataWithImage = async (url, params) => {
   const config = {
      headers: { 'Content-Type': 'multipart/form-data' }
   }
   const res = await baseURL.post(url, params, config)
   return res
}

export const useInsertData = async (url, params) => {
   const res = await baseURL.post(url, params)
   return res
} 