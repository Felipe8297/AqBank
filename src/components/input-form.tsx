import { Input } from '@/components/ui/input'
import EyeIcon from '../assets/icons/eye-icon.svg'

interface FormInputProps {
  title: string
  placeholder?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  type: string
  icon: string
  value?: string
}

export function InputForm({
  title,
  type,
  placeholder,
  icon,
  value,
  onChange,
}: FormInputProps) {
  return (
    <div>
      <label
        className="text-label14 font-medium text-neutral-950"
        htmlFor={title}
      >
        {title}
      </label>
      <div className="flex w-full items-center gap-2 rounded-lg border  border-neutral300 px-3 py-0.5 shadow-sm">
        <img src={icon} alt={title} />
        <Input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
          className="flex-1 border-0 bg-transparent p-0 text-regular14 text-neutral-950 placeholder-zinc-600"
        />
        {type === 'password' && <img src={EyeIcon} alt={title} />}
      </div>
      {/*
       */}
    </div>
  )
}
