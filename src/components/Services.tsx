import Image from "next/image";

const services = [
  {
    title: "Flutter",
    description:
      "",
    image: "/images/services/flutter.png",
    alt: "",
  },
  {
    title: "Kotlin",
    description:
      "",
    image: "/images/services/kotlin.png",
    alt: "",
  },
  {
    title: "React",
    description:
      "",
    image: "/images/services/react.png",
    alt: "",
  },
  {
    title: "NextJS",
    description:
      "",
    image: "/images/services/nextjs.png",
    alt: "",
  },
  {
    title: "NodeJS",
    description:
      "",
    image: "/images/services/nodejs.svg",
    alt: "",
  },
  {
    title: "Spring boot",
    description:
      "",
    image: "/images/services/springboot.png",
    alt: "",
  },
  {
    title: "Golang",
    description:
      "",
    image: "/images/services/golang.png",
    alt: "",
  },
  {
    title: "Firebase",
    description:
      "",
    image: "/images/services/firebase.png",
    alt: "",
  },
  {
    title: "Docker",
    description:
      "",
    image: "/images/services/docker.png",
    alt: "",
  },
];
export function Services() {
  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="competences">
      <div id="content">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 className="text-4xl font-bold">Mes compétences</h2>

        <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
          {/* Halley is consectetur Obcaecati veniam explicabo perspiciatis sapiente
          saepe sequi atque aut ullam aliquam. */}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        {services.map(({ title, description, image, alt }) => (
          <div key={title}>
            <div className="h-32 w-32 flex justify-center mx-auto">
              <Image
                src={image}
                alt={alt}
                width={150}
                height={130}
                quality={75}
                sizes="100vw"
                priority
                style={{objectFit: 'contain'}}
              />
            </div>
            <h2 className="font-bold text-lg text-center">{title}</h2>
            <p className="pt-2 text-base text-center dark:text-neutral-400">
              {description}
            </p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
