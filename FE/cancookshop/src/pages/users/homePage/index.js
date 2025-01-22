import { memo } from "react"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.scss";
import cat1Img from "../../../assets/users/images/hero/nauan.png";
import cat2Img from "../../../assets/users/images/hero/banner.jpg";
import cat3Img from "../../../assets/users/images/hero/nauan.png";
import { Link } from "react-router-dom";
const HomePage = (deviceType) => {

    const responsive = {
        superLengerDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            // slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            // slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            // slidesToSlide: 1 // optional, default to 1.
        }
    };

    const slidesItems = [
        {
            bgImg: cat1Img,
            name: "OLIVA",
        },
        {
            bgImg: cat2Img,
            name: "OLIMA",
        },
        {
            bgImg: cat3Img,
            name: "OLIA",
        },
        {
            bgImg: cat2Img,
            name: "OLIVIA",
        },
    ]
    return (
        <div className="container__categories_slider">
            <Carousel
                className="categories_slider"
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={deviceType !== "mobile" ? true : false}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={deviceType}
            >
                {slidesItems.map((item, keyitem) => (
                    <div>
                        <div className="categories_slider_item"
                            style={{
                                backgroundImage: `url(${item.bgImg})`
                            }}
                            key={keyitem}>
                            <p><Link to={""}>{item.name}</Link></p>
                        </div>
                    </div>
                )
                )}
            </Carousel>;
        </div>
    )
};

export default memo(HomePage);

