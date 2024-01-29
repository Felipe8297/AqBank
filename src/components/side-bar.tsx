import { ReactNode, HTMLAttributes } from 'react'
import { signOut } from '../lib/auth'
import { useNavigate } from 'react-router-dom'
import { MenuItems } from './menu-items'

import bellIcon from '../assets/icons/bell-icon.svg'
import dotsIcon from '../assets/icons/dots-icon.svg'
import homeIcon from '../assets/icons/home-icon.svg'
import storeIcon from '../assets/icons/store-icon.svg'
import payIcon from '../assets/icons/payLink-icon.svg'
import productsIcon from '../assets/icons/products-icon.svg'
import newProductIcon from '../assets/icons/newProduct-icon.svg'
import userLine from '../assets/icons/userLine-icon.svg'
import permissionsIcon from '../assets/icons/permissions-icon.svg'
import logoutIcon from '../assets/icons/logout-icon.svg'

interface SideBarProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}

export function SideBar({ children }: SideBarProps) {
  const navigate = useNavigate()

  function handleLogout() {
    signOut()
    window.location.reload()
  }

  return (
    <div className="grid grid-cols-[296px_1fr]">
      <div className="h-lvh flex flex-col justify-between p-6">
        <div className="flex flex-col gap-8">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <span className="flex justify-center items-center w-8 h-8 rounded-full bg-secondary100">
                P
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-regular14 font-medium">Patricia</span>
                  <span className="bg-neutral100 rounded-md text-regularCaption font-medium px-1">
                    Free
                  </span>
                </div>
                <p className="text-regularCaption">@patricia.paula</p>
              </div>
            </div>

            <div className="flex gap-2">
              <img src={bellIcon} alt="" />
              <img src={dotsIcon} alt="" />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <MenuItems
              icon={homeIcon}
              title="Home"
              onClick={() => navigate('/dashboard')}
            />
            <div className="flex flex-col">
              <MenuItems
                icon={storeIcon}
                title="Produtos"
                productCount={54123}
                onClick={() => navigate('/produtos')}
              />
              <div className="flex flex-col gap-4 ml-2 pl-4 pt-4 border-l border-neutral100">
                <MenuItems icon={productsIcon} title="Categorias" />
                <MenuItems icon={newProductIcon} title="Lojas" />
              </div>
            </div>
            <MenuItems
              icon={payIcon}
              title="Link de pagamento"
              disabled={true}
            />
          </div>

          <span className="text-neutral800 text-regularCaption font-medium">
            Usuários
          </span>

          <div className="flex flex-col gap-4">
            <MenuItems icon={userLine} title="Gerenciar" />
            <MenuItems
              icon={permissionsIcon}
              title="Permissões"
              disabled={true}
            />
          </div>
        </div>

        <MenuItems icon={logoutIcon} title="Logout" onClick={handleLogout} />
      </div>

      <main className="p-12">{children}</main>
    </div>
  )
}
