import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <h1>@Travel</h1>
                <menu>
                    <span>About</span>
                </menu>
            </div>
        );
    }
}
export default Header;