import React from "react";
import PropertyCard from "./PropertyCard";
import BedRoom from "@/assets/homepage/bedRoom.svg";

export default class PropertyDetails extends React.Component {
  render() {
    const propertyDetails = [
      {
        image: BedRoom,
        title: "Villa with Amazing View",
        price: "$600,000",
        description: "Beautiful, updated, ground-level Co-op apartment in the desirable Bay...",
        bedrooms: 4,
        bathrooms: 3,
      },
      {
        image: BedRoom,
        title: "Villa with Amazing View",
        price: "$600,000",
        description: "Beautiful, updated, ground-level Co-op apartment in the desirable Bay...",
        bedrooms: 4,
        bathrooms: 3,
      },
      {
        image: BedRoom,
        title: "Villa with Amazing View",
        price: "$600,000",
        description: "Beautiful, updated, ground-level Co-op apartment in the desirable Bay...",
        bedrooms: 4,
        bathrooms: 3,
      },
    ];

    return (
      <div className="flex flex-col md:flex-row items-center lg:items-start justify-center bg-white md:p-16">
        <div className="hidden lg:flex gap-2 rotate-90 mr-[-50px]">
          <span className="text-gray-800 font-semibold lg:rotate-180 tracking-wider text-center">
            PROPERTIES
          </span>
          <div className="w-[50px] h-[2px] bg-[#8665F6] hidden lg:block lg:rotate-0 mt-2 text-center"></div>
        </div>

        <div className="flex flex-col w-full text-center md:text-left">
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              EXPLORE THE LATEST PROPERTIES
            </h1>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              AND SELECT YOUR HOME
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {propertyDetails.map((property, index) => (
              <PropertyCard
                key={index}
                image={property.image}
                title={property.title}
                price={property.price}
                description={property.description}
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
