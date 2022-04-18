import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Route, Routes } from 'react-router-dom';
import auth from '../../firebase.init';
import About from '../About/About';

import Blogs from '../Blogs/Blogs';
import Checkout from '../Checkout/Checkout';
import Home from '../Home/Home';
import LogIn from '../LogIn/LogIn';
import NotFound from '../NotFound/NotFound';
import RequireAuth from '../RequireAuth/RequireAuth';
import SignUp from '../SignUp/SignUp';

const Header = () => {
    const [user] = useAuthState(auth)


    //elements
    const logOut =<>
        <span style={{cursor:'pointer'}} onClick={()=>signOut(auth)}>Log Out</span>
    </>
    const signIN = <NavLink to={'/login'} className={({ isActive }) => isActive ? 'active-nav' : 'nav'}>Log In</NavLink>
    return (
        <header>
            <nav className='navbar'>
                <NavLink to={'/'} className={({ isActive }) => isActive ? 'active-nav' : 'nav'}>Home</NavLink>
                <NavLink to={'/checkout'} className={({ isActive }) => isActive ? 'active-nav' : 'nav'}>Checkout</NavLink>
                <NavLink to={'/blogs'} className={({ isActive }) => isActive ? 'active-nav' : 'nav'}>Blog</NavLink>
                <NavLink to={'/about'} className={({ isActive }) => isActive ? 'active-nav' : 'nav'}>About</NavLink>

                {
                    user? logOut:signIN
                }
            </nav>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/home' element={<Home></Home>}></Route>
                <Route path='/checkout' element={
                    <RequireAuth>
                        <Checkout></Checkout>
                    </RequireAuth>
                }></Route>
                <Route path='/blog' element={<Blogs></Blogs>}></Route>
                <Route path='/about' element={<About></About>}></Route>
                <Route path='/login' element={<LogIn></LogIn>}></Route>
                <Route path='/signup' element={<SignUp></SignUp>}></Route>
                <Route path='*' element={<NotFound></NotFound>}></Route>
            </Routes>
        </header>
    );
};

export default Header;