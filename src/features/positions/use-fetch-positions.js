import { useEffect } from "react";
import { useDispatch} from "react-redux";
import data from  '../../mock/data.json';
import {addPositions} from "./positions-slice";

export const useFetchPositions = ()=>{
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch (addPositions(data));
     },[dispatch]);
}