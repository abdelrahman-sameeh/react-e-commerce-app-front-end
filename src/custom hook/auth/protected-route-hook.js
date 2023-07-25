import { useEffect, useState } from "react"

const ProtectedRouteHook = () => {
   let user = null;
   if (localStorage.user) {
      user = JSON.parse(localStorage.user)
   }

   const [userData, setUserDate] = useState(user)
   const [isUser, setIsUser] = useState()
   const [isAdmin, setIsAdmin] = useState()

   useEffect(() => {

      // not auth
      if (userData === null) {
         setIsUser(false)
         setIsAdmin(false)
      }

      // if user
      if (userData && userData.role === 'user') {
         setIsUser(true)
         setIsAdmin(false)
      }

      // if admin
      if (userData && userData.role === 'admin') {
         setIsAdmin(true)
         setIsUser(false)
      }
   }, [])

   return [isUser, isAdmin, userData]
}

export default ProtectedRouteHook