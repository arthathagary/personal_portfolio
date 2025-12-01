"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ExternalLink, Package, GitFork } from "lucide-react"

export function OpenSource() {
    return (
        <section id="open-source" className="py-20 bg-muted/30">
            <div className="container px-4 md:px-6 mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center gap-4 mb-12"
                >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Open Source</h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                        Contributing to the community by maintaining and improving existing tools.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Card className="overflow-hidden border-primary/20 shadow-lg">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Package className="w-24 h-24" />
                            </div>
                            <CardHeader>
                                <div className="flex items-center gap-2 mb-2">
                                    <Badge variant="secondary" className="w-fit">
                                        <GitFork className="w-3 h-3 mr-1" /> Forked & Maintained
                                    </Badge>
                                    <Badge variant="outline" className="w-fit">npm package</Badge>
                                </div>
                                <CardTitle className="text-2xl sm:text-3xl font-bold break-all">
                                    cordova-hot-code-push-cli-renew-20
                                </CardTitle>
                                <CardDescription className="text-base mt-2">
                                    A renewed version of the Cordova Hot Code Push CLI, updated to support Node.js 20+.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground">
                                    The original library was abandoned and lacked support for modern Node.js environments.
                                    I forked the repository and implemented necessary fixes to ensure compatibility with Node.js 20 and above,
                                    allowing developers to continue using this essential tool in modern workflows.
                                </p>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    <Badge variant="secondary">Node.js 20+</Badge>
                                    <Badge variant="secondary">Cordova</Badge>
                                    <Badge variant="secondary">CLI Tool</Badge>
                                    <Badge variant="secondary">Hot Code Push</Badge>
                                </div>
                                <div className="pt-4">
                                    <Button asChild size="lg" className="w-full sm:w-auto">
                                        <Link href="https://www.npmjs.com/package/cordova-hot-code-push-cli-renew-20" target="_blank">
                                            <Package className="mr-2 h-4 w-4" /> View on npm
                                            <ExternalLink className="ml-2 h-4 w-4 opacity-50" />
                                        </Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
