'use client'

import { useForm, SubmitHandler } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const forgotPasswordSchema = z.object({
    name: z.string({message: "Campo obrigatório"}).min(4),
    email: z.email({ message: "Email inválido" }).max(255),
    password: z
        .string({ message: "Senha inválida" })
        .min(8, { message: "Senha deve conter, pelo menos, 8 caracteres" })
        .max(255, { message: "Senha deve conter, no máximo, 255 caracteres" }),
    confirmpassword: z
        .string({ message: "Senha inválida" })
        .min(8, { message: "Senha deve conter, pelo menos, 8 caracteres" }),
})


type Inputs = z.infer<typeof forgotPasswordSchema>

export default function ForgotPassword() {
    const { register, handleSubmit, formState: {errors} } = useForm<Inputs>({
        resolver: zodResolver(forgotPasswordSchema)
    })

    const handleForgotPassword: SubmitHandler<Inputs> = (data) =>{
        console.log(data)
    }


    return (
        <main className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleSubmit(handleForgotPassword)}>
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
                    {errors.name?.message}

                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        {...register("email", {required: true})}
                        placeholder="Email"
                        className="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.email?.message}

                    <label className="block text-sm font-medium text-gray-700">Nova Senha</label>
                    <input
                        type="password"
                        {...register("password", {required: true})}
                        placeholder="Senha"
                        className="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.password?.message}

                    <label className="block text-sm font-medium text-gray-700">Repetir Senha</label>
                    <input
                        type="password"
                        {...register("confirmpassword", {required: true})}
                        placeholder="Confirme a Senha"
                        className="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.confirmpassword?.message}

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </main>
    )
}