import React from "react";
import { Box, Container } from "@mui/material";
import AddPet from "./Components/AddPet";
import PetsList from "./Components/PetsList";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      petsUpdated: false,
    };
  }

  onPetsUpdate = () => {
    this.state.petsUpdated
      ? this.setState({
          petsUpdated: false,
        })
      : this.setState({
          petsUpdated: true,
        });
  };

  render() {
    return (
      <Box
        sx={{
          bgcolor: "#b799ff",
          height: "100vh",
          textAlign: "center",
        }}
      >
        <Container
          sx={{
            maxWidth: {
              lg: "1600px",
            },
            bgcolor: "#B799FF",
          }}
        >
          <Box sx={{ bgcolor: "#B799FF", height: "40px" }}></Box>
          <AddPet onPetsUpdate={this.onPetsUpdate} />
          <PetsList
            petsUpdated={this.state.petsUpdated}
            onPetsUpdate={this.onPetsUpdate}
          />
        </Container>
      </Box>
    );
  }
}

export default App;
