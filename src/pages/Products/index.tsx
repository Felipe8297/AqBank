import { DataTable } from '../../components/data-table'

import productsIcon from '../../assets/icons/products-icon.svg'
import { SellDetails } from '../../components/sell-details'
import walletIcon from '../../assets/icons/walletBlack-icon.svg'
import withdrawIcon from '../../assets/icons/withdraw-icon.svg'
import filterIcon from '../../assets/icons/filter-icon.svg'
import plusIcon from '../../assets/icons/plus-icon.svg'

export function Products() {
  return (
    <section>
      <div className="flex gap-2 items-center">
        <img src={productsIcon} alt="" />
        <h1 className="text-h4">Meus Produtos</h1>
      </div>

      <div className="grid grid-cols-2 border rounded-lg p-6 my-6">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-bold14">Saldo</h2>
            <div className="flex items-center gap-1">
              <img src={walletIcon} alt="" />
              <p className="text-bold16 text-neutral800">R$ 245.240,98</p>
            </div>
            <p className="text-regular14 text-neutral400">
              Disponível para saque
            </p>
          </div>

          <button className="flex items-center gap-1 opacity-20">
            <img src={withdrawIcon} alt="" />
            <p className="text-regular14 text-neutral800">Sacar</p>
          </button>
        </div>

        <div className="grid grid-cols-2 bg-secondary700 h-[120px] rounded-xl p-6 content-between gap-10">
          <SellDetails
            title="Total de vendas hoje"
            currentValue="10.452,54"
            passedValue="9.571,00"
            type="day"
          />

          <SellDetails
            title="A Receber"
            currentValue="20.541,00"
            passedValue="Vendas pendentes"
            type="receive"
          />
        </div>
      </div>

      <div className="flex justify-between">
        <button className="flex items-center gap-2 border rounded-xl px-3 py-1 mb-4">
          <img src={filterIcon} alt="" />{' '}
          <span className="text-regular14 font-medium">Status</span>
        </button>
        <button className="flex items-center gap-2 border rounded-xl px-3 py-1 mb-4 bg-primary300">
          <img src={plusIcon} alt="" />{' '}
          <span className="text-bold14">Cadastrar produto</span>
        </button>
      </div>

      <DataTable />
    </section>
  )
}
