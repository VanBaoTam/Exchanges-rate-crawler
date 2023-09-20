import { DataGrid } from "@mui/x-data-grid";
import { Box } from "./mui-component";
import { columns, rows } from "@constants";

// -----------------------------------------------
function RateTable() {
  // -----------------------------------------------
  return (
    <Box sx={{ height: 400, width: "80%", margin: "auto" }}>
      <h1>Exchange's rate table</h1>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
export default RateTable;
