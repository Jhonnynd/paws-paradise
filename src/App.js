import "./App.css";
import { Box, Button, Container, Typography } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Container>
        <Box sx={{ mt: "50px" }}>
          <Button>Hi</Button>
        </Box>

        <Box
          sx={{
            mt: "50px",
            width: "100%",
            height: "70%",
            bgcolor: "red",
          }}
        >
          Hello
        </Box>
      </Container>
    </div>
  );
}

export default App;
