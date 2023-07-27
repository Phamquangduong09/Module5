import {useParams} from "react-router";
import {useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Delete() {
    const {id} = useParams();
    const navigateDelete = useNavigate();

    useEffect(() => {
        axios.delete(`http://localhost:8080/api/tour/${id}`).then((res) => {
            navigateDelete("/")
        })
    },[])
}