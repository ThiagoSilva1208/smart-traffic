export function Footer(){
    return(
        <footer className="bg-gray-900 text-gray-300 py-12 w-full">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10">

                <div>
                    <h2 className="text-white text-2xl font-bold mb-3">Smart Traffic</h2>
                    <p className="text-sm text-gray-400">
                        Um Sistema Inteligente de trânsito que visa a otimização do tráfego urbano, integrando a acessibilidade e sustenbilidade.
                    </p>
                </div>

                <div>
                    <h3 className="text-white text-lg font-semibold mb-3 ">Navegue</h3>
                    <ul className="space-y-2">
                        <li><a href="" className="hover:text-blue-400 transition">Início</a></li>
                        <li><a href="" className="hover:text-blue-400 transition">Sobre Nós</a></li>
                        <li><a href="" className="hover:text-blue-400 transition">Rede de Semáforos</a></li>
                        <li><a href="" className="hover:text-blue-400 transition">Login</a></li>
                        <li><a href="" className="hover:text-blue-400 transition">Polítíca de privacidade </a></li>
                    </ul>
                    
                </div>

                <div>
                    <h3 className="text-white text-lg font-semibold mb-3 ">Contate-nos</h3>
                    <ul className="space-y-2 md:flex md:flex-col">  
                        <li><a href="" className="fas fa-envelope text-blue-400 mr-2">Formulário</a></li>
                        <li><a href="" className="fas fa-envelope text-blue-400 mr-2">suporte@smarttraffic.com</a></li>
                        <li><a href="" className="fas fa-phone text-blue-400 mr-2">+55 19 98814-5641</a></li>
                        <li><a href="" className="fas fa-marker text-blue-400 mr-2">Americana, São Paulo, Brasil</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3 className="text-white text-lg font-semibold mb-3">Siga-nos</h3>
                    <div className="flex gap-4 text-2xl md:grid md:grid-rows-3">
                        <a href="" className="hover:text-blue-500 transition">Linkedin</a>
                        <a href="" className="hover:text-pink-400 transition">Instagram</a>
                        <a href="" className="hover:text-green-400 transition">Email</a>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
                 © 2025 Smart Traffic - Todos os direitos reservados
            </div>
        </footer>
    )
}