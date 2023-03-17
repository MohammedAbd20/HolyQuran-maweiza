import { useState } from "react";
import { Container } from "react-bootstrap";
import { FaArrowRight, FaCaretLeft, FaCaretRight, FaTimes, FaTimesCircle } from "react-icons/fa";
import { Link } from "react-router-dom";


function BageSura() {
    setTimeout(() => {
        document.querySelector(".allSura").style.transform = "scale3d(1, 1, 1)"
        document.querySelector(".allSura p").style.transform = "scale3d(1, 1, 1)"
    }, 350)
    const [numberBage, setNumbarBage] = useState(1)
    function setNumberBage() {
        // let src = document.querySelector(".img img").src
        console.log(numberBage);
    }
    setNumberBage()
    return (
        <div className="pageReading">
            <Container>
                <div className="allSura">
                    <div className="position-absolute">
                        <Link to="/quranReading" className="return"><FaArrowRight /></Link>
                    </div>
                    <div className="img">
                        <FaCaretRight className="right" onClick={() => numberBage > 1 ? setNumbarBage(numberBage - 1) : setNumbarBage(1)} />
                        {numberBage < 10 ? <img onClick={()=> document.querySelector(".SuraBage").classList.add("SuraBageActive")} src={`https://surahquran.com/img/pages-quran/page00${numberBage}.png`} /> : (numberBage < 100 ? <img src={`https://surahquran.com/img/pages-quran/page0${numberBage}.png`}onClick={()=> document.querySelector(".SuraBage").classList.add("SuraBageActive")} /> : <img src={`https://surahquran.com/img/pages-quran/page${numberBage}.png`} onClick={()=> document.querySelector(".SuraBage").classList.add("SuraBageActive")}/>)}
                        <FaCaretLeft className="left" onClick={() => numberBage < 604 ? setNumbarBage(numberBage + 1) : setNumbarBage(604)} />
                        <p>الصفحة {numberBage}</p>
                        <div className="SuraBage" >
                            <div className="closBageSura">
                                <FaTimes className="relarive" onClick={()=> document.querySelector(".SuraBage").classList.remove("SuraBageActive")} /></div>
                                {numberBage < 10 ? <img src={`https://surahquran.com/img/pages-quran/page00${numberBage}.png`} /> : (numberBage < 100 ? <img src={`https://surahquran.com/img/pages-quran/page0${numberBage}.png`} /> : <img src={`https://surahquran.com/img/pages-quran/page${numberBage}.png`} />)}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default BageSura;