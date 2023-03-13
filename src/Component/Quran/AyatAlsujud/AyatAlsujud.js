import { Container } from "react-bootstrap"
import { FaArrowRight, FaTimes } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { addColorToAyatAlsujud, suraIndix } from "../../../rtk/Slice/quranapiSlice"
import { athkar } from "../../JSON/athkar"
import { AyatAlsujudJson, suraName } from "../../JSON/sura"
import './AyatAlsujud.css'


function AyatAlsujud() {
    const dispatch = useDispatch()
    setTimeout(() => {
        document.querySelectorAll(".sura").forEach((e) => {
            e.style.transform = "scale3d(1, 1, 1)"
        })
    }, 300)
    return (
        <div className="ayatAlsujud">
            <Container>
                <div className="generalDesc">
                    <h2>آيات السجود</h2>
                    <div className="form">
                        <div className="position-absolute">
                            <Link to="/quran" className="return">
                                <FaArrowRight />
                            </Link>
                        </div>

                        <div className="allAyat">
                            {
                                suraName.map(sura => (
                                    sura.ayahs.map(ee => (
                                        ee.sajda ?
                                            <Link onClick={() => {
                                                dispatch(addColorToAyatAlsujud(ee.numberInSurah))
                                                dispatch(suraIndix(sura))
                                            }} className="sura" key={ee.number} to={`/pageReading/${sura.numberSura}`}>
                                                <span className="title">
                                                    <span>{sura.name}</span>
                                                    <span>الآية : {ee.numberInSurah}</span>
                                                </span>
                                                {ee.text}
                                            </Link> : ""
                                    ))
                                ))
                            }
                        </div>
                    </div>
                </div>
            </Container>
            {/* <div className="radioComponent">
                <div className="popAll">
                    <div className="playerAudio">
                        <FaTimes className="closeRadio" onClick={() => {
                            document.querySelector(".athkar .popAll").style.transform = "translateX(100%)"
                            document.querySelector("iframe").src = ""
                        }
                        } />
                    </div>
                    <iframe className="AudioAthkar" src={athkar[1].audio} />
                </div>
            </div> */}
        </div>
    )
}
export default AyatAlsujud