import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/solid";
import { AllColors } from "@/constants/allColors";
import AnimatedGradientImageCard from "./AnimatedGradientImageCard";

interface ContentItem {
  image: string;
  title: string;
  description: string;
  features: string[];
  liveLink: string;
}

const contents: ContentItem[] = [
  // {
  //   title: "MyShop",
  //   description:
  //     "A small ecommerce web application developed with React, NodeJS and MongoDB",
  //   features: [
  //     "Account creation and authentication",
  //     "Adding products to the cart and purchasing products",
  //   ],
  //   image: "/images/features/project_web2.png",
  // },
  // {
  //   title: "MyBlog",
  //   description:
  //     "A small blog web application developed with React and Firebase",
  //   features: [
  //     "Account creation and authentication",
  //     "Make posts",
  //     "Reacting to other users' posts",
  //   ],
  //   image: "/images/features/project_web3.png",
  //   liveLink: ""
  // },
  {
    title: "Delivery Tacker Simulator",
    description:
      "Delivery Tracker built with React, Leaflet, Socket.io and Material UI",
    features: [
      "Address set up",
      "Delivery Simulation"
    ],
    image: "/images/features/project18.png",
    liveLink: "https://delivery-tracker-web.netlify.app/"
  },
  // {
  //   title: "Court Documents Delivery Platform",
  //   description:
  //     "A rapid delivery platform for court documents for trial courts developed with Angular, Spring boot and Postgresql.",
  //   features: [
  //     "Account creation and authentication",
  //     "Creation of request for documents delivery",
  //     "Documents delivery request management",
  //     "Delivery of documents",
  //   ],
  //   image: "/images/features/project_web1.png",
  //   liveLink: ""
  // },
  {
    title: "Diag'Ec",
    description:
      "A web & mobile app for assessing the level of companies in relation to the circular economy developed with Flutter, NextJs and Firebase.",
    features: [
      "Account creation and authentication",
      "Questionnaire/Automatic score calculation",
      "Completing challenges",
      "Multilingual mode"
    ],
    image: "/images/features/project_web5.png",
    liveLink: "https://diagec.esaip.org/"
  },
  {
    title: "Climatrack",
    description:
      "A small mobile application that allows you to obtain weather information developed with Flutter.",
    features: [
      "Getting weather information for a city and forecasts",
    ],
    image: "/images/features/project6.png",
    liveLink: ""
  },
  // {
  //   title: "MyChat",
  //   description:
  //     "A small mobile chat application developed with Flutter.",
  //   features: [
  //     "Account creation and authentication",
  //     "Instant messaging, chatting with friends",
  //   ],
  //   image: "/images/features/project1.png",
  //   liveLink: ""
  // },
  {
    title: "CurrencyConverter",
    description:
      "A small mobile currency converter application developed with Flutter.",
    features: [
      "Converting currencies to multiple currencies",
    ],
    image: "/images/features/project5.png",
    liveLink: ""
  },
  {
    title: "WorldFeed",
    description:
      "A small mobile application that allows you to get news from different countries in the developed world with Flutter.",
    features: [
      "Getting news",
      "Add news to favorites and share news on social networks",
    ],
    image: "/images/features/project3.png",
    liveLink: ""
  },
  {
    title: "OrderEase",
    description:
      "A small mobile application that allows you to manage orders and payments for customers of your business developed with Flutter.",
    features: [
      "Account creation and authentication",
      "Adding products to cart and paying",
    ],
    image: "/images/features/project2.png",
    liveLink: ""
  },
  {
    title: "CashControl",
    description:
      "A mobile application for efficient budget and expense management developed with Flutter.",
    features: [
      "Account creation and authentication",
      "Budget Setting/Expense Planning",
      "Budget and expenditure statistics",
      "Notifications"
    ],
    image: "/images/features/project8.png",
    liveLink: ""
  },
  {
    title: "Dice Game",
    description:
      "Playful dice game with fun animations and customization built with Flutter.",
    features: [
      "Dice rolling",
      "Dice faces customization",
      "Rules settings",
    ],
    image: "/images/features/project9.png",
    liveLink: "https://ivangael.github.io/dice_game/"
  },
  {
    title: "River cruise",
    description:
      "River cruise tours booking mobile app built with Flutter.",
    features: [
      "River cruise tours booking",
    ],
    image: "/images/features/project10.png",
    liveLink: "https://ivangael.github.io/river_cruises_dribble-clone/"
  },
  {
    title: "Websocket Chat",
    description:
      "A real-time chat app built with React with Go backend using WebSocket for handling communication",
    features: [
      "Realtime messaging",
      "Connecting to room"
    ],
    image: "/images/features/project11.png",
    liveLink: "https://chatyier.netlify.app/"
  },
  {
    title: "Image Toolbox",
    description:
      "A web app that offers a variety of image processing features, including object detection, resizing, filtering, text extraction, compression, comparison, and pose detection",
    features: [
      "Image processing (OpenCV)",
      "Object Detection & Segmentation(Yolov8)",
      "Text extraction(Pytesseract)",
      "Pose Detection(Tensorflow model)"
    ],
    image: "/images/features/project12.png",
    liveLink: "https://image-toolbox.netlify.app/"
  },
  {
    title: "Advanced Lane Detection",
    description:
      "An advanced lane detection system for improving vehicle safety using Python, OpenCV and Yolov8",
    features: [
      "Lane Detection",
      "Vehicle detection",
      "Direction detection",
      "Pose Detection"
    ],
    image: "/images/features/project13.png",
    liveLink: ""
  },
  {
    title: "Social Distancing Monitoring",
    description:
      "Monitor social distancing between people, identify high-risk areas and non-compliance using Python, OpenCV and Yolov8",
    features: [
      "Person Detection",
      "People closeness detection",
      "People mapping on card"
    ],
    image: "/images/features/project14.png",
    liveLink: ""
  },
  {
    title: "Road traffic monitoring",
    description:
      "Realtime road traffic monitoring with analytics chart plotting using Python, OpenCV, matplotlib and Yolov8",
    features: [
      "Vehicle Detection & Tracking",
      "Vehicle Counting",
      "Division of the road into compartments"
    ],
    image: "/images/features/project15.png",
    liveLink: ""
  },
  {
    title: "Face and Object Detection with Gender Classification",
    description:
      "A real-time face and object detection with gender classification and virtual glasses overlay using Python, OpenCV, DeepFace, and Yolov5",
    features: [
      "Face detection",
      "Gender classification",
      "Virtual glasses overlay on detected faces",
      "Object detection"
    ],
    image: "/images/features/project16.png",
    liveLink: ""
  },
  {
    title: "Dragon ball Universe App",
    description:
      "Dragon ball Universe App built with Flutter",
    features: [
      "Characters Infos",
      "Planets Infos"
    ],
    image: "/images/features/project17.png",
    liveLink: "https://ivangael.github.io/Db_Univ"
  }
];

export function Features() {
  return (
    <div className="bg-white dark:bg-neutral-900" id="work">
      <div id="content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16">
          <h2 className="text-4xl text-black dark:text-white font-bold text-center mb-8">Featured Projects</h2>
          {/* <p className="pt-6 text-black max-w-2xl text-center m-auto dark:text-neutral-400">
          web & mobile
        </p> */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contents.map((content, index) => (
              <AnimatedGradientImageCard key={index} content={content} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
