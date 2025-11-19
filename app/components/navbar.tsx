'use client'

import Link from "next/link"
import Image from 'next/image'
import { useState } from "react"
import MobileMenu from "../components/layout/mobilemenu"

export function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [open, setOpen] = useState(false)

    return (
        <div className="w-full bg-white shadow-md max-md:h-18 max-md:fixed">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="max-md:hidden">
                    <Image src="/Logo_Smart_Traffic.jpeg" alt="Logo do Smart Traffic" width={100} height={100} />
                </div>

                <div className="max-md:hidden">
                    <ul className="flex md:flex  space-x-8 text-gray-600 font-medium ">
                        <Link href="/" className="cursor-pointer hover:text-blue-600 transition-colors">Home</Link>
                        <Link href="/Maps" className="cursor-pointer hover:text-blue-600 transition-colors">Rede de semáforos</Link>
                        <Link href="/Dashboards" className="cursor-pointer hover:text-blue-600 transition-colors">Relatórios </Link>
                    </ul>
                </div>

                <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded hover: ring-blue-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                            d="M3.75 5.75h16.5m-16.5 6.5h16.5m-16.5 6.5h16.5" />
                    </svg>
                </button>

                <MobileMenu open={open} setOpen={setOpen} />

                {isLoggedIn ? (
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all max-md:fixed max-md:right-16 max-md:z-0">
                        <img src="" alt="Foto do usuário" className="max-md: hidden" />
                        <p className="text-2">Nome do usuário</p>
                    </div>

                ) : (
                    <button className="bg-blue-500 w-auto h-auto px-6 py-2 m-2 text-[#ffffff] rounded-2xl text-base hover:cursor-pointer hover:bg-blue-600 max-md:fixed max-md:right-2 max-md:top-2">
                        <Link href="/Login">Entrar</Link>
                    </button>

                )}

            </nav>
        </div>
    )
}
