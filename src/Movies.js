import React from "react";
import "./Movies.css";
import Data from "./Data.json";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
//import StarIcon from "@mui/icons-material/Star";
import {
  Box,
  Button,
  CardActionArea,
  CardActions,
  Rating,
} from "@mui/material";
import { Container, Grid, Typography } from "@mui/material";

const Movies = () => {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={5} style={{ marginTop: "20px" }}>
          {Data.map((result, index) => (
            <Grid
              item
              xs={12}
              sm={12}
              ms={4}
              key={index}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                className="card"
                sx={{ maxWidth: 700, height: 300, borderRadius: 5 }}
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.57), rgba(10, 6, 13, 0.49)), url(${result.img})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  padding: "1px",
                  marginTop: "20px",
                  display: "flex",
                }}
              >
                <CardActionArea style={{ display: "flex" }}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={result.img}
                    alt="green iguana"
                    style={{ borderRadius: "10px" }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      style={{ color: "white", fontWeight: "bold" }}
                    >
                      {result.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{ color: "white" }}
                    >
                      {result.des}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                  }}
                >
                  <Button
                    disableElevation
                    variant="contained"
                    size="medium"
                    color="primary"
                    style={{ backgroundColor: "rgb(25,118,210)" }}
                  >
                    Rate this Movie
                  </Button>
                  <Box
                    sx={{
                      marginTop: 2,
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "whitesmoke",
                    }}
                  >
                    <Rating
                      name="hover-feedback"
                      value={value}
                      precision={0.5}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                      onChangeActive={(event, newHover) => {
                        setHover(newHover);
                      }}
                    />
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Movies;
