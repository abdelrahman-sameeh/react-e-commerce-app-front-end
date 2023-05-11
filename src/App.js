import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import Footer from "./Components/Utilty/Footer";
import { BrowserRouter } from 'react-router-dom';
import LoginPage from "./Pages/Auth/LoginPage";
import NavbarLogin from "./Components/Utilty/NavbarLogin";
import SignupPage from "./Pages/Auth/SignupPage";
import AllCategoryPage from "./Pages/Category/AllCategoryPage";
import FamousBrandPage from "./Pages/FamousBrands/FamousBrandsPage";
import ShopProductsPage from "./Pages/Products/ShopProductsPage";
import ProductDetailsPage from "./Pages/Products/ProductDetailsPage";
import CartPage from "./Pages/Cart/CartPage";
import PaymentPage from "./Pages/Payment/PaymentPage";
import AdminAllProductsPage from "./Pages/Admin/AdminAllProductsPage";
import AdminAllOrdersPage from "./Pages/Admin/AdminAllOrdersPage";
import AdminOrderDetailsPage from "./Pages/Admin/AdminOrderDetailsPage";
import AdminAddBrandPage from "./Pages/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./Pages/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "./Pages/Admin/AdminAddSubCategoryPage";
import AdminAddProductPage from "./Pages/Admin/AdminAddProductPage";
import UserAllOrdersPage from "./Pages/User/UserAllOrdersPage";
import UserFavProductsPage from "./Pages/User/UserFavProductsPage";
import UserAddressesPage from "./Pages/User/UserAddressesPage";
import UserEditAddressPage from "./Pages/User/UserEditAddressPage";
import UserProfilePage from "./Pages/User/UserProfilePage";
import UserModifyProfilePage from "./Pages/User/UserModifyProfilePage";


function App() {
  return (
    <div className="App">
      <NavbarLogin />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/category" element={<AllCategoryPage />} />
          <Route path="/brands" element={<FamousBrandPage />} />
          <Route path="/products" element={<ShopProductsPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order/payMethod" element={<PaymentPage />} />
          <Route path="/admin/allProducts" element={<AdminAllProductsPage />} />
          <Route path="/admin/allOrders" element={<AdminAllOrdersPage />} />
          <Route path="/admin/order/:id" element={<AdminOrderDetailsPage />} />
          <Route path="/admin/addBrand" element={<AdminAddBrandPage />} />
          <Route path="/admin/addCategory" element={<AdminAddCategoryPage />} />
          <Route path="/admin/addSubCategory" element={<AdminAddSubCategoryPage />} />
          <Route path="/admin/addProduct" element={<AdminAddProductPage />} />
          <Route path="/user/allOrders" element={<UserAllOrdersPage />} />
          <Route path="/user/favProducts" element={<UserFavProductsPage />} />
          <Route path="/user/addresses" element={<UserAddressesPage />} />
          <Route path="/user/profile" element={<UserProfilePage />} />
          <Route path="/edit-address" element={<UserEditAddressPage />} />
          <Route path="/modify-profile" element={<UserModifyProfilePage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div> 
  );
}

export default App;
