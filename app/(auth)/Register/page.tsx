'use client'

import Image from 'next/image'
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'


const registerUserSchema = z.object({
    name: z.string({message: "Campo obrigatório"}).min(4),
    email: z.email({ message: "Email, inválido" }).max(255),
    password: z
        .string({ message: "Senha inválida" })
        .min(8, { message: "Senha deve conter, pelo menos, 8 caracteres" })
        .max(255, { message: "Senha deve conter, no máximo, 255 caracteres" }),
    confirmpassword: z
        .string({ message: "Senha inválida" })
        .min(8, { message: "Senha deve conter, pelo menos, 8 caracteres" }),
})

type Inputs = z.infer<typeof registerUserSchema>

export default function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        resolver: zodResolver(registerUserSchema)
    })

    const handleSubmitUser = (data: Inputs) => {
        console.log(data)
    }

    return (
        <main className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleSubmit(handleSubmitUser)}>
                <div className="w-[80vh] bg-white shadow-md rounded-2xl p-8 space-y-4 max-md:w-full">
                    <label className="block text-sm font-medium text-gray-700">
                        Nome ou Usuário
                    </label>
                    <input
                        {...register("name", { required: true })}
                        placeholder="Nome ou Usuário"
                        className="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.name?.message}

                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        {...register("email", { required: true })}
                        placeholder="Email"
                        className="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.name?.message}

                    <label className="block text-sm font-medium text-gray-700">Senha</label>
                    <input
                        type="password"
                        {...register("password", { required: true })}
                        placeholder="Senha"
                        className="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.name?.message}


                    <label className="block text-sm font-medium text-gray-700">Confirme Senha</label>
                    <input
                        type="password"
                        {...register("confirmpassword", { required: true })}
                        placeholder="Confirme a Senha"
                        className="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.name?.message}

                    <input type="checkbox" name="" id=""/>
                    <label className='text-sm font-medium text-black'>Eu aceito os termos de uso.</label>


                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                        Enviar
                    </button>

                    <div className='flex flex-col items-center space-y-4 mt-6'>
                        <h3 className='text-gray-500 font-medium"'>Ou entre com</h3>
                        <button
                            type="button"
                            className="w-full flex items-center justify-center gap-3 border border-black rounded-lg py-2 hover:bg-gray-100 transition hover:cursor-pointer"
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