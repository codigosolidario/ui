import { Fragment } from "react"
import './Logo.css'

export const Logo = () => {
    return <Fragment>
        <div className="logo">
            <div className="heart-computer">
                <div className="heart"></div>
                <div className="diskette">
                    <div className="hole"></div>
                    <div className="disk"></div>
                    <div className="disk-label"></div>
                </div>
            </div>
        </div>
    </Fragment>
}