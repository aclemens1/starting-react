import { useEffect, useState } from 'react'

import '@fontsource/roboto/400.css'

import { CssBaseline, Container, Grid, Paper, Typography } from '@mui/material'

import PokemonTable from './components/PokemonTable'
import PokemonInfo from './components/PokemonInfo'
import PokemonFilter from './components/PokemonFilter'
import PokemonContext from './PokemonContext'

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
    <PokemonContext.Provider value={ { filter, setFilter, selectedItem, setSelectedItem, pokemon, setPokemon } }>
      <Container maxWidth="md" sx={ { marginTop: 2, paddingBottom: 5 } }>
        <CssBaseline />
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <Paper sx={ { padding: 2, marginBottom: 2 } }>
              <Typography variant="h4" component="h1">
                Pokemon Index
              </Typography>
            </Paper>
            <Paper sx={ { padding: 2 } }>
              <PokemonFilter />
              <Typography sx={ { marginTop: 3, marginBottom: 3 } }>
                Showing top 3 pokemons using the filter above (if any):
              </Typography>
              <PokemonTable />
            </Paper>
          </Grid>
          <Grid item xs={3} container alignItems={'stretch'}>
            <Paper sx={ { padding: 2, flexGrow: 1 } }>
              { selectedItem ? <PokemonInfo /> : <Typography color={'GrayText'}>Select a Pokemon</Typography> }
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </PokemonContext.Provider>
  )

}

export default App
