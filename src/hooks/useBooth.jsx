import { useContext } from "react";
import { BoothContext } from "../contexts/BoothContext";

export default function useBooth() {
    return useContext(BoothContext)
}