import { Route } from 'wouter'
import Footer from './components/Footer'
import Home from './pages/Home'

function App () {
  return (
    <div className='App'>
      <Route path='' component={Home} />
      <Footer />
    </div>
  )
}

export default App
