import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaAngleLeft, FaBeer } from 'react-icons/fa';
import './Home.css'
import ContactUs from '../Contact/ContactUs';
import { RadioJson } from '../JSON/radioJson';

function Home() {
    window.addEventListener('scroll', () => {
        if (document.querySelector(".contact-box") !== null) {
            if (window.scrollY > 350) {
                document.querySelector(".contact-box").style.transform = "scale3d(1, 1, 1)";
            } else {
                // document.querySelector(".contact-box").style.transform = "scale3d(0, 0, 0)";
            }
        }
    });
    setTimeout(()=>{
        document.querySelectorAll(".btns, h2").forEach((e)=>{
            e.style.transform = "scale3d(1, 1, 1)"
        })
    },300)
    return (
        <div className='contact-home'>
            <div className="home">
                <Container>
                    <div className="containHome">
                        <div className="popHome"></div>
                        <div className="desc">
                            <h2>مرحبا بك في<br /><br />موقع الموعظة الإسلامي</h2>
                            <div className='button'>
                                <Link to="/quran" className="btns">
                                    إبدأ التصفح
                                    <FaAngleLeft />
                                </Link>
                                {/* <Link href="" className="btns">
                                    ماذا
                                    <FaAngleLeft />
                                </Link> */}
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <ContactUs />
        </div>
    )
}

export default Home