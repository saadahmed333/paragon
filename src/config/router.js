import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "../container/about";
import { Categories } from "../container/categories";
import { ContactUs } from "../container/contactus";
import { Customers } from "../container/customers";
import { Service } from "../container/service.jsx";
import Error404 from "../container/404";
import Home from "../container/index";


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="*" element={<Error404/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/categories" element={<Categories/>}></Route>
        <Route path="/contact" element={<ContactUs/>}></Route>
        <Route path="/customers" element={<Customers/>}></Route>
        <Route path="/service" element={<Service/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
