"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const skills = {
    "Frontend Development": [
        "Angular (Modern + AngularJS)", "React.js", "Next.js", "TypeScript", "JavaScript",
        "HTML5", "CSS3", "Responsive Design", "GrapesJS", "Shadcn"
    ],
    "Backend Development": [
        "Node.js", "Sails.js (MVC)", "Express.js", "RESTful API Design",
        "JWT Authentication", "bcrypt", "SSO Implementation"
    ],
    "Databases": [
        "MongoDB (Schema Design, CRUD)"
    ],
    "AI & Automation": [
        "Google Gemini API", "OpenAI API", "Telegram Bot API", "AI Content/Image Generation"
    ],
    "Cloud & DevOps": [
        "AWS EC2", "AWS S3", "Git & GitHub", "Docker"
    ],
    "Tools & Analytics": [
        "Jira", "Postman", "Datadog RUM", "Google Analytics 4", "Ideabiz", "Stripe"
    ]
}

export function Skills() {
    return (
        <section id="skills" className="py-20 bg-muted/50">
            <div className="container px-4 md:px-6 mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center gap-4 mb-12"
                >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Expertise</h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                        My technical toolkit and the technologies I work with.
                    </p>
                </motion.div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-4 p-6 bg-background rounded-lg shadow-sm border"
                        >
                            <h3 className="text-xl font-bold text-center">{category}</h3>
                            <div className="flex flex-wrap justify-center gap-2">
                                {items.map((skill) => (
                                    <Badge key={skill} variant="secondary" className="text-sm">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
