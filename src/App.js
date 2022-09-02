import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Agents from './components/Agents'
import Maps from './components/Maps';
import Arsenal from './components/Arsenal';
import AgentDetails from './components/AgentDetails';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route
        path="/"
        element={<Agents/>}
        />
        <Route
        path="/agents/:name"
        element={<AgentDetails/>}
        />
        <Route
        path="/maps"
        element={<Maps/>}
        />
        <Route
        path="/arsenal"
        element={<Arsenal/>}
        />
      </Routes>
     
    </div>
  );
}

export default App;
