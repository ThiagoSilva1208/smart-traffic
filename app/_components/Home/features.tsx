export function Features(){
    return(
        <section className="scroll-px-20 py-7 bg-[#f9fafb]  max-md:flex max-md:justify-center max-md:items-center">
            <div className="max-w-5xl m-auto text-center max-md:flex max-md:flex-col max-md:items-center max-md:text-center">
                <h2 className="text-4xl text-[#111827] mb-15">Como Utilizar?</h2>

                <div className="flex items-center justify-between mb-20 gap-10 text-left max-md:flex-col max-md:items-center max-md:text-center">
                    <div className="w-full max-w-96 rounded-xl max-md:max-w-96">
                    </div>
                    <div className="flex-1">
                        <span className="inline-block bg-[#2563eb] text-[#ffffff] font-bold text-2xl w-10 h-10 rounded-full text-center leading-10 mb-2.5">1</span>
                        <h3 className="text-2xl text-[#1f2937] mb-2.5">Login/Cadastro</h3>
                        <p className="text-base text-[#4b5563] leading-1.5">
                            Efetue o login ou faça o cadastro
                        </p>
                    </div>
                </div>

                <div className="flex items-center justify-between mb-20 gap-10 text-left max-md:flex-col max-md:items-center max-md:text-center">
                    <div className="w-full max-w-96 rounded-xl">
                    </div>
                    <div className="flex-1">
                        <span className="inline-block bg-[#2563eb] text-[#ffffff] font-bold text-2xl w-10 h-10 rounded-full text-center leading-10 mb-2.5">2</span>
                        <h3 className="text-2xl text-[#1f2937] mb-2.5">Rede de Semáforos.</h3>
                        <p className="text-base text-[#4b5563]">Clique em Rede de Semáforos.</p>
                        <p className="text-base text-[#4b5563]">Clique no icone do semáforo desejado ou pesquise no campo acima.</p>
                        <p className="text-base text-[#4b5563]">Acompanhe em tempo real através da dashboard.</p>
                    </div>
                </div>

                <div className="flex items-center justify-between mb-20 gap-10 text-left max-md:flex-col max-md:items-center max-md:text-center">
                    <div className="w-full max-w-96 rounded-xl">
                    </div>
                    <div className="flex-1">
                        <span className="inline-block bg-[#2563eb] text-[#ffffff] font-bold text-2xl w-10 h-10 rounded-full text-center leading-10 mb-2.5">3</span>
                        <h3 className="text-2xl text-[#1f2937] mb-2.5">Relatório.</h3>
                        <p className="text-base text-[#4b5563]">Clique em Relatórios.</p>
                        <p className="text-base text-[#4b5563]">Pesquise pelo semáforo desejado.</p>
                        <p className="text-base text-[#4b5563]">Filtre a pesquisa.</p>
                        <p className="text-base text-[#4b5563]">Veja os dados.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}