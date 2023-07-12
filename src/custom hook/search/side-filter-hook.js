import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory } from '../../redux/actions/categoryAction'
import { getAllBrands } from '../../redux/actions/brandAction'
import { useState } from 'react'
import { getAllProductSearch, getAllProducts } from '../../redux/actions/productAction'

const SideFilterHook = () => {


   const dispatch = useDispatch()

   useEffect(() => {

      const run = async () => {
         await dispatch(getAllBrands())
         await dispatch(getAllCategory())
      }

      run()
   }, [])

   const categories = useSelector(state => state.category.category)
   const brands = useSelector(state => state.allBrand.brands)

   const [catChecked, setCatChecked] = useState([])
   const [brandChecked, setBrandChecked] = useState([])




   // set selected category in array to send with query string to sort
   const handleChangeCategory = (e) => {
      const value = e.target.value
      if (value === '0') {
         setCatChecked([])
         localStorage.removeItem('catChecked')

         setTimeout(() => {
            dispatch(getAllProducts(4))
         }, 1000);
      } else {
         if (e.target.checked) {
            setCatChecked([...catChecked, value])
         } else {
            const checked = catChecked.filter(cat => {
               return cat !== value
            })
            setCatChecked(checked)
         }
      }

   }


   useEffect(() => {
      if (catChecked && catChecked.length) {
         localStorage.setItem('catChecked', JSON.stringify(catChecked));
         let query = getQueryFromLocalStorage()

         setTimeout(() => {
            dispatch(getAllProductSearch(query))
         }, 1000);
      }
   }, [catChecked])

   // set selected brand in array to send with query string to sort
   const handleChangeBrand = (e) => {
      const value = e.target.value
      if (value === '0') {
         setBrandChecked([])
         localStorage.removeItem('brandChecked')

         // get all product when click all product
         setTimeout(() => {
            dispatch(getAllProducts(4))
         }, 1000);

      } else {
         if (e.target.checked) {
            setBrandChecked([...brandChecked, value])
         } else {
            const checked = brandChecked.filter(cat => {
               return cat !== value
            })
            setBrandChecked(checked)
         }
      }
   }

   useEffect(() => {
      if (brandChecked && brandChecked.length) {
         localStorage.setItem('brandChecked', JSON.stringify(brandChecked))
         let query = getQueryFromLocalStorage();

         setTimeout(() => {
            dispatch(getAllProductSearch(query))
         }, 1000);

      }
   }, [brandChecked])


   function getQueryFromLocalStorage() {
      let query = '&';

      if (localStorage.getItem('catChecked')) {
         let categoriesChecked = JSON.parse(localStorage.catChecked)
         categoriesChecked.map(cat => {
            return query += `category[in][]=${cat}&`
         })
      }


      if (localStorage.getItem('brandChecked')) {
         const brandsChecked = JSON.parse(localStorage.getItem('brandChecked'))
         brandsChecked.map(brand => {
            return query += `brand[in][]=${brand}&`
         })
      }

      if (!query.includes('limit'))
         query += `limit=4&`

      if (localStorage.getItem('searchWord'))
         query += `word=${localStorage.getItem('searchWord')}&`


      if (localStorage.getItem('sort'))
         query += `sort=${localStorage.getItem('sort')}&`


      if (localStorage.getItem('priceFrom'))
         query += `price[gte]=${localStorage.getItem('priceFrom')}&`


      if (localStorage.getItem('priceTo'))
         query += `price[lte]=${localStorage.getItem('priceTo')}&`


      return query
   }


   const [from, setPriceFrom] = useState(0)
   const [to, setPriceTo] = useState(0)

   const priceFrom = (e) => {

      setPriceFrom(e.target.value)
      if (e.target.value > 0)
         localStorage.setItem('priceFrom', e.target.value)

   }
   const priceTo = (e) => {
      setPriceTo(e.target.value)
      if (e.target.value > 0)
         localStorage.setItem('priceTo', e.target.value)
   }

   useEffect(() => {
      const query = getQueryFromLocalStorage()
      setTimeout(() => {
         if (from > 0)
            dispatch(getAllProductSearch(query))
      }, 1000);
   }, [from, to])


   return [categories, brands, handleChangeCategory, handleChangeBrand, priceFrom, priceTo, getQueryFromLocalStorage]

}

export default SideFilterHook