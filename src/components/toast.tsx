import successIcon from '../assets/icons/success-icon.svg'
import closeIcon from '../assets/icons/close-icon.svg'

interface ToastProps {
  title: string
  success: boolean
  onCLick: () => void
}

export function Toast({ title, success, onCLick }: ToastProps) {
  return (
    <div className="w-[390px] flex justify-between border border-success200 bg-success50 px-4 py-3 rounded-xl mx-auto">
      <div className="flex gap-2">
        <img src={successIcon} alt="success" />
        <p>{title}</p>
      </div>
      <button disabled={!success} onClick={onCLick}>
        <img className="" src={closeIcon} alt="close" />
      </button>
    </div>
  )
}
