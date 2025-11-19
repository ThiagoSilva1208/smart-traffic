import Link from 'next/link'



export default function MobileMenu({open, setOpen}: {open: boolean ; setOpen: (v: boolean)  => void } ){

  if(!open) return null

    return(
         <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-700 font-medium">
            <Link href="/" onClick={() => setOpen(false)} className="hover:text-blue-600">Home</Link>
            <Link href="/Maps" onClick={() => setOpen(false)} className="hover:text-blue-600">Rede de semáforos</Link>
            <Link href="/Dashboards" onClick={() => setOpen(false)} className="hover:text-blue-600">Relatórios</Link>
          </ul>
        </div>
    )
}