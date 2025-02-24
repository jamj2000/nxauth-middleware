'use client'
import Button from '@/components/button-form';
import { useState } from 'react';
import { login } from '@/lib/actions'
import { useSearchParams } from 'next/navigation';


function LoginForm() {
    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get('callbackUrl')
    // console.log(`callbackUrl ${callbackUrl}`);

    // globalThis.callbackUrl = decodeURIComponent(callbackUrl ?? '%2Fdashboard')

    const [resultado, setResultado] = useState("")
    const [tipo, setTipo] = useState("")

    async function wrapper(data) {
        const message = await login(data) // Server action
        if (message?.success) {
            setTipo('success')
            setResultado(message.success);
        }
        if (message?.error) {
            setTipo('error')
            setResultado(message.error);
        }
    }
    return (
        <form action={wrapper} className='credentials'>
            <input type="hidden" name="callbackUrl" defaultValue={callbackUrl} />
            <div>
                <label>Email
                    <input type='email' name='email' placeholder="jose@mail.com" />
                </label>
                <label>Contraseña
                    <input type="password" name='password' placeholder="******" />
                </label>
                <p className={`info ${tipo}`}> {resultado} </p>
            </div>

            <Button title="Iniciar sesión" />
        </form>
    );
};

export default LoginForm;