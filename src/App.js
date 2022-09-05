import { BrowserRouter, Switch, Route} from "react-router-dom";
import { Fragment } from "react"
import { useState } from "react"
import './App.css';
import Header from "./components/Header";
import Home from './Pages/Home'
import About from './Pages/About'
import Profile from './Pages/Profile'
import NotFound from './Pages/NotFound'
import Post from "./Pages/Post";




function App() {

  const [login, setLogin] = useState(false);



  return (
    <Fragment>
      <BrowserRouter  basename="/router" /*forceRefresh*/>
          
        <div className="App">

          <Header/>

            <button onClick={()=>setLogin(!login)}>
                    {login?"Logout":"login"}
            </button>

          <Switch>
            <Route path='/' component={Home} exact/>

            <Route path='/about' component={About}/>
            
            <Route path='/profile'>
              <Profile login={login}/>
            </Route>
            
            <Route path='/Post/:id' component={Post}/>
              
            <Route component={NotFound}></Route>   
          </Switch> 
        </div>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;




















// function App() {
//   return (
//     <Fragment>
//       <BrowserRouter 
//         getUserConfirmation={
//           (message, callback)=>{
//             callback(window.confirm())
//           }
//         }
//         basename="/router" 
//         forceRefresh
//         ></BrowserRouter>