export function Footer() {
    return (
        <footer className="border-t py-6 md:py-0">
            <div className="mx-auto flex flex-col items-center justify-between gap-4 px-4 md:h-24 md:flex-row max-w-7xl sm:px-6 lg:px-8">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    © {new Date().getFullYear()} Built with Next.js, Tailwind CSS, and shadcn/ui.
                </p>
                <div className="flex gap-4">
                    {/* Social links can go here */}
                </div>
            </div>
        </footer>
    )
}
