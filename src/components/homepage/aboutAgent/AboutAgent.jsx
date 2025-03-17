import React from "react";
import agentImage from "@/assets/homepage/agentImage.svg";

export default class AboutAgent extends React.Component {
    render() {
        return (
            <div className="flex flex-col md:flex-row w-full items-center justify-center gap-5 p-6 md:p-10 bg-white rounded-lg shadow-lg">
                <div className="w-full md:w-1/3 flex justify-center">
                    <img
                        src={agentImage}
                        alt="Real Estate Agent Keystelle Romy"
                        className="w-3/4 md:w-full h-auto rounded-lg shadow-md object-cover"
                        loading="lazy"
                    />
                </div>

                <div className="flex flex-col w-full md:w-2/3 text-center md:text-left">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                        MEET KEYSTELLE ROMY
                    </h1>
                    <div className="text-gray-700 text-base md:text-lg leading-relaxed space-y-3">
                        <p>
                            Helping you achieve your real estate goals is my top priority. When we work together, it is about YOU.
                            I listen to your needs, work diligently to achieve your objectives, and strive to always exceed your expectations.
                        </p>
                        <p>
                            Krystelle's outcomes-driven approach, uprightness, and genuineness have earned him top-producer status and 5-star reviews from clients. 
                            He utilizes cutting-edge technology, custom marketing strategies, and in-depth market knowledge to gain an edge over other agents. 
                            Krystelle listens to his clients' goals, creates a personalized plan, and maintains constant communication, ensuring an exceptional experience from start to finish.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
