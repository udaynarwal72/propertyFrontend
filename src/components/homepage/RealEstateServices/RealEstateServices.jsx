import { Card } from "@/components/ui/card";
import Home from "@/assets/homepage/icons/home.svg";
import home2 from "@/assets/homepage/icons/home2.svg";
import Building from "@/assets/homepage/icons/building.svg";
import HomeInspection from "@/assets/homepage/icons/homeInspection.svg";
import legalServices from "@/assets/homepage/icons/legalServices.svg";
import Lens from "@/assets/homepage/icons/lens.svg";

const services = [
  { title: "SELL YOUR HOME", icon: Home },
  { title: "BUY A HOME", icon: home2 },
  { title: "HOME INSPECTION", icon: Building },
  { title: "LEGAL SERVICES", icon: legalServices },
  { title: "FREE EVALUATION", icon: Lens },
  { title: "HOME INSPECTION", icon: HomeInspection },
];

export default function RealEstateServices() {
  return (
    <div className="flex flex-col md:flex-row items-center lg:items-start justify-center bg-gradient-to-b from-[#EDF7FA] to-white p-10 md:p-28">
      <div className="hidden lg:flex rotate-90 gap-2 mr-[-50px]">
        <span className="text-gray-800 font-semibold lg:rotate-180 tracking-wider text-center">
          SERVICES
        </span>
        <div className="w-[50px] h-[2px] bg-[#8665F6] hidden lg:block lg:rotate-0 mt-2 text-center"></div>
      </div>

      <div className="flex flex-col w-full text-center md:text-left">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            EXCLUSIVE. COMMITTED. PROFESSIONAL
          </h1>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            SERVICES WE CAN OFFER YOU
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 cursor-pointer flex flex-col items-center text-center shadow-lg rounded-2xl transition-transform transform hover:scale-105"
            >
              <img
                src={service.icon}
                className="w-12 h-12 text-gray-700 mb-4"
                alt={service.title}
              />
              <h3 className="font-bold text-lg">{service.title}</h3>
              <p className="text-gray-500 text-sm mt-2">
                We do a free evaluation to be sure you want to start selling.
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
