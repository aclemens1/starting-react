import { Box, Typography, List, ListItem, ListItemText } from '@mui/material'

import PokemonType from '../PokemonType'
import store from '../store'
import { observer } from 'mobx-react'

const PokemonInfo = () => {

  return store.selectedPokemon ? (
    <Box>
      <Typography variant="h6" compnent="h2">{store.selectedPokemon.name.english}</Typography>
      <List>
        {
          Object.keys(store.selectedPokemon.base).map((key) => (
            <ListItem key={key}>
              <ListItemText primary={<strong>{key}</strong>} secondary={store.selectedPokemon.base[key]} />
            </ListItem>
          ))
        }
      </List>
    </Box>
  ) : null

}

PokemonInfo.propTypes = PokemonType;

export default observer(PokemonInfo)
