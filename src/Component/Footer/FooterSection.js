import {
    FaEnvelope,
    FaFacebook,
    FaGoogle,
    FaHome,
    FaInstagram,
    FaPhone,
    FaTwitter,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import './FooterSection.css'
function handleScroll(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
    document.querySelector(".par").classList.remove("span")
}
function FooterSection() {
    return (
        <>
            <div className="bg-dark footer">
                <footer className="text-center text-lg-start text-white">

                    <div className="container p-4 pb-0">
                        <section className="">
                            <div className="row">
                                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">
                                        موعظة
                                    </h6>
                                    <p>
                                        موقع موعظة، موقع إسلامي يطمح القائمين عليه أن يكون احد أهم
                                        المواقع.
                                    </p>
                                </div>

                                <hr className="w-100 clearfix d-md-none" />

                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">---- </h6>
                                    <p><NavLink onClick={()=>handleScroll()} className="a" to="/">الصفحة الرئيسية</NavLink></p>
                                    <p><NavLink onClick={()=>handleScroll()} className="a" to="/quran">قرآن</NavLink></p>
                                    <p><NavLink onClick={()=>handleScroll()} className="a" to="/hadith">أحاديث</NavLink></p>
                                    <p><NavLink onClick={()=>handleScroll()} className="a" to="/athkar">أذكاري</NavLink></p>
                                </div>

                                <hr className="w-100 clearfix d-md-none" />

                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 link-social">
                                    <h6 className="text-uppercase mb-4 font-weight-bold"> تواصل معنا</h6>
                                    <a className="a" href="">فلسطين-غزة <FaHome /></a>
                                    <a className="a" href="mailto:mohhamabd18@gmail.com" target="_blank">mohhamabd18@gmail.com <FaEnvelope /> </a>
                                    <a className="a" href="" target="_blank">+972 592 604-4393 <FaPhone /> </a>
                                </div>

                                <hr className="w-100 clearfix d-md-none" />

                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto my-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">تابعنا</h6>
                                    <a
                                        target="_blank"
                                        className="btn btn-primary btn-floating m-1"
                                        href="https://www.facebook.com/profile.php?id=100031090193406">
                                        <FaFacebook /></a>
                                    <a
                                        target="_blank"
                                        className="btn btn-primary btn-floating m-1"
                                        href="https://twitter.com/Mohamme59058331">
                                        <FaTwitter /></a>
                                    <a
                                        target="_blank"
                                        className="btn btn-primary btn-floating m-1"
                                        href="https://www.instagram.com/m7mad.abd19/">
                                        <FaInstagram /></a>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className='text-center p-3 foterEnd' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        © 2023 maweiza:
                        <a to="" className="foterEnd" href='http://localhost:3000/'>
                            maweiza.com
                        </a>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default FooterSection;
