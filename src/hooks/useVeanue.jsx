import { useContext } from "react";
import { VeanueContext } from '../contexts/VeanueContext'

export default function useVeanue() {
    return useContext(VeanueContext)
}