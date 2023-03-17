import { useState } from "react";
import { Container } from "react-bootstrap";
import { FaArrowRight, FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { athkar } from "../../JSON/athkar";
import "./AthkarShow.css"
function AthkarShow() {
    const [eys, setEys] = useState(true)
    const { id } = useParams()
    setTimeout(() => {
        document.querySelectorAll(".sura").forEach((e) => {
            e.style.transform = "scale3d(1, 1, 1)"
        })
    }, 300)
    function handleEyes() {
        document.querySelector(".popAll").classList.toggle("popActive")
        setEys(!eys)
    }
    return (
        <div className="athkar">
            <Container>
                <div className="quranContent">
                    <div className="generalDesc">
                        <h2 className="titleComponent">
                            {athkar[id - 1].title}
                        </h2>
                        <div className="allAyat">
                            <div className="position-absolute">
                                <Link to="/athkar" className="return">
                                    <FaArrowRight />
                                </Link>
                            </div>
                            {athkar[id - 1].audio !== undefined ? <p className="sura AudioAthkar" key={athkar[id - 1].id} onClick={() => {
                                document.querySelector(".athkar .popAll").style.transform = "translateX(0%)"
                                document.querySelector("iframe").src = athkar[id - 1].audio
                            }}>الإستماع إلى {athkar[id - 1].title}</p>
                                : ""}
                            {athkar[id - 1].content.map(e => (
                                e.category !== undefined ? <p className="sura zekr" key={e.zekr}>
                                    {e.zekr}
                                    <span>{e.category}</span>
                                </p>
                                    : <p className="sura" key={e.zekr}>
                                        {e.zekr}
                                    </p>
                            ))}
                            {
                                athkar[id - 1].audio !== undefined ? <div className="radioComponent">
                                    <div className="popAll">
                                        <div className="playerAudio">
                                            <FaTimes className="closeRadio" onClick={() => {
                                                document.querySelector(".athkar .popAll").style.transform = "translateX(100%)"
                                                document.querySelector("iframe").src = ""
                                            }
                                            } />
                                        </div>
                                        <iframe className="AudioAthkar" src={athkar[id - 1].audio} />
                                    </div>
                                </div>
                                    : ""
                            }

                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default AthkarShow;