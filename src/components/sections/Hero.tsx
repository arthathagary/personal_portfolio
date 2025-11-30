"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, ChevronDown } from "lucide-react"

export function Hero() {
    return (
        <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center py-10 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex-1 text-center lg:text-left space-y-6 max-w-2xl"
                    >
                        <div className="space-y-2">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-block rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground"
                            >
                                Available for hire
                            </motion.div>
                            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                                Building digital <br className="hidden lg:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                                    experiences
                                </span> that matter.
                            </h1>
                        </div>

                        <p className="text-lg text-muted-foreground md:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0">
                            I'm <span className="font-semibold text-foreground">Arthath Agary</span>, a Software Engineer crafting robust full-stack applications with modern technologies like Next.js, React, and Node.js.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                            <Button asChild size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
                                <Link href="#projects">
                                    View Projects <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base">
                                <Link href="/arthathagary_resume.pdf" target="_blank">
                                    <FileText className="ml-2 h-4 w-4" /> Resume
                                </Link>
                            </Button>
                        </div>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                        className="flex-1 relative w-full max-w-[600px] lg:max-w-[700px]"
                    >
                        <div className="relative aspect-square w-full">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -z-10 animate-pulse" />
                            <Image
                                src="/images/hero-v2.png"
                                alt="3D Abstract Tech Illustration"
                                fill
                                className="object-contain drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
            >
                <ChevronDown className="h-6 w-6" />
            </motion.div>
        </section>
    )
}
