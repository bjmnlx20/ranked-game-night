import Board from './components/board';
import './components/style.css';
import Create from './components/Create';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App" id='main'>
      <Routes>
        <Route path="/" element={<Board />}/>
        <Route path="/create" element={<Create />}/>  
        </Routes>
    </div>
  );
}

export default App;
