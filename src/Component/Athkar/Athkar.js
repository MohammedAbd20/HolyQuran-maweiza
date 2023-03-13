import { useState } from "react";
import { Container, Form } from "react-bootstrap"
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom"
import { athkar } from "../JSON/athkar"
import './Athkar.css'

function Athkar() {
    setTimeout(() => {
        document.querySelectorAll(".sura").forEach((e) => {
            e.style.transform = "scale3d(1, 1, 1)";
        });
    }, 300);

    // console.log(athkar);
    const [nameReader, setNameReader] = useState("");
    return (
        <div className="athkar">
            <Container>
                <div className="quranContent">
                    {/* <div className="popHome"></div> */}
                    <div className="generalDesc">
                        <h2 className="titleComponent">الأذكار والأدعية</h2>
                        <div className="form">
                        <Form.Group className="mb-3">
                            <Form.Control
                                id=""
                                placeholder="أدخل اسم الدعاء..."
                                onChange={(e) => setNameReader(e.target.value)}
                            />
                            <ul className="nameSura">
                                {athkar.map((athkar) =>
                                    athkar.title.includes(nameReader) &&
                                    nameReader !== "" ? (
                                        <Link
                                            to={`/athkar/${athkar.id}`}
                                            className="sura"
                                            key={athkar.id}
                                        >
                                            {athkar.title}
                                        </Link>
                                    ) : (
                                        ""
                                    )
                                )}
                            </ul>
                        </Form.Group>
                            <div className="position-absolute">
                                <Link to="/"className="return">
                                    <FaArrowRight />
                                </Link>
                            </div>
                            {athkar.map((athkar) => (
                                <Link
                                    to={`/athkar/${athkar.id}`}
                                    className="sura"
                                    key={athkar.id}
                                >
                                    {athkar.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default Athkar