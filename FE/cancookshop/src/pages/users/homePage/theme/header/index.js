import { memo, useState } from "react"
import "./style.scss"
import { ROUTER } from "utils/router";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { LiaGooglePlus } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SiGmail } from "react-icons/si";
import { formater } from "utils/fomater";
import { TiShoppingCart } from "react-icons/ti";
import { HiOutlineMenu } from "react-icons/hi";
import { LuPhoneCall } from "react-icons/lu";


const Header = () => {
    const [isShowCategories, setIsCategories] = useState(true);
    const [menus] = useState([
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
                    name: "j",
                    path: "",
                },
                {
                    name: "q",
                    path: "",
                },
                {
                    name: "k",
                    path: "",
                },
            ]
        },
        {
            name: "Liên hệ",
            path: "",
            isShowSubmenu: true,
            child: [
                {}
            ]
        },])

    return (
        <>
            <div className="header__top">
                <div className="container">
                    <div className="row">
                        <div className="col_6 header__top_left">
                            <ul>
                                <li><Link to={"https://workspace.google.com/intl/vi/gmail/"}><SiGmail /></Link></li>
                                <li> Keepdoden@gmail.com</li>
                                <li>|</li>
                                <li>Miễn phí rau thơm từ {formater(5000000)}</li>
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
                                <h1>COM</h1>
                            </div>
                        </div>
                        <div className="col_xl_6">

                            <div className="header_menu">
                                <ul >
                                    {menus?.map((menu, menuKey) => (
                                        <li key={menuKey}
                                            className={menuKey === 0 ? "active" : ""}>
                                            <Link to={menu?.path}>{menu?.name}</Link>
                                            {
                                                menu.child && (
                                                    <ul className="header__menu__dropdown">
                                                        {
                                                            menu.child.map((childItem, childKey) => (
                                                                <li key={`${menuKey}-${childKey}`}>
                                                                    <Link to={childItem?.path}>{childItem?.name}</Link>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                )
                                            }
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col_lg_3">
                            <div className="header_cart">
                                <div className="header_wallet">
                                    <li className="wallet">{formater(123456789)}</li>
                                </div>
                                <ul>
                                    <li><Link to={""}><TiShoppingCart /><span>7</span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div className="header_third">
                <div className="container">
                    <div className="row hero__categories_container">
                        <div className="col_lg_3 hero__categories">
                            <div className="hero__categories__all"
                                onClick={() => setIsCategories(!isShowCategories)}>
                                <HiOutlineMenu />
                                <span>Danh sách sản phẩm</span>
                            </div>
                            <ul className={isShowCategories ? "" : "hidden"}>
                                <li><Link to={""}>1</Link></li>
                                <li><Link to={""}>2</Link></li>
                                <li><Link to={""}>3</Link></li>
                                <li><Link to={""}>4</Link></li>
                            </ul>
                        </div>
                        <div className="col_lg_9 hero__search__container">
                            <div className="hero__search">
                                <div className="hero__search__form">
                                    <form>
                                        <input type="text" placeholder="Tìm lẹ đi..." />
                                        <button type="submit" className="site_btn">Tìm kím</button>
                                    </form>
                                </div>
                                <div>
                                    <div className="hero__phone">
                                        <div className="hero__phone__icon">
                                            <LuPhoneCall />
                                        </div>
                                        <div className="hero__phone__text">
                                            <p>0123.456.789</p>
                                            <span>Hỗ trợ 24/7</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hero__item" >
                                <div className="hero_text">
                                    <span>trái cây tươi</span>
                                    <h2>rau quả <br /> sạch 100%</h2>
                                    <h2>miễn phí giao hàng tận nơi</h2>
                                    <Link to={ROUTER.USER.PRODUCTS} className="primary-btn">Mua khẩn trương </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(Header);