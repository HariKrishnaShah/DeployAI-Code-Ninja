
import React, { useContext, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth';
import Navbarrr from './Navbar';
import Spinner from './Spinner';

export default function Layout() {
    const { auth } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(false);
    }, [auth]);

    if (loading) {
        return <Spinner />;
    }

    if (!localStorage.getItem("auth")) {
        navigate('/login', { state: { from: location.pathname } });
        return null; // Redirecting to login, so return nothing for now
    }

    return (
        <div>
            <Navbarrr />
            <Outlet />
        </div>
    );
}
