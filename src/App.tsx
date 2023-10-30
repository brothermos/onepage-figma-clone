import "./App.css";
import designer_1 from "../src/assets/designer_1.png";
import group2 from "../src/assets/group2.svg";
import group3 from "../src/assets/group3.svg";
import group4 from "../src/assets/group4.svg";
import group5 from "../src/assets/group5.svg";
import { GrFacebookOption } from "react-icons/gr";
import { FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

function App() {
  return (
    <>
      <div className="container mx-auto px-16">
        <div className="relative flex">
          <nav className="flex justify-between w-full items-center absolute">
            <div className="flex gap-16 w-1/3 text-[#505F98]">
              <span>Home</span>
              <span>About</span>
              <span>Contact</span>
            </div>
            <div className="w-1/3">
              <span className="text-[#37447E] text-[38px] font-bold">Landing</span>
            </div>
            <button className="w-[160px] h-[26px] text-[12px] text-white bg-[#111B47] font-medium rounded-md">
              Buy Now
            </button>
          </nav>
          <div className="flex max-h-screen">
            <div className="flex flex-col gap-4 justify-center">
              <div className="text-4xl flex flex-col font-medium">
                <span>Introduce Your Product</span>
                <span>Quickly & Effectively</span>
              </div>
              <span className="text-[#505F98]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                <br />
                <br /> Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis
                enim.
              </span>
              <span className="gap-8 flex mt-10 font-medium">
                <button className="w-[160px] h-[36px]  text-white bg-[#111B47] rounded-md">Purchase UI Kit</button>
                <button className="w-[160px] h-[36px]  text-black border-black border-2 rounded-md">Learn More</button>
              </span>
            </div>
            <img src={designer_1} className="w-2/3" />
          </div>
        </div>

        <div className="flex items-center w-full gap-4 mt-40">
          <div className="flex flex-col gap-4 w-1/2">
            <span className="text-4xl font-medium">Light, Fast & Powerful</span>
            <span className="text-[#505F98]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              <br />
              <br /> Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis
              enim.
            </span>
            <div className="flex mt-10">
              <div className="gap-4 flex flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M35.6226 22.2396C35.3938 22.1487 35.1326 22.2056 34.9626 22.3835L32.4001 25.0769V9.07898H32.4031L34.8481 6.43916C35.073 6.19611 35.0582 5.81629 34.8148 5.59136L34.8143 5.59081L33.9343 4.77184L35.1571 3.45193C35.3817 3.2086 35.3666 2.82905 35.1233 2.6044L32.4833 0.15957C32.2402 -0.0653583 31.8606 -0.0508025 31.6357 0.192527L27.3697 4.79848H6.60004C6.59811 3.14241 5.25613 1.80053 3.59995 1.79861H3.00009C1.3439 1.80053 0.00192261 3.14241 0 4.79848V30.5966C0 30.9278 0.268616 31.1964 0.600128 31.1964H9.6828L8.42267 32.7094C8.21091 32.9642 8.24551 33.3424 8.50012 33.5542L11.2668 35.8575C11.5214 36.0696 11.8998 36.035 12.1119 35.7804L12.1122 35.7801L15.1831 32.0909C15.3951 31.8355 15.5316 31.5254 15.5767 31.1964H26.571L22.965 34.9828C22.7368 35.2229 22.7464 35.6027 22.9864 35.8309C23.0979 35.9369 23.246 35.9962 23.4001 35.996H35.3999C35.7314 35.996 36 35.7274 36 35.3962V22.7971C36 22.5516 35.8506 22.3308 35.6226 22.2396ZM33.5597 6.05832L32.3998 7.31286V6.43045L33.1197 5.65048L33.5597 6.05832ZM31.2 5.96V5.95149H31.2071L32.2385 4.8381L30.4763 3.20785L24.3635 9.81344L26.1257 11.4437L31.2 5.96ZM24.9732 12.011L23.593 12.4136L23.8877 11.0061L24.9732 12.011ZM33.8683 3.07595L32.107 1.44653L31.2915 2.32729L33.0532 3.95836L33.8683 3.07595ZM3.00049 2.99851H3.60034C4.5946 2.99851 5.40045 3.8043 5.40045 4.79849V27.6124C4.88409 27.2153 4.25156 26.9988 3.60034 26.9966H3.00049C2.349 26.9988 1.71674 27.2153 1.20038 27.6124V4.79849C1.20038 3.8043 2.00623 2.99851 3.00049 2.99851ZM3.60034 28.1966H3.00049C2.00623 28.1966 1.20038 29.0027 1.20038 29.9966H5.40045C5.40045 29.0027 4.5946 28.1966 3.60034 28.1966ZM14.2611 31.3235L13.8771 31.7843L12.0328 30.2491L12.4162 29.7877C12.6282 29.5331 13.0064 29.4985 13.261 29.7105C13.2613 29.7105 13.2613 29.7108 13.2616 29.7108L14.1836 30.4765C14.4385 30.6883 14.4734 31.0664 14.2616 31.3213L14.2611 31.3218V31.3235ZM9.72949 33.0162L11.5741 34.5514L13.1094 32.7066L11.2651 31.1711L9.72949 33.0162ZM15.3247 29.9966C15.225 29.8304 15.099 29.6818 14.9515 29.5563L14.0294 28.789C13.2654 28.1529 12.1305 28.2564 11.4944 29.0205L10.6803 29.9966H6.60022V5.99843H26.2597L23.0756 9.43909C23.03 9.49045 22.9937 9.54977 22.9688 9.61376C22.9616 9.63106 22.9561 9.64726 22.9501 9.66539C22.9479 9.67226 22.9451 9.67917 22.9424 9.68616C22.938 9.69735 22.9336 9.70876 22.9308 9.72059L22.2145 13.1451C22.147 13.4694 22.3552 13.7872 22.6795 13.8547C22.7759 13.8748 22.8756 13.8709 22.9698 13.8435L26.33 12.8644C26.3384 12.8617 26.346 12.8579 26.3536 12.8541C26.3602 12.8508 26.3668 12.8476 26.3737 12.8451C26.3888 12.8397 26.4044 12.832 26.4207 12.824C26.4879 12.7935 26.5489 12.7504 26.6006 12.6974L31.2003 7.72672V26.3367L27.7143 29.9966H15.3247ZM24.7997 34.796H34.8V24.2968L24.7997 34.796ZM28.8005 33.5962C28.5577 33.5962 28.3388 33.4501 28.246 33.226C28.1532 33.0019 28.2045 32.7437 28.3762 32.572L32.5763 28.3726C32.6886 28.26 32.8413 28.1968 33.0003 28.1968C33.3316 28.1968 33.6005 28.4651 33.6005 28.7966V32.9964C33.6005 33.3276 33.3318 33.5962 33.0003 33.5962H28.8005ZM32.4003 32.3962V30.2447L30.2486 32.3962H32.4003ZM22.2001 22.7971H26.3999C26.7314 22.7971 27 23.0656 27 23.3969C27 23.7283 26.7314 23.9969 26.4001 23.9969H9.60013C9.26862 23.9969 9 23.7283 9 23.3969C9 23.0656 9.26862 22.7971 9.60013 22.7971H13.7999V16.1975C13.8005 16.0385 13.8634 15.8858 13.9752 15.7726L17.5751 12.173C17.8094 11.9387 18.1892 11.9387 18.4235 12.173L22.0235 15.7726C22.1358 15.8855 22.1992 16.0382 22.2001 16.1975V22.7971ZM20.1521 15.5974L18.0004 13.4459L15.8488 15.5974H20.1521ZM14.9999 16.7974H21.0001V22.7971H14.9999V16.7974ZM17.3997 9.59816H18.6V10.7981H17.3997V9.59816ZM18.6 25.1969H17.3997V26.3968H18.6V25.1969Z"
                    fill="black"
                  />
                </svg>
                <span className="font-bold">Title Goes Here</span>
                <span className="text-[#5D6970]">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.{" "}
                </span>
              </div>
              <div className="gap-4 flex flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M35.6226 22.2396C35.3938 22.1487 35.1326 22.2056 34.9626 22.3835L32.4001 25.0769V9.07898H32.4031L34.8481 6.43916C35.073 6.19611 35.0582 5.81629 34.8148 5.59136L34.8143 5.59081L33.9343 4.77184L35.1571 3.45193C35.3817 3.2086 35.3666 2.82905 35.1233 2.6044L32.4833 0.15957C32.2402 -0.0653583 31.8606 -0.0508025 31.6357 0.192527L27.3697 4.79848H6.60004C6.59811 3.14241 5.25613 1.80053 3.59995 1.79861H3.00009C1.3439 1.80053 0.00192261 3.14241 0 4.79848V30.5966C0 30.9278 0.268616 31.1964 0.600128 31.1964H9.6828L8.42267 32.7094C8.21091 32.9642 8.24551 33.3424 8.50012 33.5542L11.2668 35.8575C11.5214 36.0696 11.8998 36.035 12.1119 35.7804L12.1122 35.7801L15.1831 32.0909C15.3951 31.8355 15.5316 31.5254 15.5767 31.1964H26.571L22.965 34.9828C22.7368 35.2229 22.7464 35.6027 22.9864 35.8309C23.0979 35.9369 23.246 35.9962 23.4001 35.996H35.3999C35.7314 35.996 36 35.7274 36 35.3962V22.7971C36 22.5516 35.8506 22.3308 35.6226 22.2396ZM33.5597 6.05832L32.3998 7.31286V6.43045L33.1197 5.65048L33.5597 6.05832ZM31.2 5.96V5.95149H31.2071L32.2385 4.8381L30.4763 3.20785L24.3635 9.81344L26.1257 11.4437L31.2 5.96ZM24.9732 12.011L23.593 12.4136L23.8877 11.0061L24.9732 12.011ZM33.8683 3.07595L32.107 1.44653L31.2915 2.32729L33.0532 3.95836L33.8683 3.07595ZM3.00049 2.99851H3.60034C4.5946 2.99851 5.40045 3.8043 5.40045 4.79849V27.6124C4.88409 27.2153 4.25156 26.9988 3.60034 26.9966H3.00049C2.349 26.9988 1.71674 27.2153 1.20038 27.6124V4.79849C1.20038 3.8043 2.00623 2.99851 3.00049 2.99851ZM3.60034 28.1966H3.00049C2.00623 28.1966 1.20038 29.0027 1.20038 29.9966H5.40045C5.40045 29.0027 4.5946 28.1966 3.60034 28.1966ZM14.2611 31.3235L13.8771 31.7843L12.0328 30.2491L12.4162 29.7877C12.6282 29.5331 13.0064 29.4985 13.261 29.7105C13.2613 29.7105 13.2613 29.7108 13.2616 29.7108L14.1836 30.4765C14.4385 30.6883 14.4734 31.0664 14.2616 31.3213L14.2611 31.3218V31.3235ZM9.72949 33.0162L11.5741 34.5514L13.1094 32.7066L11.2651 31.1711L9.72949 33.0162ZM15.3247 29.9966C15.225 29.8304 15.099 29.6818 14.9515 29.5563L14.0294 28.789C13.2654 28.1529 12.1305 28.2564 11.4944 29.0205L10.6803 29.9966H6.60022V5.99843H26.2597L23.0756 9.43909C23.03 9.49045 22.9937 9.54977 22.9688 9.61376C22.9616 9.63106 22.9561 9.64726 22.9501 9.66539C22.9479 9.67226 22.9451 9.67917 22.9424 9.68616C22.938 9.69735 22.9336 9.70876 22.9308 9.72059L22.2145 13.1451C22.147 13.4694 22.3552 13.7872 22.6795 13.8547C22.7759 13.8748 22.8756 13.8709 22.9698 13.8435L26.33 12.8644C26.3384 12.8617 26.346 12.8579 26.3536 12.8541C26.3602 12.8508 26.3668 12.8476 26.3737 12.8451C26.3888 12.8397 26.4044 12.832 26.4207 12.824C26.4879 12.7935 26.5489 12.7504 26.6006 12.6974L31.2003 7.72672V26.3367L27.7143 29.9966H15.3247ZM24.7997 34.796H34.8V24.2968L24.7997 34.796ZM28.8005 33.5962C28.5577 33.5962 28.3388 33.4501 28.246 33.226C28.1532 33.0019 28.2045 32.7437 28.3762 32.572L32.5763 28.3726C32.6886 28.26 32.8413 28.1968 33.0003 28.1968C33.3316 28.1968 33.6005 28.4651 33.6005 28.7966V32.9964C33.6005 33.3276 33.3318 33.5962 33.0003 33.5962H28.8005ZM32.4003 32.3962V30.2447L30.2486 32.3962H32.4003ZM22.2001 22.7971H26.3999C26.7314 22.7971 27 23.0656 27 23.3969C27 23.7283 26.7314 23.9969 26.4001 23.9969H9.60013C9.26862 23.9969 9 23.7283 9 23.3969C9 23.0656 9.26862 22.7971 9.60013 22.7971H13.7999V16.1975C13.8005 16.0385 13.8634 15.8858 13.9752 15.7726L17.5751 12.173C17.8094 11.9387 18.1892 11.9387 18.4235 12.173L22.0235 15.7726C22.1358 15.8855 22.1992 16.0382 22.2001 16.1975V22.7971ZM20.1521 15.5974L18.0004 13.4459L15.8488 15.5974H20.1521ZM14.9999 16.7974H21.0001V22.7971H14.9999V16.7974ZM17.3997 9.59816H18.6V10.7981H17.3997V9.59816ZM18.6 25.1969H17.3997V26.3968H18.6V25.1969Z"
                    fill="black"
                  />
                </svg>
                <span className="font-bold">Title Goes Here</span>
                <span className="text-[#5D6970]">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.{" "}
                </span>
              </div>
            </div>
          </div>
          <img src={group2} className="w-1/2" />
        </div>

        <div className="flex items-center w-full gap-4 mt-40">
          <img src={group3} className="w-1/2" />
          <div className="flex flex-col gap-4 w-1/2">
            <span className="text-4xl font-medium">Light, Fast & Powerful</span>
            <span className="text-[#505F98]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
              <br />
              <br /> mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
              quis enim.
            </span>
          </div>
        </div>

        <div className="flex items-center w-full gap-4 mt-40">
          <img src={group4} className="w-1/2" />
          <div className="flex flex-col gap-4 w-1/2">
            <span className="text-4xl font-medium">Light, Fast & Powerful</span>
            <span className="text-[#505F98]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
              <br />
              <br /> mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
              quis enim.
            </span>
          </div>
        </div>

        <div className="flex items-center w-full gap-4 mt-40">
          <img src={group5} className="w-1/2" />
          <div className="flex flex-col gap-4 w-1/2">
            <span className="text-4xl font-medium">Light, Fast & Powerful</span>
            <span className="text-[#505F98]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
              <br />
              <br /> mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
              quis enim.
            </span>
            <button className="w-[160px] h-[40px] mt-10 text-white bg-[#111B47] rounded-md">Purchase Now</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center text-center mt-40 pb-44 bg-[#F2F5FF]">
        <svg
          className=" relative block w-full calc:w-full[1.3px] h-[50px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className=" fill-white"></path>
        </svg>
        <span className="font-medium text-[36px] text-[#091133] mt-44">A Price To Suit Everyone</span>
        <span className=" w-1/2 text-[#6F7CB2] mt-4">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
          sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus{" "}
        </span>
        <span className="text-[50px] font-medium text-[#222F65]">$40</span>
        <span className="text-[#37447E]">UI Design Kit</span>
        <div className="flex flex-col mt-10 gap-3">
          <span className="text-[#5D6970] text-[14px]">See, One price. Simple.</span>
          <button className="w-[200px] h-[40px] text-white bg-[#111B47] rounded-md">Purchase Now</button>
        </div>
      </div>
      <footer className="bg-[#E7ECFF] py-12">
        <div className="container mx-auto px-16 flex items-center justify-between border-b pb-12 border-[#CDD1D4]">
          <span className=" text-[#939EA4]">©2023 Yourcompany</span>
          <span className="text-[#37447E] text-[38px] font-bold">Landing</span>
          <button className="w-[150px] h-[40px] text-white bg-[#111B47] rounded-md">Purchase Now</button>
        </div>
        <div className="flex justify-between container mx-auto px-16 mt-6">
          <div className="flex gap-10 text-[#929ECC]">
            <span>Home</span>
            <span>About</span>
            <span>Contact</span>
          </div>
          <div className="flex gap-8 text-[#5D6970]">
            <GrFacebookOption />
            <FaLinkedinIn />
            <FaTwitter />
            <FaYoutube />
            <FaInstagram />
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
