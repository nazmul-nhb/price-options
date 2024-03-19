import './App.css'
import LineChart from './components/LineChart/LineChart'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'
// import DaisyNavBar from './DaisyNavBar/DaisyNavBar'

function App() {

  

  return (
    <>
      {/* <DaisyNavBar></DaisyNavBar> */}
      <NavBar></NavBar>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
    </>
  )
}

export default App
