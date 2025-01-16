import { memo, useState } from "react"
import "./style.scss"
import { ROUTER } from "utils/router";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { LiaGooglePlus } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa";
import { Link, Router } from "react-router-dom";
import { SiGmail } from "react-icons/si";
import { formater } from "utils/fomater";
import { TiShoppingCart } from "react-icons/ti";


const Header = () => {

    const [menus, useMenus] = useState([
        {
            name: "Trang chủ",
            path: ROUTER.USER.HOME,
        },
        {
            name: "Cửa hàng",
            path: ROUTER.USER.PRODUCTS,
        },
        {
            name: "Sản phẩm",
            path: "",
            isShowSubmenu: true,
            child: [
                {
                    name: "1",
                    path: "",
                },
                {
                    name: "2",
                    path: "",
                },
                {
                    name: "3",
                    path: "",
                },
            ]
        },
        {
            name: "Bài viết",
            path: "",
            isShowSubmenu: true,
            child: [
                {
                    name: "q",
                    path: "",
                }
            ]
        },
        {
            name: "Liên hệ",
            path: "",
            isShowSubmenu: true,
            child: [
                {}
            ]
        },
    ])

    return (
        <>
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
            <div className="header__second">
                <div className="container">
                    <div className="row">
                        <div className="col_xl_3">
                            <div className="header_logo">
                                <h1>CUBET</h1>
                            </div>
                        </div>
                        <div className="col_xl_6">

                            <div className="header_menu">
                                <ul>
                                    {menus?.map((menu, menuKey) => (
                                        <li key={menuKey} className={menuKey == 0 ? "active" : ""}>
                                            <Link to={menu?.path}>{menu?.name}</Link>
                                        </li>
                                    ))}

                                </ul>
                            </div>

                        </div>
                        <div className="col_lg_3">
                            <div className="header_cart">
                                <div className="header_hostline">
                                    <li>{formater(123456789)}</li>
                                </div>
                                <ul>
                                    <li><Link to={""}><TiShoppingCart /><span>7</span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(Header);