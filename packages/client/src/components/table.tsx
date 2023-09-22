import { DataGrid } from "@mui/x-data-grid";
import { Box } from "./mui-component";
import { ICurrency, columns } from "@constants";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

// -----------------------------------------------
function RateTable() {
  const [rate, setRate] = useState<ICurrency[] | null>(null);
  const [notify, setNotify] = useState<string>("Loading...");
  const handleFetching = useCallback(async () => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_BASE_URL + import.meta.env.VITE_CURRENCY_PATH ||
          "http://localhost:8080/"
      );
      if (response.status !== 200) return;
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
    setTimeout(() => {
      if (rate)
        setNotify(
          "Service is disabled or offline right now, please try later!"
        );
    }, 20000);
  }, [handleFetching, rate]);

  // -----------------------------------------------
  return (
    <Box sx={{ height: "80%", width: "80%", margin: "auto" }}>
      <h1>Exchange's rate table (Base on VND)</h1>
      {rate ? (
        <DataGrid
          disableRowSelectionOnClick
          rows={rate}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection={false}
        />
      ) : (
        <h1>{notify}</h1>
      )}
    </Box>
  );
}
export default RateTable;
