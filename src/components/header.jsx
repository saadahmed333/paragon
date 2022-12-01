import '../css/header.css'
import 'flowbite'
import trolly from '../assets/svgs/trolly.png'

function Header() {
  return (
    <div>
      <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="https://flowbite.com/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-6 mr-3 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
          <div className="flex md:order-2">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get started
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export { Header }

{
  /* <div>
<nav classNameName="relative w-full flex flex-wrap items-center justify-between py-3 bg-[#256AB5] text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
  <div classNameName="container-fluid w-full flex flex-wrap  items-center justify-between px-[80px]">
    <button
      classNameName="navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline float-right"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent1"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="bars"
        classNameName="w-6"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
        ></path>
      </svg>
    </button>
    <div
      classNameName="collapse navbar-collapse flex-grow items-center"
      id="navbarSupportedContent1"
    >
      <a classNameName="text-xl text-white pr-2 font-semibold" href="#">
        PARAGON
      </a>
          <div classNameNameName="ml-[40px] w-[600p]">
          <ul classNameName="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
        <li classNameName="nav-item p-2">
          <a classNameName="nav-link text-white" href="#">
            Home
          </a>
        </li>
        <li classNameName="nav-item p-2">
          <a
            classNameName="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
            href="#"
          >
            About
          </a>
        </li>
        <li classNameName="nav-item p-2">
          <a
            classNameName="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
            href="#"
          >
            Category
          </a>
        </li>
        <li classNameName="nav-item p-2">
          <a
            classNameName="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
            href="#"
          >
            Customers
          </a>
        </li>
        <li classNameName="nav-item p-2">
          <a
            classNameName="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
            href="#"
          >
            Services
          </a>
        </li>
        <li classNameName="nav-item p-2">
          <a
            classNameName="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
            href="#"
          >
            Contact Us
          </a>
        </li>
      </ul>
          </div>
    </div>

    <div classNameName="flex items-center relative">
      <div classNameName="dropdown relative">
        <a
          classNameName="dropdown-toggle flex items-center bg-[#397DD3] hidden-arrow border p-[5px]"
          href="#"
          id="dropdownMenuButton2"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"

        >
          <img
            src={trolly}
            classNameName="h-[20px]"
            alt=""
            loading="lazy"
          />
          <h1>PARAGON</h1>
        </a>
      </div>
    </div>
  </div>
</nav>
</div> */
}
