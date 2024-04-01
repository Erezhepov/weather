import React from 'react';
import s from './Footer.module.scss'

const Footer = React.memo(() => {
    return (
        <footer className={s.footer}>
            <div className={'container'}>
                Footer
            </div>
        </footer>
    );
});

export default Footer;