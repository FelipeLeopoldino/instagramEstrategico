import About from './components/About'
import Compra from './components/Compra'
import Cronograma from './components/Cronograma'
import DataEncontro from './components/DataEncontro'
import Home from './components/Home'
import Motivo from './components/Motivo'

function App() {
  return (
    <div className="App" style={{display:'inline'}}>
      <Home />
      <DataEncontro />
      <Cronograma />
      <Motivo />
      <Compra />
      <hr
        style={{
          width: '100vw',
          height: '2rem',
          backgroundColor: '#fff',
          border: 'none'
        }}
      />
      <About />
    </div>
  )
}

export default App
