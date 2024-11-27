import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
const UserDelete = () => {
const { id } = useParams();
const navigate = useNavigate();

const handleDelete = async () => {
    try {
        const response = await fetch(`https://67252f2ac39fedae05b42ae0.mockapi.io/Users/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            navigate('/');
        } else {
            console.error('Error al eliminar usuario');
        } 
        }   catch (error) {
            console.error('Error en la solicitud: ', error);
            }
}

return (
<div>
<h1>Eliminar Usuario</h1>
<p>¿Estás seguro de que deseas eliminar este usuario?</p>
<button onClick={handleDelete}>Sí, Eliminar</button>
</div>
);
};

export default UserDelete;