import { useContext } from "react";
import { LoadinContext } from "../contexts/LoadingContaxt";

export default function useLoading() {
    return useContext(LoadinContext)
}
