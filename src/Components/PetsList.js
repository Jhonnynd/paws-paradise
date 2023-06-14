import React from "react";
import { Box, Grid } from "@mui/material";
import Pet from "./Pet";
import { getListPets } from "../Utilities/utils";

class PetsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: [],
    };
  }
  componentDidMount() {
    this.setState({
      pets: getListPets(),
    });
  }
  componentDidUpdate(prevProps) {
    if (this.props.petsUpdated !== prevProps.petsUpdated) {
      this.setState({
        pets: getListPets(),
      });
    }
  }
  handleSelectPet = (pet) => {
    const { onSelectPet } = this.props;
    onSelectPet(pet);
  };

  render() {
    const { pets } = this.state;
    const flattedPets = pets.flat();
    return (
      <Box
        sx={{
          p: 3,
          mt: "50px",
          height: "100%",
          bgcolor: "#ACBCFF",
        }}
      >
        <Grid container spacing={5} justifyContent="center">
          {flattedPets.map((pet) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={pet.id}>
                <Pet
                  pet={pet}
                  onPetsUpdate={this.props.onPetsUpdate}
                  handleSelectPet={this.handleSelectPet}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    );
  }
}

export default PetsList;
