import Footer from "./components/footer/Footer";
import AboutAgent from "./components/homepage/aboutAgent/AboutAgent";
import GetInTouch from "./components/homepage/getInTouch/GetInTouch";
import HeroSection from "./components/homepage/heroSection/HeroSection";
import NewsSection from "./components/homepage/newsSection/NewsSection";
import PropertyDetails from "./components/homepage/propertyDetails/PropertyDetails";
import RealEstateServices from "./components/homepage/realEstateServices/RealEstateServices";
import HourseImage from "@/assets/homepage/houseImage.svg";
import Navbar from "./components/navBar/NavBar";
import SuperNavbar from "./components/superNavbar/superNavBar";
function App() {
  return (
    <>
      <div>
        <div className="">
          <SuperNavbar />
        </div>
        <div>
          <Navbar />
        </div>
        <HeroSection />
        <img src={HourseImage} className="w-full h-screen object-cover" alt="" />
      </div>
      <AboutAgent />
      <PropertyDetails />
      <RealEstateServices />
      <GetInTouch />
      <NewsSection />
      <Footer />

    </>
  )
}

export default App;