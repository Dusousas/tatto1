import React from 'react';

export default function Form() {
    return (
        <>
            <form action="flex flex-col gap-y-4" className='w-full'>
                <input className='border w-full px-3 py-2 outline-none' placeholder='Seu nome' type="text" />
                <input className='border w-full mt-4 px-3 py-2 outline-none' placeholder='Seu Email' type="text" />
                <input className='border w-full mt-4 px-3 py-2 outline-none' type="text" placeholder='Seu Telefone' />
                <textarea className='w-full border resize-none mt-6 outline-none px-3 py-2' placeholder='Sua mensagem!' name="" rows={4} id=""></textarea>
                <button className='border px-6 py-3 mt-4 cursor-pointer uppercase'>Enviar</button>
            </form>
        </>
    );
}