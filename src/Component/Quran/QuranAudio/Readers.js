import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addId, audioName } from "../../../rtk/Slice/quranapiSlice";
import { newAudio, QuranAudioJson } from "../../JSON/QuranAudioJson";
import "./QuranAudio.css";

function Readers() {
    setTimeout(() => {
        document.querySelectorAll(".sura").forEach((e) => {
            e.style.transform = "scale3d(1, 1, 1)";
        });
    }, 300);
    const dispatch = useDispatch();
    // console.log(newAudio);
    const [nameReader, setNameReader] = useState("");
    return (
        <div className="quran-audio">
            <Container>
                <div className="generalDesc">
                    <h2>القرّاء</h2>
                    <div className="form">
                        <div className="position-absolute">
                            <Link to="/quran" className="return">
                                <FaArrowRight />
                            </Link>
                        </div>
                            <Link to="/quranAudio" className="sura" >جميع القرآء</Link>
                            <Link to="/readerGaza" className="sura" >قرّاء غزة</Link>
                            <Link to="/gazaReaderVideos" className="sura" >مقاطع مرئية لقراء غزة</Link>
                    </div>
                </div>
            </Container>
        </div>
    );
}
export default Readers;
