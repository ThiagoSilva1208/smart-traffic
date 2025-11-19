import Image from "next/image"

export function Team(){
    return(
        <section className="bg-[#ffffff] px-20 py-10">
            <div className="max-w-[1100px] mx-auto ">
                <h2 className="text-[2rem] text-[#111827] mb-2.5 ">Nosso Time</h2>
                <p className="text-[#6b728b] mb-[60px] ">Conheça as pessoas por trás do Smart Traffic</p>
                <p className="text-[#6b728b] mb-[60px]">“Nossa missão é tornar as cidades mais inteligentes, acessíveis e sustentáveis.”</p>
               <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1 max-md:place-items-center  max-md:text-center">
                    <div className="bg-[#f9fafb] rounded-xl p-[30px] shadow-md transition-transform duration-300 ease-in-out hover:-transition-transform-y-[-5px] max-md:w-dvw">
                       <Image src="/Nicolas_Martins.jpeg" alt="Picture Nicolas Martins" className="w-[400px] h-[400px] rounded-[15px] object-cover mb-5" width={400} height={400}/>
                       <h3 className="text-[#1f2937] mb-[5px]">Nicolas Martins Avelino Rodrigues</h3>
                       <p className="text-[#2563eb] font-semibold mb-4 ">Engenheiro</p>
                       <p className="text-[#4b5563] text-[0.95rem] mb-4">
                            Responsável pela idealização pela arquitetura e designer dos semáforos.
                       </p>

                       <div>
                            <a href="http://" target="_blank" rel="noopener noreferrer" className="text-[#2563eb]no-underline font-medium hover:underline">Linkedin</a>
                       </div>
                    </div>


                    <div className="bg-[#f9fafb] rounded-xl p-[30px] shadow-md transition-transform duration-300 ease-in-out hover:-transition-transform-y-[-5px] max-md:w-dvw ">
                       <Image src="/Thiago_da_Silva.JPG" alt="Picture Thiago da Silva" className="w-[400px] h-[400px] rounded-[25px] object-cover mb-5" width={450} height={450} />
                       <h3 className="text-[#1f2937] mb-[5px]">Thiago Souza da Silva</h3>
                       <p className="text-[#2563eb] font-semibold mb-4">Desenvolvedor</p>
                       <p className="text-[#4b5563] text-[0.95rem] mb-4">
                            Responsável pelo desenvolvimento do sistemas de semáforo e web.
                       </p>

                       <div>
                            <a href="http://" target="_blank" rel="noopener noreferrer" className="text-[#2563eb]no-underline font-medium hover:underline">Linkedin</a>
                       </div>
                    </div>

                    <div className="bg-[#f9fafb] rounded-xl p-[30px] shadow-md transition-transform duration-300 ease-in-out hover:-transition-transform-y-[-5px] max-md:w-dvw">
                       <Image src="/Yago_Rocchetti.jpeg" alt="Picture Yago Rocchetti" className="w-[400px] h-[400px] rounded-[25px] object-cover mb-5" width={400} height={400}/>
                       <h3 className="text-[#1f2937] mb-[5px]">Yago Rocchetti</h3>
                       <p className="text-[#2563eb] font-semibold mb-4">Comunicação</p>
                       <p className="text-[#4b5563] text-[0.95rem] mb-4">
                            Responsável pela comunicação e representação do Smart Traffic.
                       </p>

                       <div>
                            <a href="http://" target="_blank" rel="noopener noreferrer" className="text-[#2563eb]no-underline font-medium hover:underline">Linkedin</a>
                       </div>
                    </div>
                
                </div>
            </div>
        </section>
    )
}