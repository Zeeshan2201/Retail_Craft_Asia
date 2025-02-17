import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Menu, Play, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Sales() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-purple-800">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="text-2xl font-bold text-white">
          DIGITALSILK
        </Link>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:inline-flex">
            REQUEST A QUOTE
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-4">
                <Link href="#" className="text-lg font-semibold">
                  Home
                </Link>
                <Link href="#" className="text-lg font-semibold">
                  Services
                </Link>
                <Link href="#" className="text-lg font-semibold">
                  Work
                </Link>
                <Link href="#" className="text-lg font-semibold">
                  About
                </Link>
                <Link href="#" className="text-lg font-semibold">
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="relative min-h-screen pt-20">
        <div className="container relative mx-auto grid gap-8 px-4 py-12 md:grid-cols-2 md:py-20 lg:py-32">
          <div className="flex flex-col gap-6">
            <nav className="flex items-center gap-2 text-white/80">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Branding Agency</span>
            </nav>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Full-Service
              <br />
              Branding Agency
            </h1>
            <p className="text-lg text-white/90 md:text-xl">
              Work with a top-rated branding agency to boost brand awareness, create consistency across channels and
              reach your audience through results-driven strategies and solutions.
            </p>
            <div className="grid gap-4 text-white">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-blue-500/20 p-1">
                  <ChevronRight className="h-5 w-5" />
                </div>
                <span>Boost Your Brand Awareness</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-blue-500/20 p-1">
                  <ChevronRight className="h-5 w-5" />
                </div>
                <span>Resonate With Your Audience</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-blue-500/20 p-1">
                  <ChevronRight className="h-5 w-5" />
                </div>
                <span>Build Trust & Credibility</span>
              </div>
            </div>
            <Button className="w-fit" size="lg">
              REQUEST A QUOTE
            </Button>
          </div>
          <div className="relative">
            <Image
              src="https://www.digitalsilk.com/branding-agency/"
              alt="Branding showcase"
              width={600}
              height={800}
              className="rounded-lg object-cover"
              priority
            />
            <Image
              src="https://www.digitalsilk.com/branding-agency/"
              alt="J&H Tackle logo"
              width={150}
              height={75}
              className="absolute bottom-4 right-4"
            />
            <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2">
              <Button variant="ghost" size="icon" className="text-white">
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <div className="flex gap-2">
                <div className="h-2 w-8 rounded-full bg-blue-500" />
                <div className="h-2 w-2 rounded-full bg-white/50" />
                <div className="h-2 w-2 rounded-full bg-white/50" />
                <div className="h-2 w-2 rounded-full bg-white/50" />
              </div>
              <Button variant="ghost" size="icon" className="text-white">
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>

        <div className="container mx-auto flex flex-col items-center gap-8 px-4 py-12 md:flex-row md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center">
              <span className="text-sm font-medium text-white/80">5 Star DesignRush Reviews</span>
              <div className="flex text-yellow-400">
                {Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
              </div>
            </div>
            <div className="h-12 w-px bg-white/20" />
            <div className="flex items-center gap-2">
              <Image
                src="https://www.digitalsilk.com/branding-agency/"
                alt="Excellence awards"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-sm font-medium text-white">Branding Agency</span>
                <span className="text-sm text-white/80">Excellence awards</span>
              </div>
            </div>
          </div>
          <Button variant="ghost" className="group flex items-center gap-2 text-white">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20">
              <Play className="h-6 w-6 fill-current" />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-sm font-medium">SEE OUR WORK</span>
              <span className="text-sm text-white/80">IN ACTION</span>
            </div>
          </Button>
        </div>
      </main>
    </div>
  )
}


