import React, { useState, useEffect } from "react";

const heroSlides = [
    {
        background: "https://static.wixstatic.com/media/07979b_99aa7febac574adfb90f80e4b3d3c74c~mv2.jpg/v1/fill/w_1349,h_465,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/07979b_99aa7febac574adfb90f80e4b3d3c74c~mv2.jpg",
        title: "Turning Your Data Into Values!",
    },
    {
        background: "https://static.wixstatic.com/media/07979b_8ac0f611755f4fc0af36322be863c602~mv2.jpg/v1/fill/w_1349,h_465,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/07979b_8ac0f611755f4fc0af36322be863c602~mv2.jpg",
        content: {
            quote: "Many companies in a variety of industries are enhancing their CRM and SCM capabilities with predictive analytics, and they are enjoying market leading growth and performance as a result.",
            author: "Thomas H. Davenport",
            role: "Author of 'Competing on Analytics', Co-Founder of the International Institute for Analytics, Senior Advisor to Deloitte Analytics",
        },
    },
    {
        background: "https://static.wixstatic.com/media/07979b_6adb342c10d54589a98a9ee795fb19ca~mv2.jpg/v1/fill/w_1349,h_465,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/07979b_6adb342c10d54589a98a9ee795fb19ca~mv2.jpg",
        content: {
            quote: "Consumer Data will be the Biggest Differentiator in the next two to three years. Whoever unlocks the reams of data and uses it strategically will Win.",
            author: "Angela Ahrendts",
            role: "Senior Vice President of Retail at Apple Inc., Former CEO of Burberry",
        },
    },
];

const sections = [
    {
        title: "WHO",
        icon: "🎯",
        content:
            "We are a data science company that consists of people with strong passion in data and analytics to get the most out of data. We combined our strength in statistics, computer science and business sense, supported by the leader in analytics technology and the best brains of data science to turn the data into values.",
    },
    {
        title: "WHY",
        icon: "💡",
        content:
            "Starcore Analytics has been started in 2013. Since then we have been building our expertise in data science, helping clients from various industries to bring values from their data. Our experts and advisors with broad experiences in various industries ensure the value delivery mission is heading toward the right direction.",
    },
    {
        title: "HOW",
        icon: "⚡",
        content:
            "There are no single solution for all client. We seek first to understand the business of every client. We identify analytical solutions that suitable to achive business objectives. We use the most efficient and effective solution to perform data management/engineering, analysis and visualization to ensure the analytical products can be delivered effectively.",
    },
];

const Slider = ({ slides, currentSlide, setCurrentSlide }) => {
    return (
        <div className="relative h-[75vh] md:h-[65vh] overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? "opacity-100" : "opacity-0"}`}
                >
                    <div className="absolute inset-0">
                        <img
                            src={slide.background}
                            alt="Background"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50" />
                    </div>

                    <div className="relative h-full flex items-center justify-center px-4">
                        <div className="text-center max-w-4xl mx-auto">
                            {slide.title ? (
                                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                                    {slide.title}
                                </h1>
                            ) : slide.content ? (
                                <div className="space-y-4">
                                    <p className="text-xl md:text-2xl text-white italic">
                                        "{slide.content.quote}"
                                    </p>
                                    <div className="text-white/90">
                                        <p className="font-semibold">{slide.content.author}</p>
                                        <p className="text-sm mt-1">{slide.content.role}</p>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            ))}

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-white scale-110" : "bg-white/50"}`}
                    />
                ))}
            </div>
        </div>
    );
};

const ContentCard = ({ title, icon, content }) => {
    return (
        <div className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{icon}</span>
                    <h2 className="text-2xl font-bold text-gray-900 group-hover:text-bermuda transition-colors">
                        {title}
                    </h2>
                </div>
                <div className="w-12 h-0.5 bg-bermuda mb-4 group-hover:w-20 transition-all duration-300" />
                <p className="text-gray-600">{content}</p>
            </div>
        </div>
    );
};

const CompanySection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative">
            <Slider slides={heroSlides} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
            <div className=" max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-6">
                {sections.map((section) => <ContentCard key={section.title} {...section} />)}
            </div>
        </div>
    );
};

export default CompanySection;