import React from 'react'

const ProductDescription = () => {
  return (
    <div className="">
      <div className="product-category mt-3 fs-5 fw-bold"> الاكترونات </div>
      <div className="product-name fs-5 fw-bold"> آيفون XR بذاكرة سعة 128 جيجابايت ويدعم تقنية 4G LTE مع تطبيق فيس تايم </div>
      <div className="product-rate mt-2"> (برودكت) أحمر <span className='text-warning'> 4.5 </span> </div>
      <div className="product-category text-black-50 mt-3">
        الماركه
        : <span className='fw-bold fs-5 text-dark'> سامسونج </span>
      </div>
      <div className="product-description mt-3">
        <span className='text-black-50'>المواصفات:</span><br />
        <span className='fs-5 fw-bold'>يتميز بوجود بطاقة SIM مزدوجة بطاقة فعلية وبطاقة e-SIM يمكنك فتح قفل هاتفك الآيفون وتسجيل الدخول إلى التطبيقات والحسابات وغيرها بسهولة، وتعدّ خاصية معرَف الوجه الأسرع والأكثر أماناً للمصادقة عن طريق بصمة الوجه يتميز بشريحة A12 بايونيك والتي تعد أذكى وأقوى شريحة في الهواتف الذكية شكلت أكثر كاميرات العالم شهرة عصراً جديداً من التصوير الفوتوغرافي حيث يعمل جهاز الاستشعار الابتكاري بخاصية ISP والمحرك العصبي، ما يمكّنك من التقاط صور لم يسبق لها مثيل كاميرا بعدسة واحدة تجعل الأشخاص الموجودين في الأمام في نطاق تركيز دقيق على عكس نطاق الخلفية غير الواضح نظرة عامة</span>
      </div>

      <div className="product-category text-black-50 mt-3">
        الالوان المتاحه
        :
      </div>
      <form className='addToCart' action="/product/:id" method="get">
        {/* get from backend */}
        <label htmlFor="red" className="phone-color bg-danger"></label>
        <input className='d-none' type="radio" name="color" id="red" value={'red'} />
        <label htmlFor="green" className="phone-color bg-success"></label>
        <input className='d-none' type="radio" name="color" id="green" value={'green'} />
        <label htmlFor="blue" className="phone-color bg-primary"></label>
        <input className='d-none' type="radio" name="color" id="blue" value={'blue'} />
        <div className='d-flex'>
          <input className='form-control w-25' disabled type="text" value={'120'} />
          <button className='btn btn-dark me-2 '> اضف للعربه </button>
        </div>
      </form>
    </div>
  )
}

export default ProductDescription