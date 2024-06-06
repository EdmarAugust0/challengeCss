import './carsDetails.css'
// eslint-disable-next-line react/prop-types
const CarsDetails = ({ brand, color, km }) => {
    return (
        <div className='teste'>
            <ul className='list'>
            <li>Marca: {brand}</li>
            <li>Cor: {color}</li>
            <li>Km: {km}</li>
            {km > 0 ? (<li>Estado: Usado!</li>) : (<li>Estado: Novo!</li>)}
            </ul>
        </div>
    )
}

export default CarsDetails