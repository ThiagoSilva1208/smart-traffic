'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useForm, SubmitHandler } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"


const loginUserSchema = z.object({
    name: z.string({message: "Campo obrigatório"}).min(4, {message: "O nome ou usuário deve conter mais de 2 caracteres"}),
    password: z.string({message: "Campo obrigatório"}).min(8, {message:  "Senha deve conter, pelo menos, 8 caracteres"}),
})


type Inputs = z.infer<typeof loginUserSchema>


export default function Login() {
    const { register, handleSubmit, formState: {errors} } = useForm<Inputs>({
        resolver: zodResolver(loginUserSchema)
    })

    const handleLoginUser: SubmitHandler<Inputs> = (data) =>{
        console.log(data)
    }

    return (
        <main className="flex justify-center items-center h-screen bg-gray-100 max-md:w-dvw">
            <form onSubmit={handleSubmit(handleLoginUser)}>
                <div className="w-[80vh] bg-white shadow-md rounded-2xl p-8 space-y-4 max-md:w-full">
                    <label className="block text-sm font-medium text-gray-700">
                        Nome ou Usuário
                    </label>
                    <input
                        type="text"
                        {...register("name", {required: true})}
                        placeholder="Nome ou Usuário"
                        className="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors?.name?.message}

                    <label className="block text-sm font-medium text-gray-700">Senha</label>
                    <input
                        type="password"
                        {...register("password", {required: true})}
                        placeholder="Senha"
                        className="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors?.password?.message}

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                        Enviar
                    </button>

                    <div className="flex flex-col items-center p-1 text-sm">
                        <Link href="/Register" className="text-blue-600 hover:text-blue-700 hover:underline p-1">
                            Não possui cadastro? Cadastre-se
                        </Link>
                        <Link href="/forgot-password" className=" text-blue-600 hover:text-blue-700 hover:underline p-1">
                            Esqueci minha senha
                        </Link>
                    </div>

                    <div className='flex flex-col items-center space-y-4 mt-6'>
                        <h3 className='text-gray-500 font-medium"'>Ou entre com</h3>
                        <button
                            type="button"
                            className="w-full flex items-center justify-center gap-3 border border-s-black rounded-lg py-2 hover:bg-gray-100 transition  hover:cursor-pointer"
                        >
                            <Image src="/image.png" alt="Google" width={40} height={40} />
                            <span className="text-gray-700 font-medium">Google</span>
                        </button>
                         
                    </div>
                </div>
            </form>
        </main>
    )
}