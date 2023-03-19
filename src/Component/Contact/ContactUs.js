import { Container } from "react-bootstrap";
import { FaArrowLeft, FaInstagram, FaMailBulk, FaWhatsapp } from "react-icons/fa";
import './ContactUs.css'
function ContactUs() {
    setTimeout(() => {
        document.querySelector(".contact-box").style.transform = "scale3d(1, 1, 1)"
        document.querySelectorAll(".myPhoto").forEach(e => {
            e.style.transform = "scale3d(1, 1, 1)"
        });
    }, 300)
    return (
        <div className="contact-us">
            <Container>
                <div>
                    <div className="hadithContent">
                        <div className="generalDesc">
                            <h2 className="titleComponent">تواصل معنا</h2>
                        </div>
                        <div className="sectionPhoto">
                            <div className="myPhoto">
                                <div className="img">
                                    <p></p>
                                    <img src='image/photo3.jpg' />
                                </div>
                                <div className="textPhoto">
                                    <p>يمتلك محمد عبدالرحمن مهارات قوية في تصميم وبرمجة المواقع الإلكترونية باستخدام اللغات البرمجية المختلفة مثل HTML، CSS، JavaScript، وغيرها كما ويمكنه التعامل مع أحد أهم مكتبات JavaScript وهي react js.</p>
                                </div>
                            </div>
                            <div className="myPhoto">
                                <div className="textPhoto">
                                    <p>يعمل مبرمج المواقع على تحويل تصاميم المواقع الإلكترونية إلى رموز برمجية تفاعلية قابلة للتفاعل مع المستخدم، كما يعمل على تطوير وتحسين وظائف المواقع الإلكترونية بما في ذلك البحث والنماذج والدفع الإلكتروني وغيرها.</p>
                                </div>
                                <div className="img">
                                    <p></p>
                                    <img src='image/photo2.jpg' />
                                </div>
                            </div>
                            <div className="myPhoto">
                                <div className="img">
                                    <p></p>
                                    <img src='image/photo1.jfif' />
                                </div>
                                <div className="textPhoto">
                                    <p>ويتطلب عمل مبرمج المواقع المهارات التحليلية والإبداعية والتواصل الجيد، بالإضافة إلى القدرة على العمل الجماعي والتعلم المستمر لمواكبة التقنيات الجديدة وتحسين مهاراته في مجال تصميم وبرمجة المواقع.</p>
                                </div>
                            </div>
                        </div>
                        <div className="contact-box">
                            <div className="contact-content">
                                <h3 className="contact-title">تواصل معي</h3>

                                <div className="contact-info">
                                    <div className="contact-card">
                                        <FaMailBulk className="fa-icon-socail" />
                                        <h3 className="contact-card-title">إيميل</h3>
                                        <span className="contact-card-data">mohhamabd18@gmail.com</span>

                                        <a href="mailto:mohhamabd18@gmail.com" target="_blank" className="contact-button">
                                            تواصل معي <FaArrowLeft className="fa-icon" />
                                        </a>
                                    </div>

                                    <div className="contact-card">
                                        <FaWhatsapp className="fa-icon-socail" />
                                        <h3 className="contact-card-title">واتساب</h3>
                                        <span className="contact-card-data">+972 59-260-4393</span>

                                        <a href="http://wa.me/+972592604393" target="_blank" className="contact-button">
                                            تواصل معي <FaArrowLeft className="fa-icon" />
                                        </a>
                                    </div>

                                    <div className="contact-card">
                                        <FaInstagram className="fa-icon-socail" />
                                        <h3 className="contact-card-title">إنستجرام</h3>
                                        <span className="contact-card-data">@m7mad.abd19</span>

                                        <a href="https://www.instagram.com/m7mad.abd19/" target="_blank" className="contact-button">
                                            تواصل معي <FaArrowLeft className="fa-icon" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-content">
                                <h3 className="contact-title">أكتب لي ملاحظاتك</h3>

                                <form action="" className="contact-form">
                                    <div className="contact-form-div">
                                        <input type="text" placeholder="أدخل اسمك" className="contact-form-input" required />
                                    </div>

                                    <div className="contact-form-div">
                                        <input type="email" placeholder="أدخل الإيميل الخاص بك" className="contact-form-input" required />
                                    </div>

                                    <div className="contact-form-div contact-form-area">
                                        <textarea className="contact-form-input" name="" placeholder="أكتب ملاحظتك" id="" cols="30" rows="10"></textarea>
                                    </div>

                                    <button className="button">إرسال</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default ContactUs