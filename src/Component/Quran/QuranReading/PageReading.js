import { useState } from "react";
import { Container } from "react-bootstrap";
import { FaArrowRight, FaEye, FaEyeSlash, FaMicrophone, FaMinus, FaPlus, FaRegSave, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { suraName } from "../../JSON/sura";
import Radio from "../Radio/Radio";

function PageReading() {
    
    setTimeout(() => {
        document.querySelector(".allSura").style.transform = "scale3d(1, 1, 1)"
    }, 350)
    setTimeout(() => {
        document.querySelectorAll(".textSura p").forEach((e) => {
            e.style.transform = "scaleY(1)"
        })
    }, 350 * 2)
    const infoAudio = useSelector(state => state.quran)
    const [fontSize, setFontSize] = useState(22)
    if (fontSize < 22) {
        setFontSize(22)
    } else if (fontSize > 45) {
        setFontSize(45)
    }
    // const [numberSuran, setNumberSura] = useState(1)
    const [numberAyaExtra, setNumberAyaExtra] = useState("000")
    const indexSura = infoAudio.suraIndex.length > 0 ? infoAudio.suraIndex[infoAudio.suraIndex.length - 1].index : '000'
    const indexSuraName = infoAudio.suraIndex.length > 0 ? infoAudio.suraIndex[infoAudio.suraIndex.length - 1].name : ''
    function handlNumberOfAya(suraTexts) {
        if (suraTexts.numberInSurah < 0) {
            // setNumberAyaExtra(`00${numberAya}`)
        } else if (suraTexts.numberInSurah < 10) {
            setNumberAyaExtra(`00${suraTexts.numberInSurah}`)
        }
        else if (suraTexts.numberInSurah < 100) {
            setNumberAyaExtra(`0${suraTexts.numberInSurah}`)
        } else {
            setNumberAyaExtra(`${suraTexts.numberInSurah}`)
        }
    }
    // suraName[id - 1].ayahs.map((suraTexts) => console.log(suraTexts))

    const { id } = useParams()
    const target = "﻿بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ"
    return (
        <div className="pageReading">
            <Container>
                <div className="allSura">
                    <div className="position-absolute">
                        <Link to="/quranReading" className="return"><FaArrowRight /></Link>
                    </div>
                    <input type="number" className="fontSize" placeholder="كبر حجم الخط في الآيات..." onChange={(e) => {
                        setFontSize(e.target.value)
                        document.querySelectorAll(".pageReading .allSura p").forEach((e) => {
                            e.style.fontSize = `${fontSize}px`
                        })
                    }} />
                    <div className="textSura">
                        <p className="nameSura">{suraName[id - 1].name}</p>
                        {suraName[id - 1].name == "التوبَة" || suraName[id - 1].name == "الفاتحة" ? "" : <p>{target}</p>}
                        {suraName[id - 1].ayahs.map((suraTexts) => (
                            suraName[id - 1].numberSura !== 1 ?
                                <p key={suraTexts.number} className={suraTexts.sajda != false ? "text activeColor" : "text"} ><span className="spanVoice"><FaMicrophone onClick={(e) => {
                                    e.target.classList.toggle("paragraphAudio")
                                    handlNumberOfAya(suraTexts)
                                    document.querySelector(".pageReading .app-container").style.transform = "translateX(0%)"
                                }} /></span> {suraTexts.text.replace("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ", "")} ({suraTexts.numberInSurah})</p>
                                :
                                <p key={suraTexts.number} className="text">
                                    <span><FaMicrophone className="spanVoice" onClick={(e) => {
                                        e.preventDefault()
                                        e.target.classList.toggle("paragraphAudio")
                                        handlNumberOfAya(suraTexts)
                                        document.querySelector(".pageReading .app-container").style.transform = "translateX(0%)"
                                    }} />
                                    </span> {suraTexts.text} ({suraTexts.numberInSurah})</p>
                        ))}
                        <p>صدق الله العظيم</p>
                    </div>
                    <p></p>
                </div>
            </Container>

            <div className="app-container">
                <div className="icon">
                    <FaTimes className="closeRadio" onClick={() => {
                        document.querySelector(".pageReading .app-container").style.transform = "translateX(100%)"
                        document.querySelector(".RadioNotAudio").src = ""
                    }
                    } />
                </div>
                <div>
                    <p>سورة {indexSuraName} الآية رقم {numberAyaExtra}</p>
                    <iframe className="RadioNotAudio" src={`https://verse.mp3quran.net/arabic/mishary_alafasy/128/${indexSura}${numberAyaExtra}.mp3`} />
                </div>

            </div>
        </div>
    )
}

export default PageReading;