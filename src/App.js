import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Technology from './Components/Technology/Technology';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Technology />
    </div>
  );
}

export default App;