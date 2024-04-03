import { useEffect, useState } from 'react'

import '@fontsource/roboto/400.css'

import { CssBaseline, Container, Grid, Paper, Typography } from '@mui/material'

import PokemonTable from './components/PokemonTable'
import PokemonInfo from './components/PokemonInfo'
import PokemonFilter from './components/PokemonFilter'

function App() {
  const [filter, setFilter] = useState('')
  const [selectedItem, setSelectedItem] = useState(null)
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/starting-react/pokemon.json')
      .then((response) => response.json())
      .then((data) => setPokemon(data))
  }, [])

  if (!pokemon) {
    return <div>Loading data...</div>
  }

  return (
    <Container maxWidth="md" sx={ { paddingBottom: 5 } }>
      <CssBaseline />
      <Typography variant="h3" component="h1" gutterBottom>
        My Page Title
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Paper sx={ { padding: 2 } }>
            <PokemonFilter filter={filter} setFilter={setFilter} />
            <Typography sx={ { marginTop: 3, marginBottom: 3 } }>
              Showing top 10 pokemons using the filter above (if any):
            </Typography>
            <PokemonTable pokemon={pokemon} filter={filter} setSelectedItem={setSelectedItem} />
          </Paper>
        </Grid>
        {selectedItem &&
          <Grid item xs={4}>
            {selectedItem &&
              <Paper sx={ { padding: 2 } }>
                <PokemonInfo {...selectedItem} />
              </Paper>
            }
          </Grid>
        }
      </Grid>
    </Container>)
}

export default App
