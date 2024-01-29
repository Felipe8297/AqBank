import { useState } from 'react'
import { InputForm } from '../../../components/input-form'
import { Toast } from '../../../components/toast'

import Usericons from '../../../assets/icons/user-icon.svg'
import EmailIcon from '../../../assets/icons/email-icon.svg'
import PasswordIcon from '../../../assets/icons/password-icon.svg'
import logo from '../../../assets/icons/logo-icon.svg'

import '../../../theme/style.css'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'

export function CreateAccountForm() {
  const [userName, setUserName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [terms, setTerms] = useState<boolean>(false)

  const [loading, setLoading] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setLoading(false)
    setSuccess(true)
    console.log(userName, email, password, terms)
  }
  return (
    <div className="relative">
      <form className="flex flex-col gap-4 " onSubmit={handleSubmit}>
        <InputForm
          title="Nome completo"
          type="text"
          placeholder="Digite seu nome"
          icon={Usericons}
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
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
          <div className="flex gap-2">
            <Checkbox
              id="terms"
              name="terms"
              onChange={() => setTerms(!terms)}
            />
            <label htmlFor="terms">
              Concordo em receber atualizações por e-mail
            </label>
          </div>

          <p className="w-[350px]">
            Ao criar sua conta, você confirma que leu e concorda com os{' '}
            <a className="text-secondary700 underline" href="/">
              termos de uso
            </a>{' '}
            da Prufen
          </p>
        </div>

        <Button className="bg-neutral950 text-white font-bold py-3 rounded-xl mt-9">
          {loading ? <div className="loading"></div> : 'Criar conta grátis'}
        </Button>
      </form>

      <p className="text-regular14 text-center mt-12">
        Ja possui uma conta?{' '}
        <a className="text-bold16 font-medium text-secondary700" href="/login">
          Acessar minha conta
        </a>
      </p>

      <div className="flex gap-2 justify-center mt-12">
        <p className="text-regular14 text-neutral500 text-center">Powered by</p>
        <img src={logo} alt="logotipo" />
      </div>

      <div
        className={`absolute bottom-[-64px] left-[50%] translate-x-[-50%] ${
          success ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } transition-all duration-500`}
      >
        <Toast
          title="Cadastro realizado com sucesso!"
          success={success}
          onCLick={() => setSuccess(false)}
        />
      </div>
    </div>
  )
}
