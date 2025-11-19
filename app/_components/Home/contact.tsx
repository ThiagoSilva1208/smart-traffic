export function Contact(){
    return(
        <section className="bg-gray py-20">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                <aside>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Entre em Contato</h2>
                    <p className="text-gray-600 mb-6"> 
                        Tem dúvidas, sugestões ou quer saber mais sobre o 
                        <span>
                            <strong className="text-blue-600 font-semibold"> Smart Traffic? </strong>
                        </span>
                        Envie uma mensagem ou conecte-se conosco nas redes abaixo:
                    </p>

                    <div className="flex gap-6 text-2xl" >
                        <a href="#" className="text-blue-700 hover:scale-110 transition-transform">
                            <span>Linkedin</span>
                        </a>
                        <a href="#" className="text-green-700 hover:scale-110 transition-transform">
                            <span>Email</span>
                        </a>
                        <a href="#" className="text-pink-600 hover:scale-110 transition-transform">
                            <span>Instagram</span>
                        </a>
                    </div>
                </aside>

                <form className="bg-white shadow-md rounded-2xl p-8 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nome Completo: </label>
                        <input type="text" name="" id="" className="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    </div>

                     <div className="block text-sm font-medium text-gray-700">
                        <label>Email</label>
                        <input type="email" name="" id="" className="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Mensagem</label>
                        <input type="text" name="" id="" className="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    </div>
                    
                    <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition">
                        Enviar   
                    </button>
                </form>
            </div>
        </section>
    )
}