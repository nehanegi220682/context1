import React, {useState} from 'react';
import ThemeContext from './Context/ThemeContext';
import Toggler from './Components/Toggler';
import MainSection from './Components/MainSection';


const App = () => {
  const themeHook = useState("light")
  return(
    <ThemeContext.Provider value={themeHook}>
        <div>
          <Toggler />
          <MainSection />
        </div>
    </ThemeContext.Provider>
  )
}

export default App;
