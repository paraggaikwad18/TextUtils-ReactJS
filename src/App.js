
import { useState } from 'react';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route} from "react-router-dom";

function App() {
  //to set the mode
  const [mode,setMode] = useState('light')
  
  //to set the alert
  const [alert,setAlert] = useState(null)
  
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      showAlert("Dark mode Enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode Enabled","success")
    }
  }
  return (
  <>
  {/* <Router> */}
    {/* <Navbar title= "textUtils" about = "About TextUtils" /> */}
    <Navbar title= "textUtils" mode = {mode} toggleMode={toggleMode}/>
    {<Alert alert={alert} />}
    <div className="container my-3">
    {/* <Switch>
          <Route path="/about"> */}
            {/* <About mode = {mode}/> */}
          {/* </Route> */}
          {/* <Route path="/"> */}
            <TextForm showAlert= {showAlert} heading = "Enter Amazing Text to Analyze" mode = {mode}/>
          {/* </Route>
        </Switch>    */}
    </div>
  {/* </Router> */}
  </>
  );
}

export default App;
