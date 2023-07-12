import baseURL from "../Api/BaseURL"

export const useGetData = async(url, params) => {
   const res = await baseURL.get(url, params)
   return res.data
} 

// get data with more details
export const useGetAllData = async(url, params) => {
   const res = await baseURL.get(url, params)
   return res
} 