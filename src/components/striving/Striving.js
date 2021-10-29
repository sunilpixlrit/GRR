import React from 'react'

import Striving1 from '../../images/Striving1.png'
import Striving2 from '../../images/Striving2.png'
import Striving3 from '../../images/Striving3.png'
import Striving2_1 from '../../images/Striving2-1.png'
import Striving2_2 from '../../images/Striving2-2.png'

import './striving.css'
const Striving = () => {
     return (
          <div className='striving'>
               <div className='strivingContainer'>
                    <div className='strivingTitle'>Striving for equality, one rental at a time!</div>
                    <div className='strivingGrid3'>
                         <div className='strivingGrid3Element'>
                              <div className='strivingGrid3ElementIMG'>
                                   <img src={Striving1} alt='' className='strivingGrid3ElementIMGElement' />
                              </div>
                              <div className='strivingGrid3ElementTitle'>We're All-inclusive</div>
                              <div className='strivingGrid3ElementText'>
                                   Join thousands of LGBTQ+ users around the world and find your next amazing
                                   rental together.
                              </div>
                         </div>
                         <div className='strivingGrid3Element'>
                              <div className='strivingGrid3ElementIMG'>
                                   <img src={Striving2} alt='' className='strivingGrid3ElementIMGElement' />
                              </div>
                              <div className='strivingGrid3ElementTitle'>We Prioritise Safety</div>
                              <div className='strivingGrid3ElementText'>
                                   Every advertisement and profile is vetted by our staff to ensure community
                                   safety at all times.
                              </div>
                         </div>
                         <div className='strivingGrid3Element'>
                              <div className='strivingGrid3ElementIMG'>
                                   <img src={Striving3} alt='' className='strivingGrid3ElementIMGElement' />
                              </div>
                              <div className='strivingGrid3ElementTitle'>We Promote Efficiency</div>
                              <div className='strivingGrid3ElementText'>
                                   Our easy-to-use platform and growing community will help you find the right
                                   rental faster.
                              </div>
                         </div>
                    </div>
                    <div className='strivingGrid2'>
                         <div className='strivingGrid2Element'>
                              <div className='strivingGrid2ElementBC'>
                                   <img src={Striving2_1} alt='' className='strivingGrid3ElementIMGElement2' />
                              </div>
                              <div className='strivingGrid2ElementTitle'>I have a room</div>
                              <div className='strivingGrid2ElementText'>
                                   Creating a listing is easy, fast, and free.
                              </div>
                              <div className='strivingGrid2ElementButton'>List Rental</div>
                         </div>
                         <div className='strivingGrid2Element'>
                              <div className='strivingGrid2ElementBC'>
                                   <img src={Striving2_2} alt='' className='strivingGrid3ElementIMGElement2' />
                              </div>
                              <div className='strivingGrid2ElementTitle'>I need a room</div>
                              <div className='strivingGrid2ElementText'>
                                   Browse LGBTQ-friendly rentals globally.
                              </div>
                              <div className='strivingGrid2ElementButton'>Find Rental</div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Striving
