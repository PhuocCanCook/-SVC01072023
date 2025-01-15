import { memo } from "react"
import "./style.scss"

import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { LiaGooglePlus } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SiGmail } from "react-icons/si";
import { formater } from "utils/fomater";

const Header = () => {
    return (
        <div className="header__top">
            <div className="container">
                <div className="row">
                    <div className="col_6 header__top_left">
                        <ul>
                            <li><Link to={"https://workspace.google.com/intl/vi/gmail/"}><SiGmail /></Link></li>
                            <li> Kiepdoden@gmail.com</li>
                            <li>|</li>
                            <li>Miễn phí rau thơm từ {formater(500000)}</li>
                        </ul>

                    </div>
                    <div className="col_6 header__top_right" >
                        <ul >
                            <li>
                                <Link to={""}> <IoLogoFacebook /> </Link>
                            </li>
                            <li>
                                <Link to={""}><IoLogoInstagram /></Link>
                            </li>
                            <li>
                                <Link to={""}><FaTwitter /></Link>
                            </li>
                            <li>
                                <Link to={""}><LiaGooglePlus /></Link>
                            </li>
                            <li>
                                <Link to={""}><FaRegUser /><strong>Login</strong></Link>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Header);