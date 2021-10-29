import React from 'react'
import Accommodation from '../../components/accommodation/Accommodation'
import Animation from '../../components/animation/Animation'
import Safety from '../../components/safety/Safety'
import Striving from '../../components/striving/Striving'
import './main.css'
const Main = () => {
     return (
          <div className='main'>
               <Accommodation />
               <Striving />
               <Safety />
               <Animation />
          </div>
     )
}

export default Main
