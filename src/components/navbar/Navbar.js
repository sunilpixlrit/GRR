import React, { useEffect, useState } from 'react'

import { ReactComponent as LogoMain } from '../../icons/LogoMain.svg'
import { ReactComponent as LogoBlack } from '../../icons/LogoBlack.svg'
import { ReactComponent as MobileMenu } from '../../icons/MobileMenu.svg'
import { ReactComponent as Close } from '../../icons/Close.svg'

import './navbar.css'

const Navbar = () => {
     const [Mobile, setMobile] = useState(false)

     useEffect(() => {
          WindowChange()
     }, [])

     const HandleMobileMenu = () => {
          setMobile(!Mobile)
     }

     const WindowChange = () => {
          if (window.innerWidth > 1050) {
               setMobile(false)
          }
     }

     if (Mobile) {
          const body = document.body
          body.style.overflowY = 'hidden'
     } else {
          const body = document.body
          body.style.overflowY = 'scroll'
     }

     window.addEventListener('resize', WindowChange)

     return (
          <div className='navbar'>
               <div className='navbarMobileButton' onClick={HandleMobileMenu}>
                    <MobileMenu className={Mobile ? 'MobileDN' : 'Mobile'} />
                    <div className={Mobile ? 'navbarMenu active' : 'navbarMenu'}>
                         <div className='navbarMobileTop'>
                              <div className='navbarMobileTopLeft close'>
                                   <Close className='Ml20 CurPoi' onClick={HandleMobileMenu} />
                              </div>
                              <div className='navbarMobileTopLeft'>
                                   <LogoBlack className='CurPoi' />
                              </div>
                              <div className='navbarMobileTopLeft' />
                         </div>
                         <div className='navbarMobileMain'>
                              <div className='navbarCenterLink'>Rooms</div>
                              <div className='navbarCenterLink'>Roomates</div>
                              <div className='navbarCenterLink'>Info</div>
                              <div className='navbarCenterLink'>Login</div>
                         </div>
                    </div>
               </div>
               <div className='navbarMobile'>
                    <div className='navbarCenterIcon'>
                         <LogoMain />
                    </div>
               </div>
               <div className='navbarContainer'>
                    <div className='navbarLeft'>
                         <LogoMain />
                    </div>
                    <div className='navbarCenter'>
                         <div className='navbarCenterLink'>Rooms</div>
                         <div className='navbarCenterLink'>Roomates</div>
                         <div className='navbarCenterLink'>Info</div>
                    </div>
                    <div className='navbarRight'>
                         <div className='navbarRightIcon'>
                              <div className='navbarRightIconText'>Login</div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Navbar
