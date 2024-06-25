import '@fontsource/inter';
import Button from '@mui/joy/Button';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';

function App() {

  return (
    <>
      <CssVarsProvider>
        <Sheet variant="outlined">Welcome!</Sheet>
      </CssVarsProvider>
    </>
  )
}

export default App
