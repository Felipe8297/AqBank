import { ProgressBar } from '../components/progress-bar'

interface PaymentDetailsProps {
  title: string
  value: string
  percentage: string
  img: string
}

export function PaymentDetails({
  title,
  value,
  percentage,
  img,
}: PaymentDetailsProps) {
  return (
    <div className="flex flex-col gap-4 border rounded-xl p-4">
      <div className="flex items-center gap-2">
        <img src={img} alt="" />
        <h3 className="text-bold16">{title}</h3>
      </div>
      <span className="border border-neutral300 rounded-lg px-2 text-regular14 font-medium self-start">
        {value}
      </span>

      <div className="flex flex-col gap-2">
        <ProgressBar title={title} percent={percentage} />
        <p
          className={`text-bold16 ${title === 'Canceladas' ? 'text-error500' : 'text-secondary700'} `}
        >
          {percentage}%
        </p>
      </div>
    </div>
  )
}
