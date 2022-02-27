import Loader from "../components/Loader";
import {useEffect} from "react";
import axios from "../utils/axios";
import { useLocation } from 'react-router-dom';

const Verify = () => {
    const search = useLocation().search;
    const id = new URLSearchParams(search).get('id');

    useEffect(() => {
        axios().post('main', {id}).then((response) => {
            sessionStorage.setItem("transactions", response.data);
            window.location.href="http://localhost:3000/type"
        })
    })

    return (
        <Loader value={"Verifying...."}></Loader>
    )
    ;
};

export default Verify;
