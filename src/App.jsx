import './App.css'
import CarsDetails from './components/carsDetails'

function App() {

  const cars = [
    {id:1, brand:"VW", color:"Azul", km:0},
    {id:1, brand:"BMW", color:"Preto", km:113000},
    {id:1, brand:"Mercedes", color:"Preto", km:25705},
    {id:1, brand:"Porshe", color:"Vermelho", km:0},
    {id:1, brand:"Jaguar", color:"Branco", km:0}
  ]

  return (
    <div className='container'>
      <h1>Carros em exposição: </h1>
      {cars.map((car) => (
        <CarsDetails key={car.id} brand={car.brand} color={car.color} km={car.km}/>
      ))}
    </div>
  )
}

export default App
