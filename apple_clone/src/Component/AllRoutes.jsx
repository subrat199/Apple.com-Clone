import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './../Pages/Home';
import Accessories from './../Pages/Accessories';
import Airpods from './../Pages/Airpods';
import Mac from '../Pages/Mac';
import OnlyApple from './../Pages/OnlyApple';
import Store from '../Pages/Store';
import Support from './../Pages/Support';
import Tv from './../Pages/Tv';
import Watch from './../Pages/Watch';
import iPad from '../Pages/IPad';
import iPhone from '../Pages/IPhone';
const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/airpods" element={<Airpods/>} />
            <Route path='/iPad' element={<iPad/>}/>
            <Route path='/iPhone' element={<iPhone/>}/>
            <Route path='/Mac' element={<Mac/>}/>
            <Route path='/onlyApple' element={<OnlyApple/>}/>
            <Route path='/store' element={<Store/>}/>
            <Route path='/support' element={<Support/>}/>
            <Route path='/tv' element={<Tv/>}/>
            <Route path='/watch' element={<Watch/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes