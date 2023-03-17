import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addId, audioName } from "../../../rtk/Slice/quranapiSlice";
import { newAudio, QuranAudioJson } from "../../JSON/QuranAudioJson";
import "./QuranAudio.css";

function QuranAudio() {
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
                    <h2>أسماء القرّاء</h2>
                    <div className="form">
                        <Form.Group className="mb-3">
                            <Form.Control
                                id=""
                                placeholder="أدخل اسم القارئ..."
                                onChange={(e) => setNameReader(e.target.value)}
                            />
                            <ul className="nameSura">
                                {newAudio.map((names) =>
                                    names.name.includes(nameReader) &&
                                    nameReader !== "" ? (
                                        <Link
                                            to="/quranAudioSura"
                                            className="sura"
                                            key={names.id}
                                            onClick={() => dispatch(audioName(names))}
                                        >
                                            الشيخ القارئ {names.name}{" "}
                                        </Link>
                                    ) : (
                                        ""
                                    )
                                )}
                            </ul>
                        </Form.Group>
                        <div className="position-absolute">
                            <Link to="/readers" className="return">
                                <FaArrowRight />
                            </Link>
                        </div>
                        {newAudio.map((audio) => (
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
    );
}
export default QuranAudio;
