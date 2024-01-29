import { PaymentDetails } from '../../components/payment-details'
import { SellDetails } from '../../components/sell-details'

import headerImg from '../../assets/dashboard-img.png'
import arrowRight from '../../assets/icons/arrowRight-icon.svg'
import questionIcon from '../../assets/icons/question-icon.svg'
import cardIcon from '../../assets/icons/card-icon.svg'
import pixicon from '../../assets/icons/pix-icon.svg'
import boletoIcon from '../../assets/icons/boleto-icon.svg'
import cancelIcon from '../../assets/icons/cancel-icon.svg'

export function Dashboard() {
  return (
    <section>
      <div className="flex flex-col gap-4">
        <div
          style={{ backgroundImage: `url(${headerImg})` }}
          className="h-[232px] flex items-center bg-cover bg-no-repeat bg-center rounded-xl"
        >
          <div className="w-[306px] ml-11">
            <h1 className="text-h2 text-white">
              Transforme sua paixão em{' '}
              <span className="text-primary300">lucro!</span>
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-[1fr_411px] gap-4">
          <div className="flex flex-col gap-6 p-6 border rounded-lg">
            <div className="flex justify-between items-center">
              <h3 className="text-h6">Suas vendas</h3>
              <button className="flex items-center gap-2 border rounded-lg px-2 py-1">
                Ver todas <img src={arrowRight} alt="" />
              </button>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-h6 text-secondary700">R$ 50.452,54</span>
              <div className="flex gap-2 items-center">
                <span className="text-regular14 text-neutral600">
                  Total de vendas
                </span>
                <img src={questionIcon} alt="" />
              </div>
            </div>

            <div className="grid grid-cols-2 bg-secondary700 h-[240px] rounded-xl p-6 content-between gap-10">
              <SellDetails
                title="Total de vendas hoje"
                currentValue="10.452,54"
                passedValue="9.571,00"
                type="day"
              />

              <SellDetails
                title="Total do mês"
                currentValue="25,452,54"
                passedValue="150.571,00"
                type="month"
              />

              <SellDetails
                title="Saldo"
                currentValue="245.240,98"
                passedValue="Disponível para saque"
                type="balance"
              />

              <SellDetails
                title="A Receber"
                currentValue="20.541,00"
                passedValue="Vendas pendentes"
                type="receive"
              />
            </div>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="text-h6 mb-6">Conversão de pagamento</h3>
            <div className="grid grid-cols-2 gap-4">
              <PaymentDetails
                title="Cartão"
                value="9854"
                percentage="79"
                img={cardIcon}
              />
              <PaymentDetails
                title="Pix"
                value="3589"
                percentage="51"
                img={pixicon}
              />
              <PaymentDetails
                title="Boleto"
                value="158"
                percentage="10"
                img={boletoIcon}
              />
              <PaymentDetails
                title="Canceladas"
                value="120"
                percentage="9"
                img={cancelIcon}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
