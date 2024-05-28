// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import LandingPage from './components/LandingPage/LandingPage';
// import AllData from './components/AllData/AllData';
// import HeaderSelect from './components/headerSelection/HeaderSelect';


// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//       {<HeaderSelect />}
//         <Routes>
//           <Route path='/' element={<LandingPage />} />
//           <Route path='/components/AllData/AllData' element={<AllData />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App


import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import AllData from './components/AllData/AllData';
import HeaderSelect from './components/headerSelection/HeaderSelect';
import Footer from './components/Footer/Footer';
import AllUserData from './components/AllData/AllUserData';


const App = () => {
  return (
    <div>
      <BrowserRouter>
      {<HeaderSelect />}
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/components/AllData/AllData' element={<AllData />} />
          <Route path='/components/AllData/AllUserData' element={<AllUserData />} />
        </Routes>
        {<Footer/>}
      </BrowserRouter>
    </div>
  )
}


export default App