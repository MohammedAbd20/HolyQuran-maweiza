import { useState } from "react"
import { Container } from "react-bootstrap"
import { FaTimes } from "react-icons/fa"
import "./Nota.css"


function Nota(){
    const [index,setIndex] = useState(0)
    const nota = [
        "لا حول ولا قوة إلا بالله",
        "إستغفروه عشرًا وسبّحوه عشرًا",
        "تارك الصلاة بالإجماع كافر",
        "إن لم تنهاكم صلاتكم عن الفواحش، فأي صلاة تصلون",
        "سبحان الله وبحمده عدد خلقه ورضا نفسه وزنة عرشه ومِداد كلمات",
        "اللّهم إنك عفوٌ كريمٌ تحب العفو فاعف عنّا",
        "لتكن خطاك في دروب الخير على رمل ندِيٍ لا يُسمع لها وقع لكن آثارها بيّنة",
        "ربنا لا تزغ قلوبنا بعد إذ هديتنا إنّكَ أنتَ الوهاب",
        "لا تزال الملائكة مَشغولة ببناء قصرك ما دام لسانك رطباً بذكر الله",
        "عذاب الهمّة عذب، وتعب الإنجاز راحة، وعرق العمل مِسك، فاغتنم عمراً ماله بديل",
        "ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار",
        "اللهم ارحم والدينا كما ربيانا صغارا، واعفو عنهم واغفر لهم وارحمهم واشرح اللهم صدورهم"
    ]
    setInterval(()=>{
        setIndex(Math.floor(Math.random() * 12))
    },59000)
    return(
        <div className="nota">

            <Container>
                <div className="notaText">
                    <p className="iconClose" onClick={()=>document.querySelector(".nota").style.transform = "translateX(100%)"}><FaTimes/></p>
                    <p>{nota[index]}</p>
                </div>
            </Container>

        </div>
    )
}
export default Nota