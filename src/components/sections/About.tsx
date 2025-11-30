"use client"

import { motion } from "framer-motion"

export function About() {
    return (
        <section id="about" className="py-20 bg-muted/50">
            <div className="container px-4 md:px-6 mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center gap-4"
                >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
                    <div className="mx-auto max-w-[800px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-left space-y-4">
                        <p>
                            I am a Software Engineer with over 1.5 years of experience in full-stack development, primarily using the MEAN stack and Sails.js.
                            I have a strong background in developing RESTful APIs, dynamic front-end interfaces, and end-to-end web applications.
                        </p>
                        <p>
                            Currently, I work at Simato Vas Solutions, where I design and ship customer-facing products, integrate AI models (Gemini, OpenAI),
                            and optimize performance using tools like Datadog RUM and Google Analytics 4.
                        </p>
                        <p>
                            I hold a BSc (Hons) in Software Engineering from Cardiff Metropolitan University (2023–2025).
                            I am known for quick learning, problem-solving, and writing clean, maintainable code.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
