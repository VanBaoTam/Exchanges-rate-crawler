import { DataGrid } from "@mui/x-data-grid";
import { Box } from "./mui-component";
import { ICurrency, columns } from "@constants";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

// -----------------------------------------------
function RateTable() {
  const [rate, setRate] = useState<ICurrency[] | null>(null);
  const handleFetching = useCallback(async () => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_BASE_URL + import.meta.env.VITE_CURRENCY_PATH ||
          "http://localhost:8080/"
      );
      const responseData = response.data?.data;
      if (!responseData) return;
      const data: ICurrency[] = [];
      let counter = 1;
      for (let i = 0; i < responseData.length; i += 5) {
        const currencyValue = responseData.slice(i, i + 5);
        if (
          currencyValue[0] === "USD(1-2-5)" ||
          currencyValue[0] === "USD(10-20)"
        )
          continue;
        data.push({
          id: counter + "",
          symbol: currencyValue[0],
          name: currencyValue[1],
          buyingIRL: currencyValue[2],
          buyingBanking: currencyValue[3],
          selling: currencyValue[4],
        });
        counter++;
      }
      setRate(data);
    } catch (error) {
      console.error("Error:", error);
    }
  }, []);
  useEffect(() => {
    handleFetching();
  }, [handleFetching]);
  // -----------------------------------------------
  return (
    <Box sx={{ height: 400, width: "80%", margin: "auto" }}>
      <h1>Exchange's rate table (Base on VND)</h1>
      {rate ? (
        <DataGrid
          rows={rate}
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
      ) : (
        <h1>Loading...</h1>
      )}
    </Box>
  );
}
export default RateTable;
