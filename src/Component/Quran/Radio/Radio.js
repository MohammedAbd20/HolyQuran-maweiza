import {  useState } from "react"
import {  FaEye, FaEyeSlash, FaMinus, FaPlus, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RadioJson } from "../../JSON/radioJson";
import './Radio.css'

function Radio() {

    const radioId = useSelector(state => state.quran)
    const [numberAudio, setNumberAudio] = useState(1)
    const [eys, setEys] = useState(true)

    function handleEyes() {
        eys == true ? document.querySelector(".audioComponent .app-container").style.transform = "translateX(92%)" :
            document.querySelector(".audioComponent .app-container").style.transform = "translateX(0%)"
        setEys(!eys)
    }
    // console.log(radioId.addId.length);
    return (
        <div className="audioComponent">
            <div className="app-container">
                <div className="icon">
                    <FaTimes className="closeRadio" onClick={() => {
                        document.querySelector(".audioComponent .app-container").style.transform = "translateX(100%)"
                        document.querySelector(".RadioNotAudio").src = ""
                        setEys(true)
                    }
                    } />
                    {eys == true ? <FaEyeSlash className="HideRadio" onClick={handleEyes} /> :
                        <FaEye className="HideRadio" onClick={handleEyes} />
                    }
                    <FaPlus onClick={() => numberAudio < 132 ? setNumberAudio(numberAudio + 1) : setNumberAudio(numberAudio)} />
                    <FaMinus onClick={() => numberAudio > 0 ? setNumberAudio(numberAudio - 1) : setNumberAudio(numberAudio)} />
                </div>
                <div>
                    <p>{`${RadioJson.radios[numberAudio].name}`}</p>
                    {radioId.addId.length > 0 ? <iframe className="RadioNotAudio" src={`${RadioJson.radios[numberAudio].url}`} /> :
                        <iframe className="RadioNotAudio" src="https://Qurango.net/radio/alzain_mohammad_ahmad" />
                    }

                </div>

            </div>
        </div>
    )
}

export default Radio