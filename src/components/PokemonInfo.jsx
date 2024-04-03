import { Box, Typography, List, ListItem, ListItemText } from '@mui/material'
import PokemonContext from '../PokemonContext'
import { useContext } from 'react'

const PokemonInfo = () => {

  const { selectedItem } = useContext(PokemonContext)

  return selectedItem ? (
    <Box>
      <Typography variant="h6" compnent="h2">{selectedItem.name.english}</Typography>
      <List>
        {
          Object.keys(selectedItem.base).map((key) => (
            <ListItem key={key}>
              <ListItemText primary={<strong>{key}</strong>} secondary={selectedItem.base[key]} />
            </ListItem>
          ))
        }
      </List>
    </Box>
  ) : null

}

export default PokemonInfo
