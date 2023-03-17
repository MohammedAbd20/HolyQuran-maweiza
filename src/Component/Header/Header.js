import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';

function Header() {
    function HandlNav(e) {
        // console.log(document.querySelector(".show").style);
        document.getElementsByClassName("navbar-collapse")[0].classList.remove("show")

    }
    return (
        <>
            <Navbar expand="lg">
                <Container>
                    <Link className='navbar-brand' to="/">
                        <span>
                            <p></p>
                            <img className='imgNav' src='https://i.scdn.co/image/ab67616d00001e026b604ad5482e8dae34a9a5ec' />
                        </span>
                        موعظة
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item" >
                                    <NavLink className="nav-link" onClick={HandlNav} to="/">الصفحة الرئيسية</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" onClick={HandlNav} to="/quran">قرآن</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" onClick={HandlNav} to="/hadith">أحاديث</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" onClick={HandlNav} to="/athkar">أذكاري</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" onClick={HandlNav} to="/contact">تواصل معنا</NavLink>
                                </li>
                            </ul>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;