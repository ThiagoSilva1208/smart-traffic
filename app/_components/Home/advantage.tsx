export function Advantage(){
    return(
        <section className = "bg-[#f9fafb] px-20 py-5 text-center max-md:px-10">
            <div className="max-w-7xl m-auto">
                <h2 className="text-4xl mt-2.5 bg-[#FFFFFf]">Quais são nossos diferenciais?</h2>
                <div className="grid grid-cols-3 gap-7.5 max-md:flex max-md:flex-col max-md:w-auto">
                    <div className="bg-[#ffffff] p-8 rounded-xl shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
                       <h3 className="font-light text-xl bg-[#ffffff] mb-5">Análise em tempo real</h3>
                       <p className="text-xl bg-[#ffffff]"> 
                            Monitoramos o fluxo de veículos em tempo real e tomamos decisões baseadas em dados precisos.
                        </p>
                    </div>

                    <div className="bg-[#ffffff] p-8 rounded-xl shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
                        <h3 className="font-light text-xl bg-[#ffffff] mb-5">Acessibilidade</h3>
                        <p className="text-xl bg-[#ffffff]">
                            Nossos semáforos são acessível. Importamos com o próximo!
                        </p>
                    </div>

                    <div className="bg-[#ffffff] p-8 rounded-xl shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
                        <h3 className="font-light text-xl bg-[#ffffff] mb-5">Sustentabilidade</h3>
                        <p className="text-xl bg-[#ffffff]">
                            Nossos semáforos contam com a energia sustentável. A preocupação com o meio ambiente é o nosso dever.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}