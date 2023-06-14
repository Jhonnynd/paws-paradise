import React from "react";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Select,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { addPet, generateId, editPet } from "../Utilities/utils";
import { Pets } from "@mui/icons-material";

class PetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      type: "",
      age: 0,
      name: "",
      comments: "",
      breed: "",
      open: false,
    };
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.selectedPet !== prevProps.selectedPet &&
      this.props.selectedPet !== null &&
      !this.state.open
    ) {
      this.setState({
        id: this.props.selectedPet.id,
        type: this.props.selectedPet.type,
        age: this.props.selectedPet.age,
        name: this.props.selectedPet.name,
        comments: this.props.selectedPet.comments,
        breed: this.props.selectedPet.breed,
        open: true,
      });
      this.props.onEditPet();
    }
  }

  handleChange(e, field) {
    this.setState({ [field]: e.target.value });
  }
  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({
      id: null,
      type: "",
      age: 0,
      name: "",
      comments: "",
      breed: "",
      open: false,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onPetsUpdate();

    if (this.handleInputs()) {
      addPet({
        id: generateId(),
        type: this.state.type,
        age: this.state.age,
        name: this.state.name,
        breed: this.state.breed,
        comments: this.state.comments,
      });
      this.setState({
        id: null,
        type: "",
        age: 0,
        name: "",
        breed: "",
        comments: "",
        open: false,
      });
    } else {
      alert("Please fill in all the information!");
    }
  };

  handleInputs = () => {
    if (
      this.state.type.length > 0 ||
      this.state.name.length > 0 ||
      this.state.breed.length > 0 ||
      this.state.comments.length > 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  handleEditPet = (e) => {
    e.preventDefault();
    if (this.handleInputs()) {
      editPet(this.state);
      this.setState({
        id: null,
        type: "",
        age: 0,
        name: "",
        breed: "",
        comments: "",
        open: false,
      });

      this.props.onPetsUpdate();
    }
  };

  render() {
    return (
      <Box
        sx={{
          bgcolor: "#AEE2FF",
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Modal */}
        <Button
          variant="contained"
          sx={{
            p: {
              xs: "30px 100px",
              md: "30px 190px",
            },
          }}
          onClick={() => this.handleOpen()}
        >
          <IconButton aria-label="Paw icon" sx={{ pr: 2 }}>
            <Pets />
          </IconButton>
          Add pet
        </Button>
        <Modal
          open={this.state.open}
          onClose={() => this.handleClose()}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: {
                sm: "80%",
                md: "800px",
              },
              bgcolor: "#b799ff",
              border: "2px solid #000",
              boxShadow: 24,
              p: 8,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "30px",
              }}
            >
              <TextField
                required
                id="Name"
                label="Name"
                value={this.state.name}
                onChange={(e) => this.handleChange(e, "name")}
                InputProps={{
                  style: { backgroundColor: "white" },
                }}
              />
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth sx={{ bgcolor: "white" }}>
                  <InputLabel required id="demo-simple-select-label">
                    Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={this.state.type}
                    label="Type"
                    onChange={(e) => this.handleChange(e, "type")}
                    InputProps={{
                      style: { backgroundColor: "white" },
                    }}
                  >
                    <MenuItem value="dog">Dog</MenuItem>
                    <MenuItem value="cat">Cat</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <TextField
                required
                id="Breed"
                label="Breed"
                value={this.state.breed}
                onChange={(e) => this.handleChange(e, "breed")}
                InputProps={{
                  style: { backgroundColor: "white" },
                }}
              />
              <TextField
                required
                id="Age"
                label="Age"
                type="number"
                value={this.state.age}
                min="0"
                onChange={(e) => this.handleChange(e, "age")}
                InputProps={{
                  style: { backgroundColor: "white" },
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  min: 0,
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                p: "30px 0 20px 0",
                gap: "20px",
              }}
            >
              <TextField
                id="Comments"
                label="Comments"
                value={this.state.comments}
                multiline
                rows={4}
                onChange={(e) => this.handleChange(e, "comments")}
                InputProps={{
                  style: { backgroundColor: "white" },
                }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={(e) => {
                  if (this.state.id !== null) {
                    this.handleEditPet(e);
                  } else {
                    this.handleSubmit(e);
                  }
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Modal>

        {/* Modal */}
      </Box>
    );
  }
}

export default PetForm;
