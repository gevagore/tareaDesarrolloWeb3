// En el componente principal
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UserForm from './UserForm'
import UserList from './UserList'
import UserEdit from './UserEdit';
import UserDetails from './UserDetails';
import { UserProvider } from './context/UserContext';

const App = () => {
  
  const addUser = async newUser => {
    try {
      const response = await fetch(
        'https://67252f2ac39fedae05b42ae0.mockapi.io/Users',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newUser)
        }
      )
      if (response.ok) {
        const data = await response.json()
        setUsers([...users, data]) // Agregar el nuevo usuario al estado
      } else {
        console.error('Error al agregar usuario')
      }
    } catch (error) {
      console.error('Error en la solicitud: ', error)
    }
  }

  return (
    <>
      <UserProvider>
        <Router>
        <nav>
  <ul>
  <li><Link to="/">Home</Link></li>
  <li><Link to="/create">Crear Usuario</Link></li>
  
  </ul>
  </nav>
  <Routes>
    <Route path="/" element={<UserList />} />
    <Route path="/users/:id" element={<UserDetails />} />
    <Route path="/create" element={<UserForm addUser={addUser} />} />
    <Route path="/edit/:id" element={<UserEdit />} />
    {/*<Route path="/delete/:id" element={<UserDelete />} />*/}
  </Routes>
        </Router>
      </UserProvider>

    </>
  )
}

export default App;