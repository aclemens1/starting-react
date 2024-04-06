import { Box, Typography, List, ListItem, ListItemText } from '@mui/material'
import PropTypes from "prop-types";
import { useSelector } from 'react-redux'
import PokemonType from '../PokemonType'

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

PokemonInfo.propTypes = PokemonType;

export default PokemonInfo
