import './App.css';
import About from './components/About.js';
import Info from './components/Info.js';
import Interests from './components/Interests.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="app-container">
      <div className="biz-card">
        <Info />
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  );
}

export default App;
