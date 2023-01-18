
import './App.css';
import Navbar from './Component/Navbar';
import AllRoutes from './Component/AllRoutes';
import Introducing from './Component/Introducing/Introducing';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
     <Introducing/>
    </div>
  );
}

export default App;
