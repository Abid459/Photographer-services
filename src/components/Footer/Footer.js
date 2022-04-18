import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    console.log(year)
    return (
        <footer>
            This is footer {year}
        </footer>
    );
};

export default Footer;