import React from 'react'

const SideFilter = () => {
   return (
      <div className="col col-2 side-filter" >
         <div className="">
            <div className="fs-5">الفئه</div>
            <div>
               <input type="checkbox" name="all" id="all" />
               <label htmlFor="all">الكل</label>
            </div>
            <div>
               <input type="checkbox" name="all" id="checkbox2" />
               <label htmlFor="checkbox2">اجهزه منزليه</label>
            </div>
            <div>
               <input type="checkbox" name="all" id="checkbox3" />
               <label htmlFor="checkbox3">اجهزه منزليه</label>
            </div>
            <div>
               <input type="checkbox" name="all" id="checkbox4" />
               <label htmlFor="checkbox4">اجهزه منزليه</label>
            </div>
            <div>
               <input type="checkbox" name="all" id="checkbox5" />
               <label htmlFor="checkbox5">اجهزه منزليه</label>
            </div>
         </div>
         <div className="mt-2">
            <div className="fs-5">الماركه</div>
            <div>
               <input type="checkbox" name="all" id="all2" />
               <label htmlFor="all2">الكل</label>
            </div>
            <div>
               <input type="checkbox" name="all" id="checkbox22" />
               <label htmlFor="checkbox22">ابل</label>
            </div>
            <div>
               <input type="checkbox" name="all" id="checkbox23" />
               <label htmlFor="checkbox23">سامسونج</label>
            </div>
         </div>
         <div className="mt-2">
            <div className="fs-5">السعر</div>
            <div className='d-flex mt-2 gap-2 align-items-center'>
               <label htmlFor="all3">من</label>
               <input className='form-control' type="text" name="all" id="all3" />
            </div>
            <div className='d-flex mt-2 gap-2 align-items-center'>
               <label htmlFor="checkbox32">الى</label>
               <input className='form-control' type="text" name="all" id="checkbox32" />
            </div>

         </div>
      </div>
   )
}

export default SideFilter