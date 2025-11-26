"use client";

import { useState } from "react";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { trafficData } from "../data/Trafficdata"

export default function Dashboard() {
  /*  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const [stats, setStats] = useState<any>(null); // dados processados
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch(`/api/traffic?from=${from}&to=${to}`);
    const data = await res.json();

    setStats(data);
    setLoading(false);
  }

  function handleClear() {
    setStats(null);
    setFrom("");
    setTo("");
  }
  }*/

  function handleClear() {
    setStats(null);
    setFrom("");
    setTo("");
  }

  const [loading, setLoading] = useState(false)
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [stats, setStats] = useState<any>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Filtra pelo intervalo escolhido
    const filtered = trafficData.filter((entry) => {
      return entry.date >= from && entry.date <= to;
    });

    if (filtered.length === 0) {
      setStats(null);
      return;
    }

    const totalCars = filtered.reduce((sum, x) => sum + x.cars, 0);
    const avgOpen = filtered.reduce((sum, x) => sum + x.open_time, 0) / filtered.length;
    const avgPerDay = Math.round(totalCars / filtered.length);

    setStats({
      total_cars: totalCars,
      avg_open_time: avgOpen.toFixed(1),
      avg_per_day: avgPerDay,
      daily: filtered,
    });
  }

 return (
  <div className="min-h-screen flex flex-col">
    <header>
      <Navbar />
    </header>

    <main className="flex-1 p-4 sm:p-6 lg:p-8 w-full max-w-6xl mx-auto">
      <h1 className="text-xl sm:text-2xl font-bold mb-6 text-center sm:text-left">
        Dashboard de Tráfego
      </h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="
          flex flex-col sm:flex-row 
          gap-4 sm:items-center 
          mb-10
        "
      >
        <input
          type="date"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="border px-3 py-2 rounded w-full sm:w-auto"
        />

        <input
          type="date"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="border px-3 py-2 rounded w-full sm:w-auto"
        />

        <button
          type="submit"
          className="
            bg-blue-600 text-white px-4 py-2 rounded 
            w-full sm:w-auto
          "
        >
          Buscar
        </button>

        <button
          type="button"
          onClick={handleClear}
          className="
            bg-red-600 text-white px-4 py-2 rounded 
            w-full sm:w-auto
          "
        >
          Limpar
        </button>
      </form>

      {/* Loading */}
      {loading && <p className="text-center">Carregando...</p>}

      {/* Dashboard stats */}
      {stats && !loading && (
        <>
          {/* Cards responsivos */}
          <div
            className="
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              lg:grid-cols-3 
              gap-6 
              mb-10
            "
          >
            <div className="p-6 bg-white shadow rounded text-center sm:text-left">
              <h2 className="text-lg font-semibold">Total de Carros</h2>
              <p className="text-3xl mt-2 font-bold">{stats.total_cars}</p>
            </div>

            <div className="p-6 bg-white shadow rounded text-center sm:text-left">
              <h2 className="text-lg font-semibold">
                Tempo Médio de Abertura
              </h2>
              <p className="text-3xl mt-2 font-bold">{stats.avg_open_time}s</p>
            </div>

            <div className="p-6 bg-white shadow rounded text-center sm:text-left">
              <h2 className="text-lg font-semibold">
                Média de Carros por Dia
              </h2>
              <p className="text-3xl mt-2 font-bold">{stats.avg_per_day}</p>
            </div>
          </div>

          {/* Chart responsivo */}
          <div className="h-64 sm:h-72 lg:h-80 bg-white shadow rounded p-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={stats.daily}>
                <Line type="monotone" dataKey="cars" stroke="#0070f3" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
 )
}