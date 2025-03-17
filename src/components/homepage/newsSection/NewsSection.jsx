import React from "react";
import newsImage1 from "@/assets/homepage/newsImage1.svg";
import newsImage2 from "@/assets/homepage/newsImage2.svg";
import newsImage3 from "@/assets/homepage/newsImage3.svg";
import newsImage4 from "@/assets/homepage/newsImage4.svg";

export default function SingleNewsCards() {
    const news = [
        {
            title: "Top 10 best appreciating condos in Las Vegas",
            image: newsImage1,
            link: "#",
        },
        {
            title: "The top 5 most livable Las Vegas neighborhoods",
            image: newsImage2,
            link: "#",
        },
        {
            title: "In Las Vegas, home prices have doubled in the...",
            image: newsImage3,
            link: "#",
        },
        {
            title: "Las Vegas neighborhood where it's better...",
            image: newsImage4,
            link: "#",
        },
    ];

    return (
        <div className="w-full flex flex-col items-center p-6">
            <span className="flex flex-col items-start w-full md:w-3/5 mb-5 px-4 md:px-0">
                <h1 className="text-2xl md:text-3xl font-bold text-left text-black">
                    THE MOST RECENT
                </h1>
                <h1 className="text-2xl md:text-3xl font-bold text-left text-black">
                    LOCAL REAL ESTATE NEWS
                </h1>
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full md:w-3/5 px-4 md:px-0">
                {news.map((singleNews, index) => (
                    <div key={index} className="relative rounded-lg overflow-hidden shadow-lg">
                        <img
                            src={singleNews.image}
                            alt={singleNews.title}
                            className="w-full h-60 md:h-96 object-cover"
                        />
                        <div className="absolute bottom-0 flex flex-col justify-end bg-black bg-opacity-50 text-white h-full p-4 w-full">
                            <h3 className="font-bold text-base md:text-lg">{singleNews.title}</h3>
                            <a href={singleNews.link} className="text-sm mt-2 inline-block underline">
                                Continue reading →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
