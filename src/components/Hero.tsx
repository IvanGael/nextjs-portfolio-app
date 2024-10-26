import Image from "next/image"
import Link from "next/link"
import { AllColors } from "../constants/allColors"
import ModalVideo from '../components/modal-video'
import VideoThumb from '../../public/images/hero/hero-image2.png'


// export function Hero() {
//   return (
//     <div >
//       {/* <video id="video-background" autoPlay loop muted>
//         <source src="/videos/video.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video> */}
//       <div className="" id="content">
//         <div className="max-w-7xl mx-auto pt-20 pb-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2">
//           <div className="pt-6 md:pt-32 justify-center text-center sm:justify-start sm:text-start">
//             <h1 className="text-2xl text-black dark:text-white font-bold">
//             Hey There ! I'm Ivan APEDO <br />{" "}
//               {/* <span className={`text-black dark:text-neutral-400 font-extrabold`}>Who Am I ?</span> */}
//             </h1>
//             <p className="pt-6 text-black w-auto sm:w-10/12 md:w-10/12 dark:text-neutral-400 mb-1">
//               Web/Mobile Developer and Computer Vision Engineer, passionate about AI-based solutions and open-source projects. I build high-quality web and mobile apps, specializing in Computer Vision.
//             </p>

//             <p className="pt-6 text-black w-auto sm:w-10/12 md:w-10/12 dark:text-neutral-400">
//               Fluent in French and English, with basic Japanese skills. Based in Nice, France, available for remote, part-time work. I balance my professional life with personal growth, working weekdays 9-5.
//             </p>

//             <div className="flex flex-auto pt-10 gap-2 min-w-[350px] justify-center sm:justify-start">
//             <div>
//               <Link href="https://read.cv/ivangael" target="_blank">
//                 <button className="bg-black dark:bg-white text-white dark:text-black text-base rounded-lg px-4 p-2 font-medium">
//                   Resume
//                 </button>
//               </Link>
//             </div>

//             <div>
//               <Link href="https://www.linkedin.com/in/ivan-apedo/" target="_blank">
//                 <button className={`${AllColors.mainBgColor} text-white text-base rounded-lg px-4 p-2 font-medium`}>
//                   Get in touch!
//                 </button>
//               </Link>
//             </div>
//           </div>
//           </div>

//           <div className="flex items-center justify-end xs:justify-center mt-12 ">
//             <Image
//               src="/images/hero/ivv.jpg"
//               alt="Image hero description"
//               width={1025}
//               height={662}
//               quality={75}
//               sizes="100vw"
//               priority
//               className="shadow-2xl hover:animate-pulse rounded-lg w-96 h-96"
//               style={{ objectFit: 'cover' }}
//             />
//           </div>
//         </div>

//         <ModalVideo
//           thumb={VideoThumb}
//           thumbWidth={768}
//           thumbHeight={432}
//           thumbAlt="Modal video thumbnail"
//           video="/videos/video.mp4"
//           videoWidth={1920}
//           videoHeight={1080} />

//       </div>
//     </div>
//   );
// }

export function Hero() {
  return (
    <div className="bg-background ">
      <div className="max-w-7xl mx-auto pt-20 container px-12 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 sm:justify-center items-center">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h1 className="text-2xl font-bold tracking-tighter ">
              Hey! I'm Ivan
            </h1>
            <p className="mt-4 text-muted-foreground max-w-[600px]">
              Web/Mobile Developer and Computer Vision Engineer with experience building production ready applications, passionate about AI-based solutions and open-source projects, I can build your big next project.
            </p>
            <p className="mt-4 text-muted-foreground max-w-[600px]">
              Fluent in French and English, with basic Japanese skills. Available for remote, part-time work. I balance my professional life with personal growth, working weekdays 9-5.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              <Link
                href="https://read.cv/ivangael"
                target="_blank"
                className="inline-flex items-center justify-center rounded-md bg-black dark:bg-white text-white dark:text-black h-10 px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                📜Read.cv
              </Link>
              <Link
                href="https://www.linkedin.com/in/ivan-apedo/"
                target="_blank"
                className={`inline-flex items-center justify-center rounded-md h-10 px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-white hover:opacity-90 animate-bounce`}
              >
                Hire Me!
              </Link>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* <Image
                src="/images/hero/hero-image5.png"
                alt="Ivan APEDO"
                fill
                className="object-cover rounded-lg shadow-2xl hover:animate-pulse"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              /> */}
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
        {/* <div className="mt-16">
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />
        </div> */}
      </div>
    </div>
  )
}