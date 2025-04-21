import { useContext } from "react";

import { DataContext } from "@/contexts/DataContext";

export default function useDataContext() {
  return useContext(DataContext);
}
