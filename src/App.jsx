import React from "react";
import Header from "./Components/Common/Header";
import Signin from "./Components/Signin";
import Footer from "./Components/Common/Footer";
import './Style.css'

const App=()=>{
    return(
            <div className="App">
              <Header/>

              <Signin/>


              <Footer/>
            </div>
        )
}
export default App