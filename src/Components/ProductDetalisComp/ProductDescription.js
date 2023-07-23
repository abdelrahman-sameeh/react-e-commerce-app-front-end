import React from 'react'
import ProductDetailsHook from '../../custom hook/products/product-details-hook'
import AddProductToCartHook from '../../custom hook/cart/add-product-to-cart-hook'
import { Spinner } from 'react-bootstrap'

const ProductDescription = () => {

  const [product, images, category, oneBrand] = ProductDetailsHook()

  const [loading, isPress, handleChangeColor, handleAddProduct] = AddProductToCartHook()

  return (
    <div className="rounded">
      {
        product && product.data &&
        <>
          {
            category && category.data &&
            <div className="product-category mt-3 fs-5 fw-bold"> {category.data.name} </div>
          }
          <div className="product-name fs-5 fw-bold"> {product.data.title}  </div>
          <div className="product-rate mt-2"> (برودكت) أحمر <span className='text-warning'> {product.data.ratingsQuantity} </span> </div>
          {
            oneBrand && oneBrand.data &&
            <div className="product-category text-black-50 mt-3">
              الماركه
              : <span className='fw-bold fs-5 text-dark'> {oneBrand.data.name} </span>
            </div>
          }
          <div className="product-desc mt-3">
            <span className='text-black-50'>المواصفات:</span><br />
            <span className='fs-5 fw-bold'> {product.data.description} </span>
          </div>
          {
            product && product.data && product.data.availableColors &&
            <div className="product-category text-black-50 mt-3">
              الالوان المتاحه
              :
            </div>
          }
          <form className='addToCart' action={`/product/${product.data._id}`} method="get">
            {/* get from backend */}

            {
              product && product.data && product.data.availableColors.map((color, index) =>
                <React.Fragment key={index}>
                  <label htmlFor="red" for={color} style={{ backgroundColor: color }} className="phone-color"></label>
                  <input onClick={handleChangeColor} className='d-none' type="radio" id={color} value={color} />
                </React.Fragment>
              )
            }

            <div className='d-flex'>
              <input className='form-control w-25' disabled type="text" value={product.data.price} />
              <button onClick={handleAddProduct} className='btn btn-dark me-2 '> اضف للعربه
                {loading && isPress && <Spinner variant='light' animation='border' />}
              </button>
            </div>
          </form>
        </>
      }
    </div>
  )
}

export default ProductDescription