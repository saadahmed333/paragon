
import "../css/about.css"
import stiches from "../assets/svg/stiches.png"
import personal from "../assets/svg/personal.png"
import custom from "../assets/svg/custom.png"
import tailor1 from "../assets/svg/tailor1.png"
import tailor2 from "../assets/svg/tailor2.png"


function About() {
    return (
        <div>
            <div className="w-[100%] bg-[#2B77C5] px-[10px] py-[20px] text-[white]">
                <h1>Header</h1>
            </div>
            {/* background Image  */}
            <div className="About-Background h-[400px]">
                <div className="flex justify-center h-[400px] flex-col items-center text-white">
                <h1 className="text-[35px] mb-[10px] font-bold ">ABOUT US</h1>
                <span className="w-[290px] text-[15px] text-center">imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</span>
                </div>
            </div>

            {/* About Boxes */}
            <div className="py-[70px]">
                <div className="flex justify-center flex-wrap">
                    <div className="w-[300px] flex mb-[35px] mr-[20px]">
                        <img src={stiches} alt="" className="h-[60px] mr-[10px] sm:h-[40px]" />
                        <div>
                        <p className="font-bold mb-[10px]">STITCHING</p>
                        <span>dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</span>
                        </div>
                    </div>
                    <div className="w-[300px] flex mb-[35px] mr-[20px]">
                        <img src={personal} alt="" className="h-[60px] mr-[10px] sm:h-[40px]" />
                        <div>
                        <p className="font-bold mb-[10px]">PERSONAL BRANDING</p>
                        <span>dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</span>
                        </div>
                    </div>
                    <div className="w-[300px] flex  mb-[35px] mr-[20px]">
                        <img src={custom} alt="" className="h-[60px] mr-[10px] sm:h-[40px]" />
                        <div>
                        <p className="font-bold mb-[10px]">CUSTOM MEASUREMENT</p>
                        <span>dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</span>
                        </div>
                    </div>
                </div>
            </div>

        <div className=" lg:flex lg:justify-center md:flex md:justify-between pb-[40px] mb-[100px] lg:h-[250px] md:h-[240px]">
            <div className="p-[20px] bg-[#ecebfa] lg:w-[50%] flex justify-center items-center  md:w-[50%] md:h-[250px] lg:flex md:flex  sm:p-[30px] sm:w-[100%]">
                <div className=" w-[300px] lg:w-[300px] md:w-[300px] md:ml-[50px] lg:ml-[20px]  h-[150px]">
                <h1 className="text-[25px] text-center font-bold lg:mb-[10px]">WHO WE <span className="text-[#2B77C5]">ARE ?</span></h1>
                <div className="h-[120px] text-center  md:w-[300px] md:text-left text-[12px] ">
                <span className="lg:w-[300px] md:w-[250px] font-semibold ">We have dealt with various kinds of garments, be it school, office or hotel uniforms, labor & security, fashion & casual wear, or any other kind of fabrics. Moreover, we offer embroidery and printing on all of our products. We use only the finest material and are sourcing our raw materials all over the world.</span>
                </div>
                </div>
            </div>
            <div className=" bg-[#2B77C5] flex justify-center sm:p-[10px] h-[200px]  md:h-[250px] lg:flex lg:justify-center  lg:w-[50%] md:w-[50%] relative ">
                <img src={tailor1} alt="" className="h-[210px]  sm:h-[280px] lg:h-[300px] lg:w-[250px] md:h-[250px] sm:absolute sm:left-[160px] sm:top-[30px] md:left-[20px] md:top-[30px] lg:left-[-80px] lg:top-[40px] " />
                <img src={tailor2} alt="" className="h-[210px]  sm:h-[280px] lg:h-[300px] lg:w-[250px] md:h-[250px] sm:absolute  md:left-[180px] sm:left-[360px] sm:top-[80px] md:top-[90px] lg:left-[150px] lg:top-[80px]"/>
            </div>
        </div>


        {/* About Laptop 3rd part */}

        <div>
        <section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-12">
      <div class="p-12 md:w-1/2 flex flex-col items-start">
        {/* <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">CATEGORY</span> */}
        <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">WELCOME TO <span className="text-[#2B77C5]">PARAGON</span></h2>
        <p class="leading-relaxed mb-8">We have dealt with various kinds of garments, be it school, office or hotel uniforms, labor & security, fashion & casual wear, or any other kind of fabrics. Moreover, we offer embroidery and printing on all of our products. </p>
        <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
          <a class="text-indigo-500 inline-flex items-center">Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <span class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>1.2K
          </span>
          <span class="text-gray-400 inline-flex items-center leading-none text-sm">
            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
            </svg>6
          </span>
        </div>
        <a class="inline-flex items-center">
          <img alt="blog" src="https://dummyimage.com/104x104" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
          <span class="flex-grow flex flex-col pl-4">
            <span class="title-font font-medium text-gray-900">Holden Caulfield</span>
            <span class="text-gray-400 text-xs tracking-widest mt-0.5">UI DEVELOPER</span>
          </span>
        </a>
      </div>
      <div class="p-12 md:w-1/2 flex flex-col items-start">
        {/* <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">CATEGORY</span> */}
        <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">WELCOME TO <span className="text-[#2B77C5]">PARAGON</span></h2>
        <p class="leading-relaxed mb-8">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's, slow-carb etsy tumeric.</p>
        <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
          <a class="text-indigo-500 inline-flex items-center">Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <span class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>1.2K
          </span>
          <span class="text-gray-400 inline-flex items-center leading-none text-sm">
            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
            </svg>6
          </span>
        </div>
        <a class="inline-flex items-center">
          <img alt="blog" src="https://dummyimage.com/103x103" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
          <span class="flex-grow flex flex-col pl-4">
            <span class="title-font font-medium text-gray-900">Alper Kamu</span>
            <span class="text-gray-400 text-xs tracking-widest mt-0.5">DESIGNER</span>
          </span>
        </a>
      </div>
    </div>
  </div>
</section>
        </div>
        </div>
    )
}


export {About}