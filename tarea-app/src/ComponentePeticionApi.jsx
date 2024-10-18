import React, {  useEffect, useState } from 'react';

const ComponentePeticionApi = () => {
const [userData, setUserData] = useState(null);

useEffect(() => {
// Replace this URL with the actual API endpoint
const apiUrl = 'https://jsonplaceholder.typicode.com/users/1';

// Hacer la solicitud a la API
fetch(apiUrl)
.then(response => response.json())
.then(data => setUserData(data))
.catch(error => setError(error.message))
.finally(() => setLoading(false));
}, []);

return (
<div class="userInformation">
<h1 class="tituloUser">User Information</h1>
{userData ? (
<div>
<p>Name: {userData.name}</p>
<p>Email: {userData.email}</p>
<p>Phone: {userData.phone}</p>
{/* Add other properties as needed */}
</div>
) : (
<p>Loading...</p>
)}
</div>
);
};

export default ComponentePeticionApi;