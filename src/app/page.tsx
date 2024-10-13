import { Experience } from "@/components/experience";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Badge } from "@/components/ui/badge";
import { IconCloudDemo } from "@/components/icon-cloud";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { ChevronRight, Github as GitIcon } from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { Globe as GlobeIcon } from "lucide-react";
import MagicButton from "@/components/magic-button";
import TypingAnimation from "@/components/magicui/typing-animation";

const BLUR_FADE_DELAY = 0.5;

const skillsList = [
    "HTML5",
    "CSS",
    "TailwindCSS",
    "Typescript/Javascript",
    "Node.js",
    "Python",
    "C++",
    "React.js",
    "express.js",
    "Next.js",
    "MySQL",
    "MongoDB",
    "GraphQL",
    "SQL/NoSQL DB",
    "Git",
    "Postman",
    "Github",
    "vercel",
    "Firebase",
];

const projectsData = [
    {
        title: "Cancer Heal",
        href: "https://cancerheal.co.in/index.html",
        active: true,
        dates: "",
        description:
            "A comprehensive platform for cancer care management, enabling efficient patient tracking and treatment oversight.It features user- friendly interfaces and streamlined communication tools to enhance healthcare outcomes.",
        technologies: [
            "HTML5",
            "CSS",
            "JavaScript",
            "JSOM",
            "Github",
            "Design",
            "S3 Bucket",
            "Lambda"
        ],
        links: [
            {
                type: "Website",
                href: "https://cancerheal.co.in/index.html",
                icon: <GlobeIcon />,
            }
        ],
        image: "/CancerHeal.png",
    },
    {
        title: "SkillsYard",
        href: "https://skillsyard.com/",
        active: true,
        dates: "",
        description: "An innovative educational platform that connects students with industry experts, offering personalized learning experiences and resources for skill development and career advancement.",
        technologies: [
            "HTML5",
            "CSS",
            "JavaScript",
            "JSOM",
            "Github",
            "Design",
            "S3 Bucket",
            "Lambda",
            "AWS",
            "GSAP"
        ],
        links: [
            {
                type: "Website",
                href: "https://skillsyard.com/",
                icon: <GlobeIcon />,
            },
        ],
        image: "/SkillsYard.png",
    },
    {
        title: "HanuShiv Cricket Academy",
        href: "https://www.hanushivsportsmanagement.in/index.html",
        active: true,
        dates: "",
        description:"A comprehensive platform designed to enhance sports management experiences by offering features for event scheduling, athlete performance tracking, and seamless communication among coaches and athletes.",
        technologies: [
            "HTML5",
            "CSS",
            "JavaScript",
            "JSOM",
            "Github",
            "Design",
            "S3 Bucket",
            "Lambda",
            "AWS",
        ],
        links: [
            {
                type: "Website",
                href: "https://www.hanushivsportsmanagement.in/index.html",
                icon: <GlobeIcon />,
            },
        ],
        image: "/HanuShiv.png",
    },
    {
        title: "HotelsWale",
        href: "https://hotelswale.com/",
        active: true,
        dates: "",
        description:"A user-friendly hotel booking platform that enables users to easily search, compare, and book accommodations, providing a seamless experience for travelers.",
        technologies: [
            "HTML5",
            "CSS",
            "JavaScript",
            "JSOM",
            "Github",
            "Design",
            "S3 Bucket",
            "Lambda",
            "AWS",
        ],
        links: [
            {
                type: "Website",
                href: "https://hotelswale.com/",
                icon: <GlobeIcon />,
            },
        ],
        image: "/HotelsWale.png",
    }
];

