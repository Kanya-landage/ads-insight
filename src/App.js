import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/Dashboard";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import CreateAdForm from "./components/CreateAdForm";

function App() {
  return (
    <>
      {/* <Dashboard /> */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="inherit">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Logo
            </Typography>
            <Button color="inherit">Dashboard</Button>
            <Button color="inherit">Create Ads</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <CreateAdForm />
    </>
  );
}

export default App;
