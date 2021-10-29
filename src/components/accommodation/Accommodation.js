import React from 'react'

import { ReactComponent as Search } from '../../icons/Search.svg'
import { ReactComponent as Marker } from '../../icons/Marker.svg'

import SearchPNG from '../../images/Search.png'

import './accommodation.css'

const Accommodation = () => {
     return (
          <div className='accommodation'>
               <div className='accommodationContainer'>
                    <div className='accommodationMainText wow1 ZoomIn' data-wow-delay='0.2s'>Gay Share Accommodation</div>
                    <div className='accommodationSearch'>
                         <img src={SearchPNG} alt='' className='accommodationSearchBC' />
                         <div className='accommodationSearchSectionOne'>
                              <div className='accommodationSearchSectionOneIcon'>
                                   <Marker className='MarkerMobile' />
                              </div>
                              <div className='accommodationSearchSectionOneText'>
                                   <div className='accommodationSearchSectionOneTitle'>Location</div>
                                   <div className='accommodationSearchSectionOneTitleText'>
                                        Find my gay friendly rental in
                                   </div>
                              </div>
                         </div>
                         <div className='accommodationSearchSectionSearch'>
                              <div className='accommodationSearchSectionSearchIcon'>
                                   <Search className='SearchMobile' />
                              </div>
                              <div className='accommodationSearchSectionSearchText'>Search</div>
                         </div>
                    </div>
                    <div className='accommodationSearchMobile'>
                         <img src={SearchPNG} alt='' className='accommodationSearchBCMobile' />
                         <div className='accommodationSearchMobileInside'>
                              <Search className='SearchInMobile' />
                              <div className='accommodationSearchMobileText'>Search</div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Accommodation