export default function Home() {
    return (
        <div className="">
            <section id="hero">
                <div className="mx-auto w-full max-w-2xl space-y-4 sm:space-y-8">

                    <div className="gap-2 flex justify-between">
                        <div className="flex-col flex flex-1 space-y-1.5">
                            <BlurFade delay={BLUR_FADE_DELAY}>
                                <TypingAnimation
                                    duration={80}
                                    className="prose max-w-full mb-1 text-pretty font-sans text-sm text-muted-foreground dark:prose-invert"
                                    text="const mayankkansal = ( name, passion ) =>"
                                />
                            </BlurFade>
                            <BlurFadeText
                                delay={BLUR_FADE_DELAY}
                                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                                yOffset={8}
                                text="Hi, I'm Mayank 👋"
                            />
                            <BlurFadeText
                                className="max-w-[600px] md:text-xl"
                                delay={BLUR_FADE_DELAY}
                                text="Enthusiastic MERN stack developer with the ability to create projects, eager to enhance skills and deepen knowledge in web development."
                            />
                            <BlurFade
                                delay={BLUR_FADE_DELAY}
                                className="hidden sm:flex sm:gap-3"
                            >
                                <Link
                                    href="https://drive.google.com/file/d/1hXqoPTYoQsJKspMfo38hL9M6ZKMQP_vW/view?usp=sharing"
                                    target="_blank"
                                    className="flex items-center"
                                >
                                    <AnimatedGradientText className="">
                                        🎉{" "}
                                        <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
                                        <span
                                            className={cn(
                                                `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                                            )}
                                        >
                                            Checkout my Resume
                                        </span>
                                        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                                    </AnimatedGradientText>
                                </Link>
                                <MagicButton />
                            </BlurFade>
                        </div>
                        <BlurFade delay={BLUR_FADE_DELAY}>
                            <Avatar className="size-28 border">
                                <AvatarImage
                                    alt="Ayush"
                                    className="w-full"
                                    src="/mayank.jpg"
                                />
                                <AvatarFallback className="text-6xl font-bold text-center w-full h-full flex items-center justify-center">
                                    MK
                                </AvatarFallback>
                            </Avatar>
                        </BlurFade>
                    </div>
                    <BlurFade
                        delay={BLUR_FADE_DELAY}
                        className="flex gap-3 sm:hidden"
                    >
                        <Link
                            href="https://drive.google.com/file/d/1hXqoPTYoQsJKspMfo38hL9M6ZKMQP_vW/view?usp=sharing"
                            target="_blank"
                            className="flex items-center"
                        >
                            <AnimatedGradientText>
                                🎉{" "}
                                <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
                                <span
                                    className={cn(
                                        `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                                    )}
                                >
                                    Checkout my Resume
                                </span>
                                <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                            </AnimatedGradientText>
                        </Link>
                        <MagicButton />
                    </BlurFade>
                </div>
            </section>

            <div className="mx-auto w-full max-w-2xl grid items-center sm:grid-cols-2 sm:space-y-8">
                <div className="flex gap-3 min-h-0 flex-col">
                    <div className="max-w-7xl">
                        <BlurFadeText
                            className="text-2xl mt-6 font-semibold md:text-4xl text-black dark:text-white max-w-4xl"
                            text="Skills"
                        />
                    </div>
                    <div className="flex flex-wrap gap-1">
                        {skillsList.map((skill, id) => (
                            <BlurFade
                                key={skill}
                                delay={BLUR_FADE_DELAY + id * 0.05}
                            >
                                <Badge key={skill}>{skill}</Badge>
                            </BlurFade>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center ml-2 items-center">
                    <IconCloudDemo />
                </div>
            </div>

            <Experience />

            <section
                id="projects"
                className="mx-auto sm:mt-32 w-full max-w-2xl space-y-4 sm:space-y-8"
            >
                <div className="space-y-12 w-full py-12">
                    <BlurFade delay={BLUR_FADE_DELAY * 11}>
                        <div className="flex flex-col items-center justify-center space-y-4">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Check out my latest Work
                                </h2>
                                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    I&apos;ve tackled a wide range of projects,
                                    from sleek websites to intricate web
                                    applications. Here are some of my top picks.
                                </p>
                            </div>
                        </div>
                    </BlurFade>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
                        {projectsData.map((project, id) => (
                            <BlurFade
                                key={project.title}
                                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                            >
                                <ProjectCard
                                    href={project.href}
                                    key={project.title}
                                    title={project.title}
                                    description={project.description}
                                    dates={project.dates}
                                    tags={project.technologies}
                                    image={project.image}
                                    links={project.links}
                                />
                            </BlurFade>
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact" className="mb-10">
                <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
                    <BlurFade delay={BLUR_FADE_DELAY}>
                        <div className="space-y-3">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Get in Touch
                            </h2>
                            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Got something on your mind? Slide into my DMs{" "}
                                <Link
                                    href="https://www.linkedin.com/in/mayank-kansal-a062752a7/"
                                    className="text-blue-500 hover:underline"
                                >
                                    on LinkdIn
                                </Link>{" "}
                                with a direct question or mail at{" "}
                                <Link
                                    href="mailto:iam.mayank.kansal.01@gmail.com"
                                    className="text-blue-500 hover:underline"
                                >
                                    iam.mayank.kansal.01@gmail.com
                                </Link>
                                , and I&apos;ll hit you back when I can.
                            </p>
                        </div>
                    </BlurFade>
                </div>
            </section>
        </div>
    );
}
