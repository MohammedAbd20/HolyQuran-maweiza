import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { FaArrowUp } from "react-icons/fa";
import './ScrollTop.css'



function ScrollTop(){
    // const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                document.querySelector(".scroll").style.bottom = "7%";
                // setShowTopBtn(true);
            } else {
                document.querySelector(".scroll").style.bottom = "-20%";
                // setShowTopBtn(false);
            }
            
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return(
        <div className="scroll" onClick={goToTop}>
            <Container>
                <p className="scroll-top">
                    <FaArrowUp/>
                </p>
            </Container>
        </div>
    )
}
export default ScrollTop