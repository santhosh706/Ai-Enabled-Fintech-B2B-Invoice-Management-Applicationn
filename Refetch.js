import React from 'react';
import { Button } from "@material-ui/core";
import './style.css';
import refetch from './RefreshSymbol.png'

const fetch = () => {
    window.location.reload(false);
}
export default function Refetch(){
    return(
        <Button onClick={() => fetch()} variant="outlined" id="reloading" size="medium"><img src={refetch} id='refetchimg'/></Button>
    )

} 