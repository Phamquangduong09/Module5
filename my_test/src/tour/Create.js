import {useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import * as Yup from "yup";

export default function Create() {
    const [student, setStudent] = useState([])
    const navigate = useNavigate()
    const validation = Yup.object({
        name: Yup.string().required("Please enter name").matches(/[A-Za-z]/, "Name not contain number"),
        price: Yup.number().required("Please enter point").positive("Invalid input").min(0, "Min price is 0"),
        detail: Yup.string().required("Please enter description"),

    })


return (
    <>
        <h1 style={{textAlign: "center"}}>Create Student</h1>
        <hr/>
        <Formik initialValues={{
            name: "",
            price: "",
            detail: "",
        }} validationSchema={validation}
                onSubmit={(values) => {
                    axios.post('http://localhost:8080/api/tour', values).then(() => {
                        alert("Success <3")
                        navigate('/')
                    })
                }
                }>

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