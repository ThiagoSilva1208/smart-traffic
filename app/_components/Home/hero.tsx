import Image from "next/image"
import Link from "next/link"

export function Hero(){
    return(
        <section className="flex flex-col md:flex-row items-center justify-between py-20 px-8 bg-linear-to-r from-blue-600 to-indigo-700 text-white">
            <div className="max-w-lg">
                <h1 className="text-4xl font-bold mb-4 max-md:text-3xl">O FUTURO É INTELIGENTE, ACESSÍVEL E SUSTENTÁVEL</h1>
                <p className="text-lg mb-6 max-md:text-lg">A Acessibilidade, Inteligência Artifical e Sustentabilidade caminham juntas.</p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                    <Link href="/Maps" className="hover:cursor-pointer">Conheça nossa rede de semáforos</Link>
                </button>
                <button className="bg-white text-blue-600 w-79 mt-3 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Instale nosso aplicativo</button>
            </div>
            <Image src="/Logo_Smart_Traffic.jpeg" alt="Imagem do logo" className="w-[500px] rounded-xl shadow-xl mt-10 md:mt-0" width={100} height={100}/>
        </section>
    )
}