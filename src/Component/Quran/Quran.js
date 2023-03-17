import { Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addId } from "../../rtk/Slice/quranapiSlice";
import "./Quran.css";
function Quran() {

    setTimeout(()=>{
        document.querySelectorAll(".btns").forEach((e)=>{
            e.style.transform = "scale3d(1, 1, 1)"
        })
    },300)

    const dispatch = useDispatch()

    return (
        <div className="quran">
            <Container>
                <div className="quranContent">
                    <div className="popHome"></div>
                    <div className="generalDesc">
                        <h2 className="titleComponent">القرآن الكريم</h2>
                        <div className="form">
                            <Link to="/quranReading" className=" btns" >
                                القرآن قراءة
                            </Link>
                            <Link to="/readers" className=" btns">
                                القرآن صوتي
                            </Link>
                            <Link to="/ayatAlsujud" className=" btns">
                                آيات السجود
                            </Link>
                            <Link className="radioButton btns" onClick={()=>{
                                document.querySelector(".audioComponent .app-container").style.transform = "translateX(00%)"
                                dispatch(addId(1))
                            }}> 
                                راديو قرآني
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Quran;
