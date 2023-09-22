import { GridColDef } from "@mui/x-data-grid";
export const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "symbol",
    headerName: "Symbol",
    width: 150,
  },
  {
    field: "name",
    headerName: "Name",
    width: 200,
  },
  {
    field: "buyingIRL",
    headerName: "Buying with cash or Check",
    type: "number",
    width: 200,
  },
  {
    field: "buyingBanking",
    headerName: "Buying by bank's transfer",
    type: "number",
    width: 200,
    // valueGetter: (params: GridValueGetterParams) =>
    //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "selling",
    headerName: "Selling",
    type: "number",
    width: 200,
  },
];

export interface ICurrency {
  id: string;
  symbol: string;
  name: string;
  buyingIRL: string;
  buyingBanking: string;
  selling: string;
}
