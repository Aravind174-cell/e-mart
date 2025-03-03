import './App.css'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './stores/pages/LandingPage'
import MobilePage from './stores/pages/MobilePage'
import AcPage from './stores/pages/AcPage'
import BooksPage from  './stores/pages/BooksPage'
import ComputersPage from './stores/pages/ComputersPage'
import FridgePage from './stores/pages/FridgePage'
import FurniturePage from './stores/pages/FurniturePage'
import KitchenPage from './stores/pages/KitchenPage'
import MenPage from './stores/pages/MenPage'
import SpeakerPage from './stores/pages/SpeakerPage'
import TvPage from './stores/pages/TvPage'
import WatchPage from './stores/pages/WatchPage'
import Woman from './stores/components/Woman'
import MobileSingle from './singles/MobileSingle'
import UserCart from './UserCart'

const App = () => {
  
  return (
    <>
     <div>
      <Routes>
         <Route path='/' element= {<LandingPage/>} />
         <Route path='/mobile' element={<MobilePage/>} />
         <Route path='/ac' element={<AcPage/>} />
         <Route path='/books' element={<BooksPage/>} />
         <Route path='/computers' element={<ComputersPage/>} />
         <Route path='/fridge' element={<FridgePage/>} />
         <Route path='/furniture' element={<FurniturePage/>} />
         <Route path='/kitchen' element={<KitchenPage/>} />
         <Route path='/men' element={<MenPage/>} />
         <Route path='/speaker' element={<SpeakerPage/>} />
         <Route path='/tv' element={<TvPage/>} />
         <Route path='/watch' element={<WatchPage/>} />
         <Route path='/woman' element={<Woman/>}/>

             <Route path='/mobile/:id' element={<MobileSingle/>} />
             <Route  path='/cart' element= {<UserCart/>}/>
             <Route  path='/Ac' element={<AcPage/>} />
      </Routes>
      
     </div>
    </>
  )
}

export default App
