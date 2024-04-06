import { Box, Typography, List, ListItem, ListItemText } from '@mui/material'

import { useSelector } from 'react-redux'

const PokemonInfo = () => {

  const selectedPokemon = useSelector(state => state.selectedPokemon)

  return selectedPokemon ? (
    <Box>
      <Typography variant="h6" compnent="h2">{selectedPokemon.name.english}</Typography>
      <List>
        {
          Object.keys(selectedPokemon.base).map((key) => (
            <ListItem key={key}>
              <ListItemText primary={<strong>{key}</strong>} secondary={selectedPokemon.base[key]} />
            </ListItem>
          ))
        }
      </List>
    </Box>
  ) : null

}

export default PokemonInfo
