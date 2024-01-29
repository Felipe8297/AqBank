import React, { useEffect, useRef, useState } from 'react'
import { StatusText } from './status-text'
import { FilterButton } from './filter-button'

import filterIcon from '../assets/icons/filter-icon.svg'

interface FilterModalProps {
  filterList: string[]
  setFilterList: React.Dispatch<React.SetStateAction<string[]>>
  handleFilterClick: () => void
  handleClearFilter: () => void
}

export function FilterModal({
  filterList,
  setFilterList,
  handleFilterClick,
  handleClearFilter,
}: FilterModalProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  function handleOpenModal(e: React.MouseEvent) {
    setModalOpen(!modalOpen)
    e.stopPropagation()
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuButtonRef.current &&
        menuRef.current &&
        !menuButtonRef.current.contains(event.target as Node) &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setModalOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuButtonRef, menuRef])

  return (
    <div className="relative">
      <button
        className="flex items-center gap-2 border rounded-xl px-3 py-1 mb-4"
        ref={menuButtonRef}
        onClick={handleOpenModal}
      >
        <img src={filterIcon} alt="" />{' '}
        <span className="text-regular14 font-medium">Status</span>
      </button>
      {modalOpen && (
        <>
          <div
            className="absolute w-60 top-9 left-0 z-20 flex flex-col items-baseline gap-3 bg-white border border-neutral-300 rounded-xl p-3"
            ref={menuRef}
          >
            <div className="flex flex-col gap-3 w-full">
              <span className="text-regular14 px-2 font-medium">Status</span>
              <div className="flex flex-col gap-1">
                <FilterButton
                  title="Ativo"
                  filterList={filterList}
                  setFilterList={setFilterList}
                >
                  <StatusText status="Ativo" />
                </FilterButton>
                <FilterButton
                  title="Pendente"
                  filterList={filterList}
                  setFilterList={setFilterList}
                >
                  <StatusText status="Pendente" />
                </FilterButton>
                <FilterButton
                  title="Cancelado"
                  filterList={filterList}
                  setFilterList={setFilterList}
                >
                  <StatusText status="Cancelado" />
                </FilterButton>
                <FilterButton
                  title="Rascunho"
                  filterList={filterList}
                  setFilterList={setFilterList}
                >
                  <StatusText status="Rascunho" />
                </FilterButton>
                <FilterButton
                  title="Pausado"
                  filterList={filterList}
                  setFilterList={setFilterList}
                >
                  <StatusText status="Pausado" />
                </FilterButton>
              </div>
              <div className="flex justify-between gap-2 pt-4 mt-2 border-t">
                <button
                  className="bg-neutral950 rounded-[10px] text-white w-full py-1"
                  onClick={() => {
                    setModalOpen(false)
                    handleFilterClick()
                  }}
                >
                  Filtrar
                </button>
                <button
                  className="border rounded-[10px] text-neutral800 w-full py-1"
                  onClick={() => {
                    setFilterList([])
                    setModalOpen(false)
                    handleClearFilter()
                  }}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
