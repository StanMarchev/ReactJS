import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import GameList from "./components/game-list/gameList";
import GameCreate from "./components/game-create/gameCreate";
import Login from "./components/login/login";
import Register from "./components/Register/Register";
import GameDetails from "./components/game-details/GameDetails";
import { useState } from "react";



function App() {
  const [auth, setAuth] = useState({});

  const loginSumbitHandler = (values) => {
    
    
    console.log(values);
  }


  return (
    <div id="box">
      <Header />
      
      <Routes>
        
        <Route path="/" element={ <Home />} />
        <Route path="/games" element= { <GameList />} />
        <Route path="/games/create" element= {<GameCreate />} />
        <Route path="/login" element={<Login loginSumbitHandler={loginSumbitHandler}/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/games/:gameId" element={<GameDetails />} />
      
      </Routes>

    
   </div>
  )
}

export default App
