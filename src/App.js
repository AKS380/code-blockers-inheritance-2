import React from "react";
import{BrowserRouter  as Router , Routes, Route} from 'react-router-dom'




import Home from'./home'
import Login from "./login";
import Signup from "./signup";
import Form from "./form";
import BreastCancerForm from "./test2";


function App(){
   return(
    <Router>
      <Routes>
        <Route path='*'element ={<Home/>}/>
        <Route path='/login'element ={<Login/>}/>
        <Route path='/signup'element ={<Signup/>}/>
        <Route path='/form'element ={<Form/>}/>
        <Route path='/test2'element = {<BreastCancerForm/>}/>

        





      </Routes>




    </Router>
   );
  



}
export default App;
