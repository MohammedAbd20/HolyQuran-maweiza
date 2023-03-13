import { Container } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { audioName } from "../../../rtk/Slice/quranapiSlice";
import { readerGaza } from "../../JSON/QuranAudioJson";



function ReaderGaza() {
    setTimeout(() => {
        document.querySelectorAll(".sura").forEach((e) => {
            e.style.transform = "scale3d(1, 1, 1)";
        });
    }, 300);
    const dispatch = useDispatch()

    return (
        <div className="quran-audio">
            <Container>
                <div className="generalDesc">
                    <h2>قرّاء غزة</h2>
                    <div className="form">
                        <div className="position-absolute">
                            <Link to="/readers" className="return">
                                <FaArrowRight />
                            </Link>
                        </div>
                        {readerGaza.map((audio) => (
                            <Link
                                to="/quranAudioSura"
                                className="sura"
                                key={audio.id}
                                onClick={() => dispatch(audioName(audio))}
                            >
                                الشيخ القارئ {audio.name}{" "}
                            </Link>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ReaderGaza;