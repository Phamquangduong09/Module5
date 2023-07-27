import {Link, unstable_useBlocker, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function View() {
    const {id} = useParams();
    const [tour, setTour] = useState({
        name: "",
        price: "",
        detail: "",
    })

    useEffect(() => {
        axios.get(`http://localhost:8080/api/tour/${id}`).then(data => {
            setTour(data.data)
        })
    }, [])
    return (
        <>
            <h1 style={{textAlign: "center"}}>Chi tiết tour</h1>
            <hr/>
            <table className="table" style={{margin: "auto", width: 600, textAlign: "center"}}>
                <tbody>
                <h3>Tên </h3>
                <p>{tour.name}</p>

                <h3>Giá</h3>
                <p>{tour.price}</p>


                <h3>Mô tả</h3>
                <p>{tour.detail}</p>
                <tr>
                    <th>
                        <Link to={`/update/${tour.id}`} className={"btn btn-secondary"}>
                            <i className="fas fa-edit"></i>
                        </Link>
                    </th>
                    <th>
                        <Link to={"/"} className={"btn btn-secondary"}>
                            <i className="fas fa-book"></i>
                        </Link>
                    </th>

                </tr>
                </tbody>
            </table>
        </>
    )
}