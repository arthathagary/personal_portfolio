"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
    {
        company: "Simato Vas Solutions",
        role: "Associate Software Engineer",
        period: "Nov 2024 – Present",
        description: "Designed and shipped customer-facing full-stack products. Integrated payment gateways (Ideabiz), AI models (Gemini, OpenAI), and analytics (GA4, Datadog). Collaborated with founders to translate business requirements into technical solutions.",
        skills: ["Full Stack", "AI Integration", "AWS", "Analytics"],
    },
    {
        company: "Simato Vas Solutions",
        role: "Intern Software Engineer",
        period: "May 2024 – Nov 2024",
        description: "Contributed to live production codebase. Fixed critical bugs in Angular/SailsJs, reducing reported issues by 40%. Implemented features in AppMaker and Otenro platforms.",
        skills: ["Angular", "Sails.js", "Bug Fixing", "Agile"],
    },
    {
        company: "Clancode Labs",
        role: "Intern Software Engineer",
        period: "Aug 2023 – Feb 2024",
        description: "Developed full-stack features using MERN stack. Integrated Stripe payments. Designed MongoDB schemas and implemented secure JWT authentication.",
        skills: ["MERN Stack", "Stripe", "MongoDB", "JWT"],
    },
]

export function Experience() {
    return (
        <section id="experience" className="py-20">
            <div className="container px-4 md:px-6 mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center gap-4 mb-12"
                >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience</h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                        My professional journey and the companies I've worked with.
                    </p>
                </motion.div>
                <div className="space-y-8 max-w-3xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card>
                                <CardHeader>
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                        <div>
                                            <CardTitle className="text-xl">{exp.role}</CardTitle>
                                            <CardDescription className="text-base font-medium text-primary">{exp.company}</CardDescription>
                                        </div>
                                        <Badge variant="outline" className="w-fit">{exp.period}</Badge>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-muted-foreground">{exp.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.skills.map((skill) => (
                                            <Badge key={skill} variant="secondary" className="text-xs">
                                                {skill}
                                            </Badge>
                                        ))}
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
