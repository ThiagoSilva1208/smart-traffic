"use client"

import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"
import Map from "../Maps/map"


export default function Maps() {
    return (
        <div>
            <header>
                <Navbar />
            </header>

            <main className="flex flex-col items-center justify-center min-h-screen p-8">
                <h1 className="text-2xl font-bold mb-4 max-md:mt-5">Rede de Semáforos</h1>
                <Map />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>

    )
}