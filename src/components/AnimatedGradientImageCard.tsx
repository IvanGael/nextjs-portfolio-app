import React from 'react';
import Image from "next/image";
import { CheckIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ContentItem {
    image: string;
    title: string;
    description: string;
    features: string[];
    liveLink: string;
}

interface AnimatedGradientImageCardProps {
    content: ContentItem;
}

const AnimatedGradientImageCard: React.FC<AnimatedGradientImageCardProps> = ({ content }) => {
    return (
        <div className="relative group overflow-hidden rounded-lg">
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-400 via-fuchsia-500 to-sky-500"
                animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                    duration: 5,
                    ease: "linear",
                    repeat: Infinity,
                }}
            />
            <div className="relative p-6">
                <Image
                    src={content.image}
                    alt={content.title}
                    width={1920}
                    height={1080}
                    quality={75}
                    sizes="100vw"
                    priority
                    className="w-full h-auto transition-all duration-300 group-hover:blur-sm"
                />
                <div className="p-6 bg-white dark:bg-neutral-800">
                    <h3 className="text-2xl text-black dark:text-white font-bold mb-4">{content.title}</h3>
                    <p className="text-black dark:text-white dark:text-neutral-400 mb-4">{content.description}</p>
                    <ul className="space-y-2">
                        {content.features.map((feature, index) => (
                            <li key={index} className="flex items-center">
                                <CheckIcon className="w-5 h-5 text-green-500 mr-2" />
                                <span className="text-black dark:text-neutral-400">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {
                        content.liveLink != "" &&
                        (
                            <button onClick={(e: any) => window.open(content.liveLink, '_blank')} className="px-4 py-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-all duration-300">
                                Live
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default AnimatedGradientImageCard;