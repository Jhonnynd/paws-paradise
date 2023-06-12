import React from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { addPet, generateId } from "../Utilities/utils";

class AddPet extends React.Component {
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
  handleChange(e, field) {
    this.setState({ [field]: e.target.value });
  }
  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = (e) => {
    this.props.onPetsUpdate();
    e.preventDefault();
    const generatedId = generateId();
    this.handleClose();

    addPet({
      id: generatedId,
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
    });
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
            p: "30px 190px",
          }}
          onClick={() => this.handleOpen()}
        >
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
              width: "800px",
              bgcolor: "#7DA5F3",
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
              />
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel required id="demo-simple-select-label">
                    Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={this.state.type}
                    label="Type"
                    onChange={(e) => this.handleChange(e, "type")}
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
              />
              <TextField
                required
                id="Age"
                label="Age"
                type="number"
                value={this.state.age}
                min="0"
                onChange={(e) => this.handleChange(e, "age")}
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
              />
              <Button
                variant="contained"
                color="primary"
                onClick={(e) => this.handleSubmit(e)}
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

export default AddPet;
