import walletIcon from '../assets/icons/wallet-icon.svg'
import fundsIcon from '../assets/icons/funds-icon.svg'

interface SellInfoProps {
  title: string
  currentValue: string
  passedValue: string
  type: 'day' | 'month' | 'balance' | 'receive'
}

export function SellDetails({
  title,
  currentValue,
  passedValue,
  type,
}: SellInfoProps) {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="text-bold14 text-white">{title}</h2>

      {type === 'day' || type === 'month' ? (
        <>
          <p className="text-bold16 text-primary300">R$ {currentValue}</p>
          <p className="text-regular14 text-white opacity-60">
            {type === 'day' ? 'Ontem R$ ' : 'Mês anterior R$ '} {passedValue}
          </p>
        </>
      ) : null}

      {type === 'balance' || type === 'receive' ? (
        <>
          <div className="flex items-center gap-1">
            <img src={type === 'balance' ? walletIcon : fundsIcon} alt="" />
            <p
              className={`text-bold16 ${type === 'balance' ? 'text-primary300' : 'text-warning300'}`}
            >
              R$ {currentValue}
            </p>
          </div>
          <p className="text-regular14 text-white opacity-60">{passedValue}</p>
        </>
      ) : null}
    </div>
  )
}
