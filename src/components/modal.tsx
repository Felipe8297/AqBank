import { useEffect, useRef, useState } from 'react'
import menuDots from '../assets/icons/menuDots-icon.svg'
import detalhesIcon from '../assets/icons/detalhes-icon.svg'
import pauseIcon from '../assets/icons/pause-icon.svg'
import downloadIcon from '../assets/icons/download-icon.svg'
import trashIcon from '../assets/icons/trash-icon.svg'

export function Modal() {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  function handleModalOpen(e: React.MouseEvent) {
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
      <button ref={menuButtonRef} onClick={handleModalOpen}>
        <img src={menuDots} alt="" />
      </button>
      {modalOpen && (
        <>
          <div
            className="absolute w-60 top-6 right-[-12px] z-20 flex flex-col items-baseline gap-3 bg-white border border-neutral-300 rounded-xl p-3"
            ref={menuRef}
          >
            <button className="flex gap-2">
              <img src={detalhesIcon} alt="" /> Detalhes
            </button>
            <button className="flex gap-2">
              <img src={pauseIcon} alt="" />
              Pausar
            </button>
            <button className="flex gap-2">
              <img src={downloadIcon} alt="" />
              Baixar relatório
            </button>
            <button className="flex gap-2">
              <img src={trashIcon} alt="" />
              Cancelar
            </button>
          </div>
        </>
      )}
    </div>
  )
}
