import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    console.log(year)
    return (
        <footer>
           © Wild View {year}
        </footer>
    );
};

export default Footer;