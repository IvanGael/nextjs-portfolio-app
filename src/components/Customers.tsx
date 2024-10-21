import Image from "next/image";
import Link from "next/link";

const customers = [
    {
        name: "Flutter",
        href: "https://flutter.dev/",
        src: "https://skillicons.dev/icons?i=flutter",
        alt: "Flutter logo",
    },
    {
        name: "Dart",
        href: "https://dart.dev/",
        src: "https://skillicons.dev/icons?i=dart",
        alt: "Dart logo",
    },
    {
        name: "React",
        href: "https://react.dev/",
        src: "https://skillicons.dev/icons?i=react",
        alt: "React logo",
    },
    {
        name: "Go",
        href: "https://go.dev/",
        src: "https://skillicons.dev/icons?i=go",
        alt: "Go logo",
    },
    {
        name: "NodeJs",
        href: "https://nodejs.org/",
        src: "https://skillicons.dev/icons?i=nodejs",
        alt: "NodeJs logo",
    },
    {
        name: "Flask",
        href: "https://flask.palletsprojects.com/",
        src: "https://skillicons.dev/icons?i=flask",
        alt: "Flask logo",
    },
    {
        name: "Tensorflow",
        href: "https://www.tensorflow.org/",
        src: "https://skillicons.dev/icons?i=tensorflow",
        alt: "Tensorflow logo",
    },
    {
        name: "Pytorch",
        href: "https://pytorch.org/",
        src: "https://skillicons.dev/icons?i=pytorch",
        alt: "Pytorch logo",
    },
    {
        name: "Python",
        href: "https://www.python.org/",
        src: "https://skillicons.dev/icons?i=python",
        alt: "Python logo",
    },
    {
        name: "Opencv",
        href: "https://opencv.org/",
        src: "https://skillicons.dev/icons?i=opencv",
        alt: "Opencv logo",
    },
    {
        name: "Postgres",
        href: "https://www.postgresql.org/",
        src: "https://skillicons.dev/icons?i=postgres",
        alt: "Postgres logo",
    },
    {
        name: "Firebase",
        href: "https://firebase.google.com/",
        src: "https://skillicons.dev/icons?i=firebase",
        alt: "Firebase logo",
    },
    {
        name: "GCP",
        href: "https://cloud.google.com/",
        src: "https://skillicons.dev/icons?i=gcp",
        alt: "GCP logo",
    },
    {
        name: "Docker",
        href: "https://www.docker.com/",
        src: "https://skillicons.dev/icons?i=docker",
        alt: "Docker logo",
    },
    // {
    //     name: "docker",
    //     href: "https://www.docker.com/",
    //     src: "/images/customers/docker.svg",
    //     alt: "Docker logo",
    // },
    // {
    //     name: "python",
    //     href: "https://www.python.org/",
    //     src: "/images/customers/python.svg",
    //     alt: "Python logo",
    // },
    // {
    //     name: "slack",
    //     href: "https://slack.com/",
    //     src: "/images/customers/slack.svg",
    //     alt: "Slack logo",
    // },
    // {
    //     name: "discord",
    //     href: "https://discord.com/",
    //     src: "/images/customers/discord.svg",
    //     alt: "Discord logo",
    // }
]

export default function Customers() {
    return (
        <div className="bg-white dark:bg-neutral-900 w-full px-4 pt-16 pb-16" id="skills">
            <h2 className="text-4xl font-bold text-center">
                Skills
            </h2>

            {/* <p className="pt-6 pb-8 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit nam maxime quas fugiat tempore blanditiis, eveniet quia accusantium.
            </p> */}
            <div className="mx-auto w-full max-w-4xl bg-white dark:bg-transparent">
                <div className="text-center justify-center items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
                    {customers.map((item) => (
                        <Link key={item.name} href={item.href} target="_blank">
                            <img
                                className="h-10 w-auto mt-6 justify-center text-center mx-auto hover:scale-110 transition"
                                src={item.src}
                                alt={item.alt}
                                width={150}
                                height={150}
                                // quality={75}
                                sizes="100vw"
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>

    );
}

