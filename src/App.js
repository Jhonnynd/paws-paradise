import React from "react";
import { Box, Container } from "@mui/material";
import PetForm from "./Components/PetForm";
import PetsList from "./Components/PetsList";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      petsUpdated: false,
      selectedPet: null,
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

  onSelectPet = (pet) => {
    this.setState({
      selectedPet: pet,
    });
  };

  onEditPet = () => {
    this.setState({
      selectedPet: null,
    });
  };

  render() {
    return (
      <Box
        sx={{
          bgcolor: "#b799ff",
          height: "100%",
          minHeight: "100vh",
          textAlign: "center",
          pb: 3,
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
          <PetForm
            onPetsUpdate={this.onPetsUpdate}
            selectedPet={this.state.selectedPet}
            onEditPet={this.onEditPet}
          />
          <PetsList
            petsUpdated={this.state.petsUpdated}
            onPetsUpdate={this.onPetsUpdate}
            onSelectPet={this.onSelectPet}
          />
        </Container>
      </Box>
    );
  }
}

export default App;
