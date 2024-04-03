import { Box, Typography, List, ListItem, ListItemText } from '@mui/material'

const PokemonInfo = ({name, base}) => {

  return (
    <Box>
      <Typography variant="h4" compnent="h2">{name.english}</Typography>
      <List>
        {
          Object.keys(base).map((key) => (
            <ListItem key={key}>
              <ListItemText primary={<strong>{key}</strong>} secondary={base[key]} />
            </ListItem>
          ))
        }
      </List>
    </Box>
  )

}

export default PokemonInfo
