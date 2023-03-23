import { Route } from 'wouter'
import Footer from './components/Footer'
import Home from './pages/Home'
import './index.css'

function App () {
  return (
    <div className='App'>
      <Route path='' component={Home} />
      <Footer />
    </div>
  )
}

export default App
