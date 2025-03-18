import { motion } from "framer-motion";
import { useState } from "react";
import { Play } from "lucide-react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const categories = [
    { name: "Electronics", image: "https://hifimart.com/wp-content/uploads/O-B-HCA300-2.webp", video: "./assets/Product/MyVd.mp4" },
    { name: "Fashion", image: "https://cdn.shopify.com/s/files/1/0826/2503/6579/files/celebrities-carrying-white-denims-575x466_480x480.jpg?v=1702371056", video: "/videos/fashion.mp4" },
    { name: "Home Decor", image: "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/2018/02/27162207/5-26.jpg", video: "/videos/home.mp4" }
];

function Card({ children, onClick }) {
    return (
        <motion.div
            onClick={onClick}
            className="bg-white shadow-lg rounded-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105"
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)", rotateY: 10, rotateX: 10 }}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    );
}

function CardContent({ children }) {
    return (
        <div className="p-4 flex flex-col items-center">
            {children}
        </div>
    );
}

function Button({ children, onClick }) {
    return (
        <motion.button
            onClick={onClick}
            className="bg-black text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
        >
            {children}
        </motion.button>
    );
}

function CategoryCard({ category, onClick }) {
    return (
        <Card onClick={onClick}>
            <CardContent>
                <motion.img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-40 h-40 object-cover rounded-xl transition-transform duration-300"
                    whileHover={{ scale: 1.1, rotateY: 5 }}
                />
                <p className="mt-2 font-semibold text-gray-800">{category.name}</p>
            </CardContent>
        </Card>
    );
}

function WaveAnimation({ fill, speed }) {
    return (
        <motion.svg
            viewBox="0 0 1440 320"
            className="absolute bottom-0"
            initial={{ y: 0 }}
            animate={{ y: 10 }}
            transition={{ duration: speed, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
            <motion.path
                fill={fill}
                d="M0,64L40,58.7C80,53,160,43,240,53.3C320,64,400,96,480,96C560,96,640,64,720,64C800,64,880,96,960,101.3C1040,107,1120,85,1200,85.3C1280,85,1360,107,1400,117.3L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
                animate={{ pathLength: [1, 0, 1] }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
            />
        </motion.svg>
    );
}

function ProductShowcase() {
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="relative p-8 bg-gradient-to-r from-yellow-600 to-white-500 min-h-screen flex flex-col items-center text-white overflow-hidden perspective-1000">
             
            {/* Multiple Wave Animations */}
            <WaveAnimation fill="#F6E02E" speed={2} />
            <WaveAnimation fill="#FFD700" speed={2.5} />
            <WaveAnimation fill="#FFFACD" speed={3} />
            
            <h2 className="text-4xl font-semibold mb-6 text-center z-10">Product Showcase</h2>
            <p className="text-lg mb-4 text-center max-w-2xl z-10">Discover seamless transactions with our secure and efficient payment platform.</p>
            <motion.div className="flex gap-6 mb-8 flex-wrap justify-center z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {categories.map((category, index) => (
                    <CategoryCard key={index} category={category} onClick={() => setActiveCategory(category)} />
                ))}
            </motion.div>

            <div className="relative w-full max-w-4xl z-10">
                <motion.img
                    src={activeCategory.image}
                    alt={activeCategory.name}
                    className="w-full h-96 object-cover rounded-lg shadow-xl"
                    initial={{ scale: 0.9, rotateY: 0 }}
                    animate={{ scale: 1, rotateY: 10 }}
                    transition={{ duration: 0.5 }}
                />
                {isPlaying && (
                    <motion.video
                        src={activeCategory.video}
                        autoPlay
                        loop
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    />
                )}
                <Button
                    className="absolute bottom-4 right-4 flex items-center gap-2 shadow-lg"
                    onClick={() => setIsPlaying(!isPlaying)}
                >
                    <Play size={18} /> {isPlaying ? "Stop Video" : "Play Video"}
                </Button>
            </div>
            
            <div className="flex gap-4 mt-6 z-10">
                {/* Additional buttons can be added here */}
            </div>
        </div>
    );
}

export default ProductShowcase;
