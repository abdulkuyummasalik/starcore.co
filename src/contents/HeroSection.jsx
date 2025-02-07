import React from "react";

const HeroSection = () => {
    const features = ["Velocity", "Volume", "Variability"];
    const headingTexts = [
        "Many Organizations and Companies",
        "have been drowned by their"
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/30">
            <div className="container mx-auto px-4 pb-4">
                <div className="grid md:grid-cols-12 gap-12 items-center pt-32">
                    <div className="md:col-span-8 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-2xl text-gray-600 font-medium">In the era of</h2>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-tahiti mb-6">
                                Big Data
                            </h1>
                            <div className="space-y-1">
                                {headingTexts.map((text, index) => (
                                    <p key={index} className="text-2xl md:text-3xl text-gray-800 font-semibold">
                                        {text}
                                    </p>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 py-6">
                            {features.map((feature) => (
                                <div key={feature} className="flex items-center gap-4 group">
                                    <span className="h-[2px] w-8 bg-bermuda group-hover:w-12 transition-all duration-300" />
                                    <span className="text-3xl md:text-4xl font-bold text-bermuda hover:text-tahiti transition-colors duration-300">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6">
                            <p className="text-2xl text-gray-700 font-medium">
                                helps to turn their data into
                            </p>
                            <div className="relative inline-block mt-4">
                                <span className="text-4xl md:text-5xl font-bold text-tahiti relative z-10">
                                    Values
                                </span>
                                <div className="absolute -bottom-2 left-0 w-full h-3 bg-bermuda -rotate-1" />
                            </div>
                        </div>

                        <div className="pt-8">
                            <a
                                href="#"
                                className="inline-flex items-center bg-bermuda hover:bg-tahiti text-white font-medium rounded-full px-8 py-3 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                            >
                                Learn More
                                <i className="ri-arrow-right-line ml-2" />
                            </a>
                        </div>
                    </div>

                    <div className="md:col-span-4 relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-bermuda/20 to-tahiti/20 rounded-xl rotate-2 group-hover:rotate-3 transition-transform duration-300" />
                        <img
                            src="./src/assets/images/hero.webp"
                            alt="Hero"
                            className="relative rounded-xl shadow-lg w-full group-hover:scale-[1.02] transition-all duration-300"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
