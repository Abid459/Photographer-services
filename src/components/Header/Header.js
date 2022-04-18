import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import About from '../About/About';

import Blogs from '../Blogs/Blogs';
import Checkout from '../Checkout/Checkout';
import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';

const Header = () => {
    return (
        <header>
            <nav>
                <NavLink to={'/'} className={({isActive}) => isActive? 'active-nav' : 'nav'}>Home</NavLink>
                <NavLink to={'/checkout'} className={({isActive}) => isActive? 'active-nav' : 'nav'}>Checkout</NavLink>
                <NavLink to={'/blogs'} className={({isActive}) => isActive? 'active-nav' : 'nav'}>Blog</NavLink>
                <NavLink to={'/about'} className={({isActive}) => isActive? 'active-nav' : 'nav'}>About</NavLink>
            </nav>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/home' element={<Home></Home>}></Route>
                
                <Route path='/checkout' element={<Checkout></Checkout>}></Route>

                <Route path='/blog' element={<Blogs></Blogs>}></Route>
                <Route path='/about' element={<About></About>}></Route>
                <Route path='*' element={<NotFound></NotFound>}></Route>
            </Routes>
        </header>
    );
};

export default Header;