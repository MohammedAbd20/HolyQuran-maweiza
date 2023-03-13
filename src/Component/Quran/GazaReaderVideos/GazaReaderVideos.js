import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import { gazaReaderVideosJson } from "../../JSON/gazaReaderVideosJson";
import "./GazaReaderVideos.css"

function GazaReaderVideos() {
    // function handlScrean(){
    //     document.querySelector(".popVideo").classList.add("popVideoActive")
    // }
    return (
        <div className="gazaReaderVideos">
            <Container>
                <div className="generalDesc">
                    <h2>مرئيات لقرّاء غزة</h2>
                    <div className="cardReader">
                        <div className="position-absolute">
                            <Link to="/readers" className="return">
                                <FaArrowRight />
                            </Link>
                        </div>
                        <div className="card-box">
                            {gazaReaderVideosJson.map((readerGaza) => (
                                <Card style={{ width: '18rem' }} key={readerGaza.id}>
                                    <iframe src={readerGaza.src} />
                                    <Card.Body>
                                        <Card.Title>القارئ {readerGaza.name}</Card.Title>
                                        <Card.Text>
                                            {readerGaza.desc}
                                        </Card.Text>
                                        {/* <Button variant="primary" onClick={()=>handlScrean()}>شاشة كاملة</Button> */}
                                    </Card.Body>
                                </Card>
                            ))}
                            {/* <p className="popVideo">
                                <span className="icon" onClick={()=>document.querySelector(".popVideo").classList.remove("popVideoActive")}><FaTimes/></span>
                                <iframe src="https://www.youtube-nocookie.com/embed/Z23tL0hNfjM"/>
                            </p> */}
                        </div>

                    </div>
                </div>
            </Container>
        </div>
    )
}

export default GazaReaderVideos;