import { useState } from "react";
import { Container } from "react-bootstrap";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { jsonHadith } from "../JSON/jsonHadith";
import "./Hadith.css";

function Hadith() {
    setTimeout(() => {
        document.querySelector(".boxTextHadith").style.transform = "scale3d(1, 1, 1)"
    }, 300)
    const [id, setId] = useState(0)
    const handleTest = (e) => {
        setId(e.target.value)
    }
    const [count, setCount] = useState(0)
    
    return (
        <div className="Hadith">
            <Container>
                <div className="hadithContent">
                    <div className="generalDesc">
                        <h2 className="titleComponent">أحاديث نبوية شريفة</h2>
                    </div>
                    <form>
                        <select className="selected form-select" onChange={(e) => handleTest(e)}>
                            {
                                jsonHadith.map((hadith) => (
                                    <option value={hadith.id} key={hadith.id}>{hadith.name}</option>
                                ))
                            }
                        </select>
                        <input className="selected form-select" type="number" onChange={(e) => e.target.value < jsonHadith[id].hadiths.length && e.target.value != '' ? setCount(e.target.value > 0 ? e.target.value - 1 : 0) : setCount(0)} />
                    </form>
                    <div className="boxTextHadith">
                        <div className="dec-inc">
                            <button className="btns inc" onClick={() => count < jsonHadith[id].hadiths.length - 1 ? setCount(count + 1) : setCount(0)}><FaCaretRight /></button>
                            <div className="counter">{+count + 1}/{jsonHadith[id].hadiths.length}</div>
                            <button className="btns dec" onClick={() => count > 0 ? setCount(count - 1) : setCount(0)}><FaCaretLeft /></button>
                        </div>
                        <div className="textHadith">
                            {jsonHadith[id].hadiths[count].text !== "" ? <p>{jsonHadith[id].hadiths[count].text}</p> : ""}

                            {jsonHadith[id].hadiths[count].grades !== undefined ? <p>{jsonHadith[id].hadiths[count].grades[0].grade}</p> : <p>صحيح</p>}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Hadith;
