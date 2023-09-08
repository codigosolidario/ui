import { Fragment } from "react"
import './Footer.css'

const Footer = () => {
    return (
        <Fragment>
            <div className="footer">
                <div className="colums">
                    <div className="colum">
                        <label className="rowTitle">Información de Interés</label>
                        <label className="row">- Únete al Equipo</label>
                        <label className="row">- Colaboradores</label>
                        <label className="row">- Patrocinadores</label>
                    </div>
                    <div className="colum">
                        <label className="rowTitle">Preguntas Frecuentes</label>
                        <label className="row">- ¿Por qué lo hacemos?</label>
                        <label className="row">- ¿Es gratis?</label>
                        <label className="row">- ¿Hay transparencia?</label>
                    </div>
                    <div className="colum">
                        <label className="rowTitle">Social</label>
                        <label className="row">- GitHub</label>
                        <label className="row">- LinkedIn</label>
                        <label className="row">- Instagram</label>
                    </div>
        
                </div>
            </div>
        </Fragment>
    )
}

export default Footer;