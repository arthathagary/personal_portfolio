"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const projects = [
    {
        title: "Appmaker",
        description: "A no-code platform for building mobile apps. Integrated Ideabiz OTP-less payment, Google Analytics funnel tracking, and Datadog RUM.",
        tags: ["MongoDB", "Sails.js", "Angular", "Cordova", "JavaScript", "TypeScript"],
        link: "https://appmaker.lk",
        image: "/images/project1.png",
        github: null,
    },
    {
        title: "Otenro Pro",
        description: "AI-powered website builder. Features Google Gemini API integration for content generation, GrapesJS layouts, and AI image generation.",
        tags: ["MongoDB", "Sails.js", "Angular", "Redis", "AI", "JavaScript", "TypeScript"],
        link: "https://pro.otenro.com/app/login",
        image: "/images/project2.png",
        github: null,
    },
    {
        title: "Telegram Sub Manager",
        description: "Automated Telegram subscription management system with paid subscription logic and full backend automation.",
        tags: ["MongoDB", "Sails.js", "Angular", "Telegram API", "JavaScript", "TypeScript"],
        link: "#",
        image: "/images/project3.png",
        github: null,
    },
    {
        title: "Appmaker Spark",
        description: "AI landing-page generator frontend. Implemented dynamic content rendering, live preview, and Gemini + OpenAI integration.",
        tags: ["MongoDB", "Sails.js", "Angular", "AI", "JavaScript", "TypeScript"],
        link: "https://ai.appmaker.lk",
        image: "/images/project1.png",
        github: null,
    },
]

export function Projects() {
    return (
        <section id="projects" className="py-20">
            <div className="container px-4 md:px-6 mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center gap-4 mb-12"
                >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                        Here are some of the projects I've worked on recently.
                    </p>
                </motion.div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full flex flex-col hover:shadow-lg transition-shadow overflow-hidden">
                                <div className="relative w-full h-48">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform hover:scale-105 duration-500"
                                    />
                                </div>
                                <CardHeader>
                                    <CardTitle>{project.title}</CardTitle>
                                    <CardDescription className="line-clamp-3">
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1 flex flex-col gap-4">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <Badge key={tag} variant="secondary">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                    <div className="mt-auto flex gap-2">
                                        {/* GitHub link hidden as requested */}
                                        {/* {project.github && (
                      <Button asChild size="sm" variant="outline">
                        <Link href={project.github} target="_blank">
                          <Github className="mr-2 h-4 w-4" /> Code
                        </Link>
                      </Button>
                    )} */}
                                        {project.link !== "#" && (
                                            <Button asChild size="sm" className="w-full sm:w-auto">
                                                <Link href={project.link} target="_blank">
                                                    <ExternalLink className="mr-2 h-4 w-4" /> Visit Site
                                                </Link>
                                            </Button>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
