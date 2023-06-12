import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
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

  render() {
    const { pets } = this.state;
    const flattedPets = pets.flat();
    return (
      <>
        <Box
          sx={{
            p: 3,
            mt: "50px",
            height: "600px",
            bgcolor: "#ACBCFF",
            display: "flex",
            gap: "50px",
          }}
        >
          {/* <Pet />
          <Pet /> */}
          {flattedPets.map((pet) => {
            return (
              <Pet key={pet.id} pet={pet} onPetsUpdate={this.props.onPetsUpdate} />
            );
          })}
        </Box>
      </>
    );
  }
}

export default PetsList;
