import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import GameList from "./components/game-list/gameList";
import GameCreate from "./components/game-create/gameCreate";
import Login from "./components/login/login";
import Register from "./components/Register/Register";



function App() {

  return (
    <div id="box">
      <Header />
      
      <Routes>
        
        <Route path="/" element={ <Home />} />
        <Route path="/games" element= { <GameList />} />
        <Route path="/games/create" element= {<GameCreate />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      
      </Routes>

    
   </div>
  )
}

export default App
