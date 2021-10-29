import React from 'react'

import { ReactComponent as Instagram } from '../../icons/Instagram.svg'
import { ReactComponent as Facebook } from '../../icons/Facebook.svg'

import { ReactComponent as Logo } from '../../icons/Logo.svg'

import './footer.css'
const Footer = () => {
     return (
          <div className='footer'>
               <div className='footerContainer'>
                    <div className='footerLeft'>
                         <div className='footerLeftIcon'>
                              <div className='footerLeftIconText'>
                                   <Logo />
                              </div>
                         </div>
                         <div className='footerLeftText'>Follow us with our social links</div>
                         <div className='footerLeftLinks'>
                              <div className='footerLeftItem'>
                                   <Facebook />
                              </div>
                              <div className='footerLeftItem'>
                                   <Instagram />
                              </div>
                         </div>
                         <div className='footerLeftC'>&copy; All Rights reserved 2021 Gay room rentals</div>
                    </div>
                    <div className='footerRight'>
                         <div className='footerRightContainer'>
                              <div className='footerRightColumn'>
                                   <div className='footerRightTitle'>About us</div>
                              </div>
                              <div className='footerRightColumn'>
                                   <div className='footerRightTitle'>Blog</div>
                              </div>
                              <div className='footerRightColumn mobileNone' />
                         </div>
                         <div className='footerRightText'>
                              We think that all LGBTQ+ renters should be able to connect with welcoming housemates
                              and properties, so we’ve made it free and super-easy for all Gay Room Rentals users
                              to set up a profile and add a room. With a simple profile creation system,
                              prospective tenants can quickly and efficiently discover an entire world of LGBTQ+
                              households and flats for them to chat with and move into.
                         </div>
                         <div className='footerRightText'>
                              Gay Room Rentals - Striving for equality, one room at a time!
                         </div>
                    </div>
                    <div className='footerLeftCMobile'>&copy; All Rights reserved 2021 Pandalan-Hukuk</div>
               </div>
          </div>
     )
}

export default Footer
