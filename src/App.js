import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

const PokemonRow = ({ pokemon, onSelect }) => {
  const handleSelect = () => {
    onSelect(pokemon)
  }

  return ( 
    <tr>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(', ')}</td>
      <td><button onClick={handleSelect}>Select</button></td>
    </tr>
  )
}

const PokemonInfo = ({name, base}) => {
  return (
    <div>
      <h1>{name.english}</h1>
      <ul>
        {Object.keys(base).map((key) => (
          <li key={key}>
            <strong>{key}</strong>: {base[key]}
          </li>
        ))}
      </ul>
    </div>
  )
}

PokemonInfo.propTypes = {
  name: PropTypes.shape({
    english: PropTypes.string.isRequired
  }),
  base: PropTypes.shape({
    HP: PropTypes.number.isRequired,
    Attack: PropTypes.number.isRequired,
    Defense: PropTypes.number.isRequired,
    'Sp. Attack': PropTypes.number.isRequired,
    'Sp. Defense': PropTypes.number.isRequired,
    Speed: PropTypes.number.isRequired
  })
}

PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string.isRequired
    }),
    type: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  }),
  onSelect: PropTypes.func.isRequired
}

function App() {
  const [filter, setFilter] = useState('')
  const [selectedItem, setSelectedItem] = useState(null)
  const [pokemon, setPokemon] = useState([])

  const handleChange = (e) => {
    setFilter(e.target.value)
  }

  const handleSelect = (pokemon) => {
    setSelectedItem(pokemon)
  }

  useEffect(() => {
    fetch('http://localhost:3000/starting-react/pokemon.json')
      .then((response) => response.json())
      .then((data) => setPokemon(data))
  }, [])

  return (<>
    <h1 className="title">Pokemon Search</h1>
    <input value={filter} onChange={handleChange}></input>
    <p>Showing top 10 pokemons using the filter above (if any):</p>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {
          pokemon
            .filter((pokemon) => pokemon.name.english.toLowerCase().includes(filter.toLowerCase()))
            .slice(0, 10)
            .map((pokemon) => (
              <PokemonRow pokemon={pokemon} key={pokemon.id} onSelect={() => handleSelect(pokemon)} />
            ))
        }
      </tbody>
    </table>
    <p>Click on a pokemon to see more details:</p>
    {selectedItem &&
      <PokemonInfo {...selectedItem} />
    }
  </>)
}

export default App
