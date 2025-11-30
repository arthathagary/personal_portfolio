"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export function Contact() {
    return (
        <section id="contact" className="py-20">
            <div className="container px-4 md:px-6 mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center gap-4 mb-12"
                >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid gap-8 lg:grid-cols-2 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-6 h-full"
                    >
                        <Card className="h-full">
                            <CardHeader>
                                <CardTitle>Contact Information</CardTitle>
                                <CardDescription>Feel free to reach out through any of these channels.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Mail className="h-5 w-5 text-primary" />
                                    <a href="mailto:arthathagary@gmail.com" className="hover:underline">arthathagary@gmail.com</a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="h-5 w-5 text-primary" />
                                    <a href="tel:+94758393323" className="hover:underline">+94-75-8393-323</a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin className="h-5 w-5 text-primary" />
                                    <span>Sri Lanka</span>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="h-full"
                    >
                        <Card className="h-full">
                            <CardHeader>
                                <CardTitle>Send a Message</CardTitle>
                                <CardDescription>
                                    I'll get back to you as soon as possible.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form className="grid gap-4">
                                    <div className="grid gap-2">
                                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                                        <Input id="name" placeholder="Your Name" />
                                    </div>
                                    <div className="grid gap-2">
                                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                                        <Input id="email" type="email" placeholder="you@example.com" />
                                    </div>
                                    <div className="grid gap-2">
                                        <label htmlFor="message" className="text-sm font-medium">Message</label>
                                        <Textarea id="message" placeholder="How can I help you?" />
                                    </div>
                                    <Button type="submit" className="w-full">Send Message</Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
