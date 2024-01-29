import { LoginForm } from './LoginForm'

import Logo from '../../assets/logo.png'
import Background from '../../assets/background.png'
import logo from '../../assets/icons/logoWhite-icon.svg'

export function Login() {
  return (
    <main>
      <section
        className="grid grid-cols-12 gap-6 h-screen bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="flex justify-center items-center col-span-12">
          <div>
            <img src={Logo} alt="Logotipo" />
            <div className="w-[476px] bg-white rounded-xl p-12 mt-12">
              <h3 className="text-h3 mb-8">Acessar conta</h3>
              <LoginForm />
            </div>

            <p className="text-regular14 text-white text-center mt-12">
              Não tem conta?{' '}
              <a
                className="text-bold16 font-medium text-primary300"
                href="/criar-conta"
              >
                Cadastrar-me
              </a>
            </p>

            <div className="flex gap-2 justify-center mt-12">
              <p className="text-regular14 text-white opacity-50 text-center">
                Powered by
              </p>
              <img src={logo} alt="logotipo" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
