import './App.css';
import {About} from "./container/about"
import {Categories} from "./container/categories"
import {ContactUs} from "./container/contactus"
import {Customers} from "./container/customers"
function App() {
  return (
    <>
      <div>
        <About />
        <Categories />
        <ContactUs />
        <Customers />
      </div>
    </>
  );
}

export default App;
