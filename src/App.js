import './App.css';
import { Hero } from './components/Hero/Hero';
import { NavBar } from './components/NavBar/NavBar';


function App() {
  return (
    <div className="bg-sec  h-screen w-screen">
      <NavBar/>
      <Hero/>
    </div>
  );
}

export default App;
