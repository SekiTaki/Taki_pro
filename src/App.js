import './App.css';
import Navbar from './components/Navbar';
import Home from './pages';
import { Switch, Route } from 'react-router-dom';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/resume" component={Resume} />
      </Switch>
    </>
  );
}

export default App;

