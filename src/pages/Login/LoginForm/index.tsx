import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signIn } from '../../../lib/auth'

import { InputForm } from '../../../components/input-form'
import { Toast } from '../../../components/toast'

import EmailIcon from '../../../assets/icons/email-icon.svg'
import PasswordIcon from '../../../assets/icons/password-icon.svg'

import '../../../theme/style.css'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'

export function LoginForm() {
  const [stayConnected, setStayConnected] = useState<boolean>(false)
  const navigate = useNavigate()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const [loading, setLoading] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSuccess(true)

      signIn('token-jwt')
      navigate('/dashboard')
      window.location.reload()
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <InputForm
          title="E-mail"
          type="email"
          placeholder="Digite seu e-mail"
          icon={EmailIcon}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <InputForm
          title="Senha"
          type="password"
          icon={PasswordIcon}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <div className="flex flex-col gap-8 text-label14 font-medium text-neutral950 mt-4">
          <div className="flex items-center gap-2">
            <Checkbox
              id="stayConnected"
              name="stayConnected"
              onChange={() => setStayConnected(!stayConnected)}
            />
            <label htmlFor="stayConnected">Permanecer conectado</label>
          </div>
        </div>

        <Button className="bg-neutral950 text-white font-bold rounded-xl mt-9 px-2 py-6">
          {loading ? <div className="loading"></div> : 'Criar conta'}
        </Button>
      </form>

      <div
        className={`fixed bottom-[70px] right-[84px] ${
          success ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } transition-all duration-500`}
      >
        <Toast
          title="Login efetuado com sucesso"
          success={success}
          onCLick={() => setSuccess(false)}
        />
      </div>
    </div>
  )
}
