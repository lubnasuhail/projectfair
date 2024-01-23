
import './App.css';
import { Route,Routes} from 'react-router-dom';
import PFHome from './pages/PFHome';
import Projects from './pages/Projects';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import Auth from './components/Auth';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/'element={ <PFHome/>}/>
      <Route path='/projects'element={ <Projects/>}/>
      <Route path='/login'element={ <Auth/>}/>
      <Route path='/register'element={ <Auth register/>}/>
      <Route path='/dashboard'element={ <Dashboard/>}/>
      </Routes>

      <Footer/>
      </div>
  );
}

export default App;
