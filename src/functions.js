document.addEventListener('click', (e) => {
   if (e.target.classList.contains('phone-color')) {
      const productColors = document.querySelectorAll('label')
      productColors.forEach(color => {
         color.classList.remove('active')
      })
      e.target.classList.add('active')
   }


   if (e.target.classList.contains('link')) {
      window.scrollTo({
         top: 0,
         behavior: 'smooth'
      })
   }

})


// validation choose product color
document.addEventListener('submit', (e) => {
   if (e.target.classList.contains('addToCart')) {
      if (!e.target.color.value) {
         e.preventDefault()
      }
   }
})








