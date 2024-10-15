import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Pongámonos en contacto: Formas de conectar conmigo
						</div>

						<div className="subtitle contact-subtitle" >
							Gracias por su interés en ponerse en contacto
							conmigo. Agradezco sus comentarios, preguntas y
							sugerencias. Si tiene alguna pregunta o comentario
							específico, no dude en enviarme un correo
							electrónico directamente a: {" "}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
							. Hago un esfuerzo por responder a todos los
							mensajes en 24 horas, aunque puedo tardar más en
							periodos de mucho trabajo. Por último, si prefieres
							conectarte a través de las redes sociales, puedes
							encontrarme en{" "}
							<a
								href={INFO.socials.linkedin}
								target="_blank"
								rel="noreferrer"
							>
								{INFO.socials.linkedin}
							</a>
							. Allí publico actualizaciones y me
							relaciono con mis contactos, así que no dudes en
							ponerte en contacto conmigo. Gracias de nuevo por tu
							interés! Saludos.👋🏽
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
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

export default Contact;
