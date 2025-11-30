export function Footer() {
    return (
        <footer className="border-t py-6 md:py-0">
            <div className="mx-auto flex flex-col items-center justify-center gap-4 px-4 md:h-24 max-w-7xl sm:px-6 lg:px-8">
                <p className="text-center text-sm leading-loose text-muted-foreground">
                    &copy; {new Date().getFullYear()} Arthath Agary. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
