import './App.css';
import Navigate from './components/Navigate';
import HomePage from './components/HomePage';
import About from './components/About';



function App() {
  return (
    <div className="App">
      <Navigate></Navigate>
      <HomePage></HomePage>
      <About></About>

    </div>
  );
}

export default App;
