import PropTypes from 'prop-types'
import React from 'react'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const PokemonRow = ({ pokemon, onSelect }) => {
  const handleSelect = () => {
    onSelect(pokemon)
  }

  return ( 
    <tr>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(', ')}</td>
      <td><Button variant="outlined" onClick={handleSelect}>Select</Button></td>
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

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      filter: '',
      pokemon: [],
      selectedItem: null
    }
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      filter: e.target.value
    })
  }

  handleSelect = (pokemon) => {
    this.setState({
      ...this.state,
      selectedItem: pokemon
    })
  }

  componentDidMount() {
    fetch('http://localhost:3000/starting-react/pokemon.json')
       .then((response) => response.json())
       .then((pokemon) => this.setState({
         ...this.state,
         pokemon
       }))
  }

  render() {
    return (<>
      <CssBaseline />
      <h1 className="title">Pokemon Search</h1>
      <TextField variant="outlined" value={this.state.filter} onChange={this.handleChange} />
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
            this.state.pokemon
              .filter((pokemon) => pokemon.name.english.toLowerCase().includes(this.state.filter.toLowerCase()))
              .slice(0, 10)
              .map((pokemon) => (
                <PokemonRow pokemon={pokemon} key={pokemon.id} onSelect={() => this.handleSelect(pokemon)} />
              ))
          }
        </tbody>
      </table>
      <p>Click on a pokemon to see more details:</p>
      {this.state.selectedItem &&
        <PokemonInfo {...this.state.selectedItem} />
      }
    </>)
  }
}

export default App
