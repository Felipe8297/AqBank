import { Button } from '@/components/ui/button'
import { CheckIcon } from 'lucide-react'

interface FilterButtonProps {
  title: string
  children: React.ReactNode
  filterList: string[]
  setFilterList: React.Dispatch<React.SetStateAction<string[]>>
}

export function FilterButton({
  title,
  children,
  filterList,
  setFilterList,
}: FilterButtonProps) {
  function handleClick() {
    setFilterList((prev) => {
      if (prev.includes(title)) {
        return prev.filter((item) => item !== title)
      } else {
        return [...prev, title]
      }
    })
  }
  return (
    <Button
      className="flex gap-2 py-1 px-2 rounded-lg hover:bg-neutral100"
      onClick={handleClick}
    >
      <div className="w-full flex items-center justify-between">
        {children}{' '}
        {filterList.includes(title) ? <CheckIcon className="w-5 h-4" /> : null}
      </div>
    </Button>
  )
}
