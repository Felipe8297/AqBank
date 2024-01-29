import { CreateAccountForm } from './CreateAccountForm'

import Logo from '../../assets/logo.png'
import Background from '../../assets/mulher.png'

export function CreateAccount() {
  return (
    <main>
      <section className="grid grid-cols-12 gap-6 h-screen">
        <div
          style={{ backgroundImage: `url(${Background})` }}
          className="col-span-6 bg-cover bg-no-repeat bg-center"
        >
          <div className="pl-[72px] pt-[84px] w-[500px]">
            <img src={Logo} alt="Logotipo" />
            <h1 className="text-h3 text-white pt-6">
              Explore, descubra, e transforme sua experiência com{' '}
              <span className="text-primary300">vendas digitais!</span>
            </h1>
          </div>
        </div>
        <div className="flex justify-center items-center col-span-6">
          <div className="w-full px-[140px]">
            <h3 className="text-h3 mb-8">Crie sua conta</h3>
            <CreateAccountForm />
          </div>
        </div>
      </section>
    </main>
  )
}
