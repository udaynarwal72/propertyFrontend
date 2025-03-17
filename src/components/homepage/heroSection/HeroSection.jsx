export default function HeroSection() {
    return (
        <div className="absolute h-screen w-full bg-center">
            <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center text-white text-center px-6">
                <h1 className="text-4xl md:text-6xl font-bold">FIND YOUR DREAM HOUSE</h1>
                <p className="text-lg md:text-xl mt-4 max-w-2xl">
                    We are recognized for exceeding client expectations and delivering great results through dedication, ease of process, and extraordinary services to our worldwide clients.
                </p>

                <div className="mt-6 flex flex-col md:flex-row gap-4">
                    <button className="px-6 py-3 bg-transparent border border-white text-white rounded-lg hover:bg-white hover:text-black transition">
                        WHAT'S MY HOME WORTH
                    </button>
                    <button className="px-6 py-3 bg-transparent border border-white text-white rounded-lg hover:bg-white hover:text-black transition">
                        WORK WITH KRYSTELLE
                    </button>
                    
                </div>

                <div className="mt-8 p-2 flex w-full max-w-3xl bg-gray-300 rounded-lg overflow-hidden shadow-lg">
                    <input
                        type="text"
                        placeholder="Enter an address, city or neighborhood"
                        className="w-full px-4 py-3 text-gray-700 focus:outline-none"
                    />
                    <button className="px-6 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition">
                        SEARCH LISTINGS
                    </button>
                </div>
            </div>
        </div>
    );
}
