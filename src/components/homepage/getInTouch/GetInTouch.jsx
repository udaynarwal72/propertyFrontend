import ContactForm from "./MessageForm";

export default function GetInTouch() {
  return (
    <div className="relative w-full flex flex-col md:flex-row items-center justify-center p-8 md:p-16 gap-6 md:gap-11">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-full h-3/4 bg-[#EDF7FA]"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-[#EDF7FA] lg:bg-white"></div>
      </div>

      <div className="relative flex flex-col md:flex-row w-full justify-center items-center gap-6 md:gap-11">
        <div className="w-full md:w-1/3 m-4 md:m-10">
          <ContactForm />
        </div>

        <div className="flex flex-col w-full md:w-1/3 text-center md:text-left">
          <h1 className="text-lg md:text-xl font-bold text-[#096CC9] mb-2 md:mb-4">LET'S GRAB COFFEE</h1>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-4">
            GET IN TOUCH WITH ME TO PLAN YOUR NEXT REAL ESTATE
          </h1>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Our experts and developers would love to contribute their expertise and insights and help you today. 
            Contact us to help you plan your next transaction, either buying or selling a home.
          </p>
        </div>
      </div>
    </div>
  );
}
