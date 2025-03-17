import Facebook from "@/assets/homepage/icons/socialMedia/facebook.svg";
import Twitter from "@/assets/homepage/icons/socialMedia/twitter.svg";
import Linkedin from "@/assets/homepage/icons/socialMedia/linkedIn.svg";
import Pinterest from "@/assets/homepage/icons/socialMedia/pinterest.svg";
import Youtube from "@/assets/homepage/icons/socialMedia/youtube.svg";
import Mail from "@/assets/homepage/icons/socialMedia/mail.svg";

export default function SuperNavbar() {
  return (
    <div className="w-full absolute bg-transparent z-40 px-4 md:px-6 py-2 md:py-3 flex flex-col md:flex-row justify-center md:justify-between items-center text-white text-sm">
      <div className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-6 mb-2 md:mb-0">
        <img src={Facebook} alt="facebook" className="w-4 h-4 md:w-5 md:h-5" />
        <img src={Twitter} alt="twitter" className="w-4 h-4 md:w-5 md:h-5" />
        <img src={Linkedin} alt="linkedin" className="w-4 h-4 md:w-5 md:h-5" />
        <img src={Pinterest} alt="pinterest" className="w-4 h-4 md:w-5 md:h-5" />
        <img src={Youtube} alt="youtube" className="w-4 h-4 md:w-5 md:h-5" />
      </div>

      <div className="flex items-center space-x-2">
        <img src={Mail} alt="mail" className="w-4 h-4 md:w-5 md:h-5" />
        <span className="text-white text-xs md:text-sm">contact@krystelleromy.com</span>
      </div>
    </div>
  );
}
