import { Route } from 'wouter'
import Footer from './components/Footer'
import Home from './pages/Home'
import './index.css'
import Header from './components/Header'

function App () {
  return (
    <div className='App'>
      <Header />
      <Route path='' component={Home} />
      <Footer />
    </div>
  )
}

export default App
