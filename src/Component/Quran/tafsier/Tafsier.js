import { useEffect, useState } from "react"
import { Button, Container, Form } from "react-bootstrap"
import { FaArrowRight } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { addId } from "../../../rtk/Slice/quranapiSlice"
import { suraName } from "../../JSON/sura"
import { nameTafsier } from "../../JSON/tafsierJSON"
import "./Tafsier.css"


function Tafsier() {


    const [printss, setPrint] = useState(false)
    const [id, setId] = useState(1)
    const [indexSura, setIndexSura] = useState(1)
    const [lastIndexSura, setlastIndexSura] = useState(7)
    const [nameSuraTafsier, setNameSuraTafsier] = useState("")

    const dispatch = useDispatch()
    const handleTest = (e) => {
        if (e.target.value > 0) {
            setId(e.target.value)
        }
    }
    function handleSearchResult(e) {
        e.preventDefault()
        setPrint(true)
        document.querySelector(".countResule").style.transform = "scale3d(1,1,1)"
        document.querySelector(".resultSearch").style.transform = "scale3d(1,1,1)"
    }
    setTimeout(() => {
        document.querySelector(".apology").style.transform = "scale3d(1,1,1)"
    }, 600);
    return (
        <div className="tafsier">
            <Container>
                <div className="generalDesc">
                    <h2>الباحث القرآني</h2>
                    <div className="formSearch">
                        <div className="position-absolute"><Link to="/quran" className="return"><FaArrowRight /></Link></div>
                        <Form className="forms">
                            <Form.Group className="mb-3">
                                <Form.Control id="" placeholder="أدخل السورة..." onChange={(e) => setNameSuraTafsier(e.target.value)} />
                                <ul className="nameSura">
                                    {suraName.map((names) => (
                                        names.name.includes(nameSuraTafsier) && nameSuraTafsier !== "" ? <li className="item" key={names.index}
                                            onClick={() => {
                                                setIndexSura(names.index)
                                                setlastIndexSura(names.numberAya)
                                            }}>{names.name}</li>
                                            : ""
                                    ))}
                                </ul>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Select className="selected" onClick={(e) => handleTest(e)}>
                                    {/* <option value="search">البحث في السور ««</option> */}
                                    {nameTafsier.map((nameMofaser) =>
                                        nameMofaser.language == "ar" ?
                                            <option value={`${nameMofaser.id}`} key={nameMofaser.id}>{nameMofaser.name} «« </option>
                                            :
                                            ""
                                    )}
                                </Form.Select>
                            </Form.Group>
                            <button
                                className="btns w-100 py-4"
                                onClick={(e) => handleSearchResult(e)}
                            >
                                ابحث
                            </button>
                        </Form>
                    </div>
                    <div className="countResule py-4">
                        <p>تم العثور على 5 نتائج</p>
                    </div>
                    <div className="resultSearch">
                        {printss !== false ? (
                            // <p></p>
                            ""
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="apology">
                        <div className="textCenter">
                            <div className="position-absolute"><Link to="/quran" className="return"><FaArrowRight /></Link></div>
                            <p>نأسف، هذه الصفحة ما زالت قيد الإنشاء</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default Tafsier