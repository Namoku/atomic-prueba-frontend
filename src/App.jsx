import { Route } from 'wouter'
import Footer from './components/Footer'
import Home from './pages/Home'
import './index.css'
import Header from './components/Header'
import Contact from './pages/Contact'

function App () {
  return (
    <div className='App'>
      <Header />
      <Route path='' component={Home} />
      <Route path='/contact' component={Contact} />
      <Footer />
    </div>
  )
}

export default App
