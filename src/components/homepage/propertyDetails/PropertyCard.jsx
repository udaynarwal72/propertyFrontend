import { FaBed, FaBath } from "react-icons/fa";

const PropertyCard = ({ image, title, price, description, bedrooms, bathrooms }) => {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-700 text-lg font-bold">{price}</p>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
        <div className="flex items-center justify-between mt-3 text-gray-700">
          <span className="flex items-center gap-1">
            <FaBed className="text-lg" /> {bedrooms} Bedroom
          </span>
          <span className="flex items-center gap-1">
            <FaBath className="text-lg" /> {bathrooms} Bathroom
          </span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
