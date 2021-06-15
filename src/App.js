import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/HomePage/Home';
import Services from './components/Services/Services'
import Products from './components/Products/Products'
import SignUp from './components/SignUp/SignUp'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
