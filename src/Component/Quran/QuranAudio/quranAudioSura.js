import { useState } from "react";
import { Form } from "react-bootstrap";
import { FaArrowRight, FaCaretLeft, FaCaretRight, FaEquals, FaEye, FaEyeSlash, FaPeopleCarry, FaPlay, FaStop, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { audioName } from "../../../rtk/Slice/quranapiSlice";
import { newAudio } from "../../JSON/QuranAudioJson";
import QuranReading from "../QuranReading/QuranReading";


function QuranAudioSura() {

    const [eys, setEys] = useState(true)
    const infoAudio = useSelector(state => state.quran)
    // console.log(newAudio);
    const lastIndexReader = infoAudio.audioName.length - 1;
    const lastIndexSura = infoAudio.suraIndex.length - 1;

    // console.log(infoAudio.audioName[lastIndexReader]);
    const indexReader = infoAudio.audioName[lastIndexReader] !== undefined ? infoAudio.audioName[lastIndexReader].moshaf[0].server : "https://server8.mp3quran.net/afs/"
    const nameReader = infoAudio.audioName[lastIndexReader] !== undefined ? infoAudio.audioName[lastIndexReader].name : "مشاري العفاسي"
    const indexSura = infoAudio.suraIndex[lastIndexSura] !== undefined ? infoAudio.suraIndex[lastIndexSura].index : "001"
    const nameSura = infoAudio.suraIndex[lastIndexSura] !== undefined ? infoAudio.suraIndex[lastIndexSura].name : "الفاتحة"
    // console.log(infoAudio.audioName[lastIndexReader]);


    function handleEyes() {
        document.querySelector(".popAll").classList.toggle("popActive")
        setEys(!eys)
    }
    return (
        <div className="QuranAudioSura">
            <QuranReading props={{ title: "القرآن صوتي", to: "readers" }} />
            <div className="radioComponent">
                <div className="popAll">
                        <div className="playerAudio">
                            {eys == true ? <FaEyeSlash className="closeAudio" onClick={handleEyes} /> :
                                <FaEye className="closeAudio" onClick={handleEyes} />
                            }
                            <p className="none">القارئ {nameReader}</p>
                            <p>سورة {nameSura}</p>
                        </div>
                    <iframe src={`${indexReader}${indexSura}.mp3`} />
                </div>
            </div>
        </div>
    )
}
export default QuranAudioSura;