import { memo } from "react"
import "./style.scss"
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { LiaGooglePlus } from "react-icons/lia";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="footer__about">
                            <div className="footer__about__logo">
                                <h1>Uy tín shop</h1>
                                <ul>
                                    <li>Location</li>
                                    <li>Phone</li>
                                    <li>Email</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="footer_about_shop">
                            <h3>Cửa hàng</h3>
                            <ul>
                                <li>Liên hệ</li>
                                <li>Thông tin</li>
                                <li>Sản phẩm</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="footer__about__users">
                            <ul>
                                <li>Thông tin tài khoản</li>
                                <li>Giỏ hàng</li>
                                <li>Danh sách ưu thích</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="footer__about__information">
                            <h3>Khuyến mãi & ưu đãi</h3>
                            <ul>
                                <li>Liên hệ</li>
                                <input type="text" placeholder="Nhập thông tin ở đây..." />
                                <button>Đăng ký</button>
                                <div className="footer__widget__sosial">
                                    <li><Link to={""}><IoLogoFacebook /></Link> </li>
                                    <li><Link to={""}><IoLogoInstagram /></Link> </li>
                                    <li><Link to={""}><FaTwitter /></Link> </li>
                                    <li><Link to={""}><LiaGooglePlus /></Link> </li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default memo(Footer); 