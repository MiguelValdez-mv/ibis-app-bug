import { useContext } from "react";
import { ManageThemeContext } from "@/contexts";

export const useTheme = () => useContext(ManageThemeContext);
