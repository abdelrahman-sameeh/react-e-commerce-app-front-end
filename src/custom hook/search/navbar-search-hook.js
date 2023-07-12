import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductSearch } from '../../redux/actions/productAction'
import { useEffect } from 'react'

const NavbarSearchHook = () => {
   const [searchWord, setSearchWord] = useState('')
   const dispatch = useDispatch()

   const handleSearchByWord = (e) => {
      localStorage.setItem('searchWord', e.target.value)
      setSearchWord(e.target.value)
   }

   let word = ''
   if (localStorage.getItem('searchWord'))
      word = localStorage.getItem('searchWord')

   useEffect(() => {
      setTimeout(() => {
         dispatch(getAllProductSearch(`keyword=${word}&limit=4`))
      }, 1000);
   }, [searchWord])


   return [word, handleSearchByWord]
}

export default NavbarSearchHook