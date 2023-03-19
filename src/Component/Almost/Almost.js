
import './Almost.css'
import { FaTimes } from "react-icons/fa"


function Almost(){
    return(
            <div className='almost'>
                <div className="container">
                    <p className='par'>قريبًا: سيتم برمجة الموقع لتطبيقات الموبايل لتحميله وتسهيل استخدامه.
                        <span className="iconClose" onClick={()=>document.querySelector(".par").classList.add("span")}>
                            <FaTimes/>
                        </span>
                    </p>
                </div>
            </div>
    )
}

export default Almost;