import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import BlurFadeText from "./magicui/blur-fade-text";

import { Badge } from "@/components/ui/badge";
import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.5;
const MEtechList: String[] = [
    "Typescript",
    "Javascript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "HTML5",
    "CSS",
    "PostgreSQL",
    "Vercel",
    "TailwindCSS",
    "MongoDB",
    "Node.js",
    "Restful API",
    "Express.js",
    "Git",
    "Adobe Illustrator",
    "Canva",
    "Github",
];

export function Experience() {
    const data = [
        {
            title: "SKILLSYARD EDUTECH PVT. LTD.",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8"></p>
                    <div>
                        <BlurFadeText
                            text="Developed and implemented dynamic web applications using React, Next.js, and Tailwind CSS, ensuring responsive design and enhanced user experience."
                            className="text-neutral-800 dark:text-neutral-200 mb-2 text-xs md:text-sm font-normal"
                        />
                        <BlurFadeText
                            className="max-w-[600px] md:text-xl mb-4"
                            delay={BLUR_FADE_DELAY}
                            text="Aug 2023 - Present"
                        />
                        <div className="flex min-h-0 flex-col gap-y-3">
                            <div className="flex flex-wrap gap-1">
                                {MEtechList.map((tech, id) => (
                                    <BlurFade
                                        key={id}
                                        delay={BLUR_FADE_DELAY + id * 0.05}
                                    >
                                        <Badge key={id}>{tech}</Badge>
                                    </BlurFade>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
    ];
    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}
