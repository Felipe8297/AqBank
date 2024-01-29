import { ArrowLeft, ArrowRight } from 'lucide-react'

import { Button } from './ui/button'

interface PaginationProps {
  totalCount: number
}

export function Pagination({ totalCount }: PaginationProps) {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="text-sm text-neutral400 text-right w-full">
        <span>{totalCount} resultados encontrados</span>
      </div>

      <div className="flex items-center gap-6 lg:gap-8 justify-center w-full">
        <div className="flex items-center gap-2">
          <Button variant="outline" className="h-8 w-8 p-0">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Primeira página</span>
          </Button>
          <Button variant="outline" className="h-8 w-8 p-0">
            <span className="text-neutral800">1</span>
          </Button>
          <Button variant="outline" className="h-8 w-8 p-0">
            <span className="text-neutral800">2</span>
          </Button>
          <Button variant="outline" className="h-8 w-8 p-0">
            <span className="text-neutral800">...</span>
          </Button>
          <Button variant="outline" className="h-8 w-8 p-0">
            <span className="text-neutral800">12</span>
          </Button>
          <Button variant="outline" className="h-8 w-8 p-0">
            <ArrowRight className="h-4 w-4" />
            <span className="sr-only">Última página</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
