import '@fontsource/inter';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Sheet } from '@mui/joy';
import { JSX } from "react";

function App(props: { children: JSX.Element[] | JSX.Element }) {
  return (
    <>
      <CssVarsProvider>
        <CssBaseline />
        <Sheet sx={{ minWidth: "100vw", minHeight: "100vh" }}>
        {props.children}
        </Sheet>
      </CssVarsProvider>
    </>
  )
}

export default App
