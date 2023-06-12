import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Box } from "@mui/material";
import dog from "../images/dog.png";
import cat from "../images/cat.png";
import { deletePet } from "../Utilities/utils";

class Pet extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDeletePet = (id) => {
    deletePet(id);
    this.props.onPetsUpdate()
  };

  render() {
    const { pet } = this.props;
    const { age, breed, id, comments, name, type } = pet;

    return (
      <>
        <Card
          sx={{
            width: "345px",
            height: "500px",
            display: "flex",
            bgcolor: "#7DA5F3",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ pt: "10px" }}
          >
            {/* Boggie */}
            {name}
          </Typography>
          <CardMedia
            component="img"
            height="194"
            image={type === "dog" ? dog : cat}
            alt="Paella dish"
          />
          <CardContent>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                }}
              >
                <Typography gutterBottom variant="h6" component="div">
                  Age:
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {age} years
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  gap: "0px",
                }}
              >
                <Typography gutterBottom variant="h6" component="div">
                  Breed:
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {breed}
                </Typography>
              </Box>
            </Box>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ pt: "5px" }}
            >
              {comments}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "flex-end" }}>
            <IconButton aria-label="Edit">
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="Delete"
              onClick={(id) => this.handleDeletePet(id)}
            >
              <DeleteIcon sx={{ color: "#bd271c" }} />
            </IconButton>
          </CardActions>
        </Card>
      </>
    );
  }
}

export default Pet;
