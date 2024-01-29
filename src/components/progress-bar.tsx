interface ProgressBarProps {
  title: string
  percent: string
}

export function ProgressBar({ title, percent }: ProgressBarProps) {
  return (
    <div className="w-full">
      <div
        className={`rounded-lg h-2 ${title === 'Canceladas' ? 'bg-error500' : 'bg-secondary700'}`}
        style={{ width: `${percent}%` }}
      />
    </div>
  )
}
