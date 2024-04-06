import { Box, Typography, List, ListItem, ListItemText } from '@mui/material'

import PokemonType from '../PokemonType'
import useStore from '../store'

const PokemonInfo = () => {

  const selectedPokemon = useStore(state => state.selectedPokemon)

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

PokemonInfo.propTypes = PokemonType;

export default PokemonInfo
