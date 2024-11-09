import React from 'react';

function Explore() {
    const articles = [
        {
            title: "Sustainable Farming Techniques",
            image: "https://images.pexels.com/photos/2901439/pexels-photo-2901439.jpeg",
            description: "Learn about sustainable practices that improve soil health and increase crop yield.",
        },
        {
            title: "Maximizing Crop Yield",
            image: "https://images.pexels.com/photos/20447239/pexels-photo-20447239/free-photo-of-tractor-driving-through-a-big-farmland.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "Tips and techniques for maximizing the yield of your crops in different climates.",
        },
        {
            title: "Government Schemes for Farmers",
            image: "https://images.pexels.com/photos/16701076/pexels-photo-16701076/free-photo-of-the-white-house.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "Discover the government schemes and subsidies available for farmers.",
        },
        {
            title: "Organic Farming Essentials",
            image: "https://images.pexels.com/photos/132169/pexels-photo-132169.jpeg",
            description: "An introduction to organic farming techniques and their benefits for farmers.",
        },
        // Add more articles as needed
    ];

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center text-green-700 mb-8">Explore Resources for Farmers</h1>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {articles.map((article, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">{article.title}</h2>
                            <p className="text-gray-600">{article.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Explore;
