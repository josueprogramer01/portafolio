import React from "react";
import { Link } from "react-router-dom";

import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to="/">Inicio</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/about">Sobre Mi</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/projects">Proyectos</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/articles">Articulos</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/contact">Contacto</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/cv">Currículum</Link>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						© 2024 Josué. Todos los Derechos son Reservdados.
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
