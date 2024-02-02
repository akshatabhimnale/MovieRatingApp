import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FormGroup, Stack, Typography } from "@mui/material";

export default function AddMovie() {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    movie_name: "",
    movie_detail: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:4000/admin/api/add-movie",
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        // Handle success
        console.log("Form submitted successfully");
      } else {
        // Handle error
        console.error("Error submitting form");
      }
    } catch (error) {
      console.log(error);
    }
    setOpen(false);
  };
  // useEffect(() => {
  //   async function movieList() {
  //     const settings = { method: "get" };
  //     try {
  //       const dataFetched = await fetch(
  //         "http://localhost:4000/admin/api/movie-list",
  //         settings
  //       );
  //       setData(await dataFetched.json());
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   movieList();
  // }, []);
  // console.log(data);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="contained"
        style={{ backgroundColor: "black" }}
        onClick={handleClickOpen}
      >
        Add Movie
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());

            handleClose();
          },
        }}
      >
        <DialogContent sx={{ height: 325, width: 500 }}>
          <FormGroup style={{ flexDirection: "column" }}>
            <TextField
              id="movie_name"
              name="movie_name"
              label="Movie Name"
              variant="outlined"
              margin="normal"
              value={formData.movie_name}
              fullWidth
              onChange={(e) => {
                setFormData({ ...formData, movie_name: e.target.value });
              }}
            />
            <TextField
              id="movie_detail"
              name="movie_detail"
              label="Movie Details"
              variant="outlined"
              fullWidth
              multiline
              margin="normal"
              rows={4}
              value={formData.movie_detail}
              onChange={(e) => {
                setFormData({ ...formData, movie_detail: e.target.value });
              }}
            />
            <Typography marginTop={1}>Movie Poster</Typography>
            <input type="file" name="poster" />
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button>Add MOVIE</Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}
