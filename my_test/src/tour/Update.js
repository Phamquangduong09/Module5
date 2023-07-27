import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

export default function Update() {
    const {id} = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    const [initialValues, setInitialValues] = useState({
        name: "",
        price: "",
        detail: "",

    });
    const validation = Yup.object({
        name: Yup.string().required("Please enter name").matches(/[A-Za-z]/, "Name not contain number"),
        price: Yup.number().required("Please enter point").positive("Invalid input").min(0, "Min price is 0"),
        detail: Yup.string().required("Please enter description"),

    })

    useEffect(() => {
        axios.get(`http://localhost:8080/api/tour/${id}`).then((response) => {
            setInitialValues({
                name: response.data.name,
                price: response.data.price,
                detail: response.data.detail,
            });
            setLoading(false);
        });
    }, [id]);
    if (loading) {
        return <div>Loading...</div>
    }
    const updateSubmit = (values) => {
        axios.put(`http://localhost:8080/api/tour/${id}`, values).then(r => navigate('/'));
    }

    return (
        <>
            <h1 style={{textAlign: "center"}}>Update Student</h1>
            <hr/>
            <Formik initialValues={initialValues} validationSchema={validation} onSubmit={(values) => {updateSubmit(values)}}>
                <Form encType="multipart/form-data">
                    <div className="mb-3 row">
                        <label htmlFor="name" className="col-sm-2 col-form-label">
                            Name
                        </label>
                        <div className="col-sm-10">
                            <Field type="text" name="name" className="form-control"/>
                            <ErrorMessage name="name" component="div" className="text-danger"/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="price" className="col-sm-2 col-form-label">
                            Price
                        </label>
                        <div className="col-sm-10">
                            <Field type="number" name="price" className="form-control"/>
                            <ErrorMessage name="price" component="div" className="text-danger"/>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="detail" className="col-sm-2 col-form-label">
                            Detail
                        </label>
                        <div className="col-sm-10">
                            <Field type="text" name="detail" className="form-control"/>
                            <ErrorMessage name="detail" component="div" className="text-danger"/>
                        </div>
                    </div>
                    <Link to={"/"} className={"btn btn-secondary"}>
                        <i className="fas fa-book"></i>Hủy
                    </Link>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </Form>
            </Formik>

        </>
    )
}