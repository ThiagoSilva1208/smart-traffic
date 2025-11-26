"use client"

export default function MapDashboard(){
    return(
        <main className="flex flex-col align-baseline">
            <p className="text-white font-bold">Quantidade de veículos:</p>
            <span className="text-white font-bold">13</span>
            <br />

            <p className="text-white font-bold">Tempo de abertura:</p>
            <span className="text-white font-bold">30 segundos</span>
            <br />

            <p className="text-white font-bold">Estado do semáforo: </p>
            <span className="text-green-500 font-bold">VERDE</span>
            <br />

            <p className="text-white font-bold">Última contagem: </p>
            <span className="text-white font-bold">10 segundos</span>
            <br />
        </main>
    )
}
