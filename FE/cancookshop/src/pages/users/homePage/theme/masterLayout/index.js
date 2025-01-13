import { memo } from "react"
import Header from "../header";
import Footer from "../footer";
//thằng con MasterLayout
const MaterLayout = ({ children, ...props }) => {
    return (
        <div {...props}>
            <Header />
            {children}
            <Footer />

        </div>
    )
}

export default memo(MaterLayout);