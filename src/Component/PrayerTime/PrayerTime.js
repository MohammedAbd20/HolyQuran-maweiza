import { Container } from "react-bootstrap";
import './PrayerTime.css'

function PrayerTime() {

    // fetch("http://api.aladhan.com/v1/timingsByAddress?address=Regents Park Mosque, gaza")
    // .then(res => res.json())
    // .then(data => console.log(data.data))
    setInterval(() => {
        let now = new Date();
        // console.log(now.toLocaleTimeString())
        let clockState = now.toLocaleDateString();
        let date = now.toLocaleTimeString();
        if(document.querySelector(".dateAndDay") !==null){
            document.querySelector(".dateAndDay").innerHTML = `
            <div class="day">
                <p>اليوم : الأربعاء</p>
            </div>
            <div class="day">
                <p>التاريخ : ${now.toLocaleDateString()}</p>
            </div>
            <div class="day">
                <p>الساعة : ${now.toLocaleTimeString()}</p>
            </div>
        `
        }
    }, 500);
    return (
        <div className="Hadith">
            <Container>
                <div className="PrayerContent">
                    <div className="generalDesc">
                        <h2 className="titleComponent">أوقات الصلاة</h2>
                    </div>
                    <div className="dateAndDay">
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default PrayerTime;