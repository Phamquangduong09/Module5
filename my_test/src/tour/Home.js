import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";


export default function Home() {
    const [list, setList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/api/tour').then(data => {
            setList(data.data)
        })
    }, [])
    return (
        <>
            <h1>Danh Sách </h1>
            <div>
                <Link to={"/create"}>
                    <i className="fas fa-user-plus"></i> Create
                </Link>
            </div>
            <table className={`table table-hover`}>
                <thead>
                <tr>
                    <th>#</th>
                    <th> Tên</th>
                    <th> Giá</th>
                    <th> Lựa chọn</th>
                </tr>
                </thead>
                <tbody>
                {list.map((item, key) => {
                    return (
                        <tr key={key}>
                            <td>{item.id}</td>
                            <td><Link to={`/view/${item.id}`}>
                                {item.name}
                            </Link></td>
                            <td>{item.price}</td>
                            <th>
                                <Link to={`/update/${item.id}`}>
                                    <i className="fas fa-edit"></i>
                                </Link>
                            </th>
                            <td><Link to={`/delete/${item.id}`}>
                                <i className="fas fa-trash-alt"></i>
                            </Link></td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    )
}



