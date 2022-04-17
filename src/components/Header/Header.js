import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from '../../../../../pactice/react/rout/src/components/Home/Home';
import Blogs from '../Blogs/Blogs';

const Header = () => {
    return (
        <header>
            <nav>
                <NavLink to={'/'} className={({isActive}) => isActive? 'active-nav' : 'nav'}>Home</NavLink>
                <NavLink to={'/home'} className={({isActive}) => isActive? 'active-nav' : 'nav'}>Home</NavLink>
                <NavLink to={'/blogs'} className={({isActive}) => isActive? 'active-nav' : 'nav'}>Blog</NavLink>
                <NavLink to={'/about'} className={({isActive}) => isActive? 'active-nav' : 'nav'}>About</NavLink>
            </nav>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/home' element={<Home></Home>}></Route>
                <Route path='/blog' element={<Blogs></Blogs>}></Route>
            </Routes>
        </header>
    );
};

export default Header;