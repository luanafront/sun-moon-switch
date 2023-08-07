import './App.css';
import {SunMoonSwitch} from "./components/SunMoonSwitch/SunMoonSwitch";
import {useState} from "react";

function App() {
  const [isLight, setIsLight] = useState(true);
  const toggleLight = () => {
    setIsLight(!isLight);
  }

  return (
    <div style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <SunMoonSwitch isClicked={isLight} onClick={toggleLight}/>
    </div>
  )
}

export default App;
