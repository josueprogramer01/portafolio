import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";
import MyCv from "../assets/CVJosue.pdf";

import "./styles/cv.css";

const Cv = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "cv") || {};

	const handleDownloadCV = () => {
		const cvUrl = MyCv;
		window.open(cvUrl, "_blank");
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Currículum | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="cv" />
				<div className="content-wrapper">
					<div className="cv-logo-container">
						<div className="cv-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="cv-container">
						<div className="title cv-title">
							Mi Currículum Profesional
						</div>

						<div className="subtitle contact-subtitle">
							Hola, soy <strong>Josue Alvarez Rodriguez</strong>,
							un Ingeniero en Sistemas Computacionales con
							experiencia en desarrollo de software, integración
							de tecnologías y liderazgo en proyectos. Si deseas
							conocer más sobre mi experiencia profesional,
							habilidades y logros, te invito a descargar mi
							currículum actualizado.
						</div>

						<div className="download-container">
							<button
								className="download-button"
								onClick={handleDownloadCV}
							>
								Descargar Currículum
							</button>
						</div>
					</div>

					<div className="socials-container">
						<div className="cv-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Cv;
