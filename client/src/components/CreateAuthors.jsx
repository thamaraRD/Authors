import React from 'react';
import styles from './CreateAuthors.module.scss'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';

const CreateAuthors = () =>{
    const SignupSchema = Yup.object().shape({
        name: Yup.string()
        .min(3, 'El nombre no puede tener menos de 3 caracteres')
        .required('Debe ingresar un nombre'),
        quotes: Yup.string()
        .min(3, 'Debe ingresar una cita')
        .required('Debe escribir una cita del autor')
    });
    const create = async (values) => {
        try{
            const response = await axios.post('http://localhost:8000/api/authors', values)
            console.log(response.data);
            Swal.fire({
                title: 'Guardado con exíto',
                text: 'El autor se ha guardado con exíto',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
        }
        catch(error){
            console.log(error.response.data.error.message);
            Swal.fire({
                title: 'Error!',
                text: error.response.data.error.message,
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }
    }

    return(
    <>
        <h1>Autores</h1>
        <div className={styles.card}>
        <Formik
    initialValues={{
        name: '',
        quotes: ''
    }}
    validationSchema={SignupSchema}
    onSubmit={create}
    >
    {({ errors, touched }) => (
        <Form>
            <label className="color-letters" htmlFor="name">Nombre del Autor</label>
        <Field name="name" />
        {<errors className="name"></errors> && touched.name ? (
            <div className={styles.errors}>{errors.name}</div>
        ) : null}
        <label className="color-letters" htmlFor="quotes">Quotes:</label>
        <Field name="quotes" />
        {errors.quotes && touched.quotes ? (
            <div className={styles.errors}>{errors.quotes}</div>
        ) : null}
        <button type="submit">Crear</button>
        </Form>
    )}
    </Formik>
    </div>
    </> 
    )
}
export default CreateAuthors;
