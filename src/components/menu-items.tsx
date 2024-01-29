interface MenuProps {
  icon: string
  title: string
  productCount?: number
  disabled?: boolean
  onClick?: () => void
}

export function MenuItems({
  icon,
  title,
  productCount,
  disabled,
  onClick,
}: MenuProps) {
  return (
    <button
      className={`flex gap-2 ${disabled ? 'opacity-50' : ''}`}
      disabled={disabled}
      onClick={onClick}
    >
      <img src={icon} alt="" />
      <div className="flex gap-2 items-center">
        <span className="text-regular14 font-medium">{title}</span>
        {productCount ? (
          <span className="border  rounded-md text-regularCaption font-medium px-1">
            {productCount}
          </span>
        ) : null}
      </div>
    </button>
  )
}
