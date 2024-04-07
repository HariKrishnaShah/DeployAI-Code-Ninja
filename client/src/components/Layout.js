
import React, { useContext, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Navbarrr from './Navbar';

export default function Layout() {


    return (
        <div>
            <Navbarrr />
            <Outlet />
        </div>
    );
}
