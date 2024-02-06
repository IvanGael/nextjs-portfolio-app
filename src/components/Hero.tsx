import Image from "next/image";
import Link from "next/link";

import { AllColors } from "../constants/allColors";

import ModalVideo from '../components/modal-video';

import VideoThumb from '../../public/images/hero/hero-image.png'

export function Hero() {
  return (
    <div style={{margin: 0, padding: 0, overflow: 'hidden'}}>
      <video id="video-background" autoPlay loop muted>
        <source src="/videos/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="" id="content">
        <div className="max-w-7xl mx-auto pt-20 pb-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2">
          <div className="pt-6 md:pt-32 justify-center text-center sm:justify-start sm:text-start">
            <h1 className="text-2xl font-bold">
              {/* Welcome to <br />{" "} */}
              <span className={`${AllColors.mainTextColor} font-extrabold`}>Petite présentation ?</span>
            </h1>
            <p className="pt-6 text-base w-auto sm:w-10/12 md:w-10/12 dark:text-neutral-400">
              Salut! Je suis Ivan APEDO, jeune développeur d'applications web et mobile. Je suis passionné par l'univers
              informatique, principalement l'environnement mobile et l'IOT(systèmes embarqués). Je réalise des projets mobiles
              professionnels, personnels, ou encore pour une cause qui me tient à coeur; j'adore créer et voir un projet prendre forme.
            </p>
            {/* <div className="flex flex-auto pt-10 gap-2 min-w-[350px] justify-center sm:justify-start">
            <div>
              <Link href="#services">
                <button className="bg-black dark:bg-white text-white dark:text-black text-base rounded-full px-4 p-2 font-medium">
                  Ver más
                </button>
              </Link>
            </div>

            <div>
              <Link href="https://github.com/humberni/halley/blob/main/README.md" target="_blank">
                <button className={`${AllColors.mainBgColor} text-white text-base rounded-full px-4 p-2 font-medium`}>
                  Documentación
                </button>
              </Link>
            </div>
          </div> */}
          </div>

          <div className="flex items-center justify-end mt-12 ">
            <Image
              src="/images/hero/ivv.jpg"
              alt="Image hero description"
              width={1025}
              height={662}
              quality={75}
              sizes="100vw"
              priority
              className="shadow-2xl hover:animate-pulse rounded-lg w-96 h-96"
            />
          </div>
        </div>

        {/* <ModalVideo
          thumb={VideoThumb}
          thumbWidth={768}
          thumbHeight={432}
          thumbAlt="Modal video thumbnail"
          video="/videos/video.mp4"
          videoWidth={1920}
          videoHeight={1080} /> */}

      </div>
    </div>
  );
}
