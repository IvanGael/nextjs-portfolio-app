import Image from "next/image"
import Link from "next/link"
import { AllColors } from "../constants/allColors"
import ModalVideo from '../components/modal-video'
import VideoThumb from '../../public/images/hero/hero-image2.png'

export function Hero() {
  return (
    <div className="bg-background">
      <div className="container px-4 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-3xl lg:text-3xl">
              Hey There! I'm Ivan APEDO
            </h1>
            <p className="mt-4 text-muted-foreground max-w-[600px]">
              Web/Mobile Developer and Computer Vision Engineer, passionate about AI-based solutions and open-source projects. I build high-quality web and mobile apps, specializing in Computer Vision.
            </p>
            <p className="mt-4 text-muted-foreground max-w-[600px]">
              Fluent in French and English, with basic Japanese skills. Based in Nice, France, available for remote, part-time work. I balance my professional life with personal growth, working weekdays 9-5.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              <Link
                href="https://read.cv/ivangael"
                target="_blank"
                className="inline-flex items-center justify-center rounded-md bg-black dark:bg-white text-white dark:text-black h-10 px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Resume
              </Link>
              <Link
                href="https://www.linkedin.com/in/ivan-apedo/"
                target="_blank"
                className={`inline-flex items-center justify-center rounded-md h-10 px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring ${AllColors.mainBgColor} text-white hover:opacity-90`}
              >
                Get in touch!
              </Link>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              <Image
                src="/images/hero/ivv.jpg"
                alt="Ivan APEDO"
                fill
                className="object-cover rounded-lg shadow-2xl hover:animate-pulse"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
          </div>
        </div>
        <div className="mt-16">
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>
    </div>
  )
}