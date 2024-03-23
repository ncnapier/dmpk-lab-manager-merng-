import React from 'react';
import { useNavigate } from 'react-router-dom';

function LogOut() {
    localStorage.removeItem('authToken');
}


const LogoutButton = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        LogOut();
        navigate('/login');
        window.location.reload();
    };

    return (
        <div style={{ marginTop: "100px" }}>
            <button onClick={handleLogout}>Log Out</button>
        </div>
    );
};

export default LogoutButton;