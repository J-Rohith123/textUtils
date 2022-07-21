
import './App.css';
import NavBar from './components/NavBar';
import PropTypes from 'prop-types'
import About from './components/About';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes, 
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode,SetMode]=useState("light");
  const[alert,setAlert]=useState(null)

  const showAlert=(message,type)=>{
   setAlert({msg:message,type:type});
   setTimeout(()=>{setAlert(null)},1500)
   }
  

  const toggleMode=()=>{
    if(mode === "light"){
      SetMode("dark")
      showAlert("Dark Mode is Enabled","success")
      document.body.style.backgroundColor="#042745"
    }else{
      SetMode("light")
      showAlert("Light Mode is Enabled","success")
      document.body.style.backgroundColor="white"
    }
  }
  return (
    <>
    <Router>
    <NavBar title="TextUtils" li1="Home" li2="About Us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
          <Route exact path="/about" element={<About mode={mode}/>} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text to Analyze" mode={mode}/>} />  
   </Routes>
   </div>
   </Router>  
    
    </>
  );
}
NavBar.propTypes = {title:PropTypes.string.isRequired,li1:PropTypes.string.isRequired,li2:PropTypes.string.isRequired}
NavBar.defaultProps = {
  title:"Title Here",
  li1:"list item 1",
  li2:"list item 2"
}
export default App;
