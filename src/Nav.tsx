import '@fontsource/inter';
import { useColorScheme } from '@mui/joy/styles';
import Button from '@mui/joy/Button';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListDivider from '@mui/joy/ListDivider';
import ListItemButton from '@mui/joy/ListItemButton';
import Home from '@mui/icons-material/Home';
import Person from '@mui/icons-material/Person';
import { Link as RouterLink } from 'react-router-dom';

function ModeToggle() {
  const { mode, setMode } = useColorScheme();

  return (
    <Button
      variant="outlined"
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  );
}


function Nav() {
  return (
    <>
        <List role="menubar" orientation="horizontal">
          <ListItem role="none">
            <ListItemButton
              role="menuitem"
               component={RouterLink} 
               to="/"
              aria-label="Home"
            >
              <Home />
            </ListItemButton>
          </ListItem>
          <ListDivider />
          <ListItem role="none">
            <ListItemButton role="menuitem" component={RouterLink} to="/docs">
              Products
            </ListItemButton>
          </ListItem>
          <ListItem role="none" sx={{ marginInlineStart: 'auto' }}>
            <ListItemButton
              role="menuitem"
              component="a"
              href="#horizontal-list"
              aria-label="Profile"
            >
              <Person />
            </ListItemButton>
          </ListItem>
        </List>
        <ModeToggle />        
    </>
  )
}

export default Nav
