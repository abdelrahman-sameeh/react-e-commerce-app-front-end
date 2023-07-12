import baseURL from "../Api/BaseURL"

export const useDeleteData = (url) => {
   const res = baseURL.delete(url)
   return res
}