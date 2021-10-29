import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import Swal from 'sweetalert2';

const AuthorList = () => {
    const [list, setList] = useState([]);

    const getAllAuthors = async () => {
        try{
            const authors = await axios.get('http://localhost:8000/api/authors');
            setList(authors.data.authors)
            console.log(authors);
        }catch(error){
        console.log(error);
    }
}
useEffect(() => {
    getAllAuthors(); 
}, []);

const deleteAuthor = async (id) =>{
    try{
        const response = await axios.delete(`http://localhost:8000/api/authors/delete/${id}`);
        getAllAuthors();
        console.log(response);
        Swal.fire({
            title: 'Autor borrado',
            text: 'Se ha borrado el autor satisfactoriamente',
            icon: 'success',
            confirmButtonText: 'Ok'
        })
    }catch(error){
    console.log(error);
    Swal.fire({
        title: 'Error!',
        text: 'Oops... Ha ocurrido algo',
        icon: 'error',
        confirmButtonText: 'Ok'
    })
}
}

    return(
        <div>
            <table>
                <tr>
                    <th>Autor</th>
                    <th>Acciones Disponibles</th>
                </tr>
                {list?.map(author =>(
                    <tr>
                        <td key={author._id}>{author.name}</td>
                        <td>

                        <Button variant="danger" onClick={() => deleteAuthor(author._id)}>Eliminar</Button>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    )
}
export default AuthorList;
