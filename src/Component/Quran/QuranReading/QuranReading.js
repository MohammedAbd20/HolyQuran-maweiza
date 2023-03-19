import { Container, Form } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import "./QuranReading.css";
import { Link } from "react-router-dom";
import { suraName, suraText } from "../../JSON/sura";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { suraIndix } from "../../../rtk/Slice/quranapiSlice";
import Select from 'react-select'
import { jsonHadith } from "../../JSON/jsonHadith";

function QuranReading(props) {
    const options = [
        { value: 'all', label: 'جميع السور' },
        { value: 'Medinan', label: 'السور المدنية' },
        { value: 'Meccan', label: 'السور المكية' }
    ]
    const [nameSura, setNameSura] = useState("")
    const [valueSura, setValueSura] = useState("all")
    const dispatch = useDispatch()
    setTimeout(() => {
        document.querySelectorAll(".sura").forEach((e) => {
            e.style.transform = "scale3d(1, 1, 1)"
        })
    }, 300)
    return (
        <div className="QuranReading">
            <Container>
                <div className="generalDesc">
                    <h2>{props.props.title}</h2>
                    <div className="form someForm">
                        <div className="position-absolute">
                            <Link to={`/${props.props.to}`} className="return">
                                <FaArrowRight />
                            </Link>
                            <Link to="/pageSura" className="return toPagesura">عرض الصفحات</Link>
                        </div>
                        <Form.Group className="mb-3 searchSura">
                            <Form.Control
                                id=""
                                placeholder="أدخل السورة..."
                                onChange={(e) => setNameSura(e.target.value)}
                            />
                            <ul className="nameSura">
                                {suraName.map((names) =>
                                    names.name.includes(nameSura) &&
                                        nameSura !== "" ? (
                                        <Link
                                            to={props.props.to == "readers" ? "" : `/pageReading/${names.index}`}
                                            className="sura suraSearch"
                                            key={names.index}
                                            onClick={() => {
                                                dispatch(suraIndix(names))
                                            }}
                                        >
                                            {names.name}
                                        </Link>
                                    ) : (
                                        ""
                                    )
                                )}
                            </ul>
                        </Form.Group>
                        <Select placeholder="جميع السور" options={options} className="selectSura" onChange={(item) => setValueSura(item.value)} />
                        {
                            suraName.map((sura) => (
                                valueSura == "all" ?
                                    <Link
                                        to={props.props.to == "readers" ? "" : `/pageReading/${sura.index}`}
                                        className="sura"
                                        key={sura.index}
                                        onClick={() => {
                                            dispatch(suraIndix(sura))
                                        }}
                                    >
                                        <p>{sura.name}</p>
                                    </Link>
                                    :
                                    sura.revelationType == valueSura ?
                                        <Link
                                            to={props.props.to == "quranAudio" ? "" : `/pageReading/${sura.index}`}
                                            className="sura"
                                            key={sura.index}
                                            onClick={() => {
                                                dispatch(suraIndix(sura))
                                            }}
                                        >
                                            <p>{sura.name}</p>
                                        </Link>
                                        : ""
                            ))
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default QuranReading;
