import Data from "./Data.json";
import React, { useEffect, useState } from "react";
import {
  DataGrid,
  GridToolbar,
  gridFilteredSortedRowIdsSelector,
  selectedGridRowsSelector,
} from "@mui/x-data-grid";
import {
  Box,
  Button,
  Paper,
  Stack,
  autocompleteClasses,
  colors,
} from "@mui/material";

const getSelectedRowsToExport = ({ apiRef }) => {
  const selectedRowIds = selectedGridRowsSelector(apiRef);
  if (selectedRowIds.size > 0) {
    return Array.from(selectedRowIds.keys());
  }

  return gridFilteredSortedRowIdsSelector(apiRef);
};

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "img",
    headerName: "Movie Image",
    width: 200,

    type: "image",
    renderCell: (params) => {
      return (
        <div>
          <img src={params.row.img} style={{ width: 150, borderRadius: 20 }} />
        </div>
      );
    },
  },
  { field: "title", headerName: "Movie name", width: 200 },
  { field: "des", headerName: "Description", width: 800 },
  {
    field: "rating",
    headerName: "Rating",
    type: "number",
    width: 90,
  },
];

//const rows = [{ id: 1, movieName: "Snow", description: "Jon", rating: 35 }];
const Dashboard = () => {
  const rows = [
    {
      id: 1,
      title: "Wonder-women",
      des: "Wonder Woman is an Amazon, a race of female warriors in Greek mythology. For the purpose of the Wonder Woman character,",
      img: "/img/wonder-women.png",
    },
    {
      id: 2,
      title: "Mortal-engine",
      des: "An American–New Zealand co-production, the film is set in a post-apocalyptic world where entire cities have been mounted",
      img: "/img/mortal-engine.jpg",
    },
    {
      id: 3,
      title: "Dracula",
      des: "Adaptation of Bram Stoker's classic vampire novel. Gary Oldman plays Dracula whose lonely soul is determined to reunite",
      img: "/img/Dracula-untold.jpg",
    },
    {
      id: 4,
      title: "Joker",
      des: "A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain. Arth",
      img: "/img/joker.jpg",
    },
    {
      id: 5,
      title: "Spider-Man",
      des: "Superhuman strength, agility, endurance, ability to stick to and climb walls and other surfaces, uses self-designed web-",
      img: "/img/spyderman.jpg",
    },
  ];
  return (
    <Box sx={{ marginTop: 7 }}>
      <Stack spacing={2} direction="row">
        <Button variant="contained" style={{ backgroundColor: "black" }}>
          Add Movie
        </Button>
      </Stack>
      <Paper elevation={3}>
        <div style={{ height: 1000, width: "100%" }}>
          <DataGrid
            style={{ marginTop: 10 }}
            rows={rows}
            columns={columns}
            /*initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}*/
            pageSizeOptions={[5, 10]}
            rowHeight={300}
            slots={{ toolbar: GridToolbar }}
            slotProps={{
              toolbar: {
                printOptions: { getRowsToExport: getSelectedRowsToExport },
              },
            }}
          />
        </div>
      </Paper>
    </Box>
  );
};

export default Dashboard;