import React from "react";
import codeJava from "../assets/codeJava.png";
import imgRefle from "../assets/imgRefle.jpg";
import "./styles.css";

function article_6() {
	return {
		date: "07 enero 2024",
		title: "Reflexión: Beneficios del Cloud Computing",
		description:
			"La computación en nube ofrece una serie de ventajas, como el ahorro de costes y una mayor flexibilidad.",
		keywords: [
			"Beneficios del Cloud Computing",
			"Computación en la nube",
			"Ventajas de la nube",
			"Cloud Computing",
			"Servicios en la nube",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid var(--link-color) !important;
					max-width: 100%;
					height: auto;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						La computación en la nube ha revolucionado la forma en
						que las organizaciones acceden y gestionan los recursos
						tecnológicos. Entre los beneficios más destacados se
						encuentran:
					</div>
					<ul>
						<li>
							<strong>Reducción de costos:</strong> Las empresas
							ya no necesitan invertir en infraestructura física
							costosa, lo que reduce los gastos operativos y de
							mantenimiento.
						</li>
						<li>
							<strong>Escalabilidad:</strong> Los recursos pueden
							ajustarse dinámicamente según la demanda, lo que
							garantiza una capacidad óptima en todo momento.
						</li>
						<li>
							<strong>Acceso global:</strong> Los usuarios pueden
							acceder a sus datos y aplicaciones desde cualquier
							lugar con conexión a Internet.
						</li>
						<li>
							<strong>Seguridad mejorada:</strong> Los proveedores
							de servicios en la nube implementan protocolos de
							seguridad avanzados y actualizaciones automáticas.
						</li>
						<li>
							<strong>Resiliencia y respaldo:</strong> Los datos
							en la nube se replican en varias ubicaciones,
							minimizando la pérdida de información en caso de
							fallas.
						</li>
					</ul>
					<div className="paragraph">
						Adicionalmente, la computación en la nube facilita la
						innovación continua, ya que permite a las empresas
						integrar nuevas tecnologías y servicios sin
						interrupciones.
					</div>
					<img
						src="https://pandorafms.com/blog/wp-content/uploads/2023/11/DALL%C2%B7E-2023-11-27-13.56.23-A-minimalistic-and-modern-illustration-for-a-blog-post-about-Cloud-Computing.-The-design-includes-simple-symbols-representing-cloud-storage-data-tran.png"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_5() {
	return {
		date: "07 marzo 2024",
		title: "Reflexión: La importancia de Google Cloud Run",
		description:
			"Google Cloud Run es un servicio que permite desplegar y ejecutar aplicaciones contenedorizadas de manera escalable y sin servidor, eliminando la complejidad de gestionar infraestructura.",
		keywords: [
			"Google Cloud Run",
			"Cloud Run",
			"Aplicaciones sin servidor",
			"Contenedores",
			"Escalabilidad",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid var(--link-color) !important;
					max-width: 100%;
					height: auto;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						Google Cloud Run es una solución poderosa para desplegar
						y ejecutar aplicaciones contenedorizadas sin necesidad
						de gestionar servidores. Este servicio ofrece:
					</div>
					<ul>
						<li>
							<strong>Despliegue sin servidor:</strong> Los
							desarrolladores pueden enfocarse en el código,
							mientras Cloud Run se encarga de la infraestructura
							subyacente.
						</li>
						<li>
							<strong>Escalabilidad automática:</strong> Las
							aplicaciones escalan automáticamente según la
							demanda, lo que evita sobrecargas o recursos
							ociosos.
						</li>
						<li>
							<strong>Compatibilidad con contenedores:</strong>{" "}
							Cualquier aplicación empaquetada en un contenedor
							puede ejecutarse en Cloud Run, lo que ofrece
							flexibilidad en el desarrollo y despliegue.
						</li>
						<li>
							<strong>Facturación por uso:</strong> Solo se paga
							por el tiempo de ejecución real, optimizando costos
							y permitiendo a las empresas gestionar mejor sus
							presupuestos en la nube.
						</li>
						<li>
							<strong>
								Integración con otras herramientas de Google
								Cloud:
							</strong>{" "}
							Cloud Run se integra fácilmente con servicios como
							Cloud Build, BigQuery, Pub/Sub y más, potenciando
							soluciones más completas.
						</li>
					</ul>
					<div className="paragraph">
						En resumen, Google Cloud Run es esencial para empresas
						que buscan agilidad, escalabilidad y reducción de costos
						en el desarrollo de aplicaciones modernas sin
						comprometer la flexibilidad y el control.
					</div>
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxPyhZbVxDEGyGb_jXPQu53zEBiXB1-zMhlg&s"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_4() {
	return {
		date: "15 agosto 2024",
		title: "Tutorial: Introducción a la Programación en Python",
		description:
			"Python es un lenguaje de programación versátil y fácil de aprender, ideal para principiantes y expertos por igual.",
		keywords: [
			"Programación en Python",
			"Lenguaje de programación",
			"Python para principiantes",
			"Desarrollo de software",
			"Aprender Python",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid var(--link-color) !important;
					max-width: 100%;
					height: auto;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						Python se ha convertido en uno de los lenguajes de
						programación más populares del mundo. Es conocido por su
						sintaxis clara y legible, lo que lo convierte en una
						excelente opción para quienes están comenzando en la
						programación.
					</div>
					<ul>
						<li>
							<strong>Fácil de aprender:</strong> La simplicidad
							de su sintaxis permite a los nuevos programadores
							concentrarse en conceptos de programación sin
							preocuparse por la complejidad del lenguaje.
						</li>
						<li>
							<strong>Versatilidad:</strong> Python se utiliza en
							una amplia gama de aplicaciones, desde desarrollo
							web y automatización hasta análisis de datos y
							aprendizaje automático.
						</li>
						<li>
							<strong>Amplia comunidad:</strong> La gran comunidad
							de Python ofrece una multitud de recursos,
							bibliotecas y frameworks que facilitan el
							desarrollo.
						</li>
						<li>
							<strong>
								Soporte para paradigmas de programación:
							</strong>{" "}
							Python admite programación orientada a objetos,
							programación imperativa y programación funcional.
						</li>
						<li>
							<strong>Gran biblioteca estándar:</strong> Python
							viene con una biblioteca estándar rica que
							proporciona muchas herramientas y funcionalidades
							listas para usar.
						</li>
					</ul>
					<div className="paragraph">
						En resumen, aprender Python no solo abre puertas en el
						mundo de la programación, sino que también es un paso
						crucial hacia el dominio de tecnologías más avanzadas.
					</div>
					<br></br>
					<img
						src="https://www.shutterstock.com/shutterstock/videos/1097709827/thumb/8.jpg?ip=x480"
						alt="Python"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_3() {
	return {
		date: "20 septiembre 2024",
		title: "Consejo: Desarrollo de Aplicaciones Web con React",
		description:
			"React es una biblioteca de JavaScript que facilita la creación de interfaces de usuario interactivas y dinámicas.",
		keywords: [
			"Desarrollo web",
			"React",
			"Biblioteca de JavaScript",
			"Interfaz de usuario",
			"SPA",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid var(--link-color) !important;
					max-width: 100%;
					height: auto;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						React ha transformado la manera en que se construyen
						aplicaciones web modernas. Su enfoque basado en
						componentes permite una mayor reutilización del código y
						una mejor organización.
					</div>
					<ul>
						<li>
							<strong>Componentes reutilizables:</strong> La
							arquitectura de componentes de React permite crear
							piezas de UI que se pueden reutilizar en diferentes
							partes de la aplicación.
						</li>
						<li>
							<strong>Virtual DOM:</strong> React utiliza un
							Virtual DOM para mejorar la eficiencia en el
							renderizado de la interfaz, lo que resulta en una
							experiencia de usuario más fluida.
						</li>
						<li>
							<strong>Estado y Props:</strong> Manejar el estado y
							las propiedades de los componentes es intuitivo,
							facilitando la construcción de aplicaciones
							interactivas.
						</li>
						<li>
							<strong>Gran ecosistema:</strong> React cuenta con
							una amplia gama de bibliotecas y herramientas, como
							Redux para la gestión del estado y React Router para
							el enrutamiento.
						</li>
						<li>
							<strong>Comunidad activa:</strong> La comunidad de
							desarrolladores de React es enorme, lo que significa
							que siempre hay recursos, tutoriales y soporte
							disponibles.
						</li>
					</ul>
					<div className="paragraph">
						En conclusión, React es una herramienta poderosa para el
						desarrollo de aplicaciones web que busca agilidad y
						eficiencia sin sacrificar la calidad del código.
					</div>
					<br></br>
					<img
						src="https://bigbite.net/wp-content/uploads/2017/11/React.jpg"
						alt="React"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "28 enero 2025",
		title: "Tutorial: Creando una API REST Básica con Node.js y Express",
		description:
			"Aprende a construir una API REST desde cero utilizando Node.js y Express. Perfecto para principiantes que desean adentrarse en el desarrollo backend.",
		keywords: [
			"Node.js",
			"Express",
			"API REST",
			"Backend",
			"Desarrollo web",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid var(--link-color) !important;
					max-width: 100%;
					height: auto;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						En este tutorial, aprenderás a crear una API REST básica
						utilizando Node.js y Express. Es un buen punto de
						partida para construir aplicaciones backend modernas.
					</div>
					<h3>Paso 1: Configura tu proyecto</h3>
					<p>
						Primero, asegúrate de tener Node.js instalado en tu
						sistema. Luego, crea un nuevo proyecto e inicialízalo
						con el siguiente comando:
					</p>
					<pre>
						<code>
							mkdir mi-api-rest{"\n"}
							cd mi-api-rest{"\n"}
							npm init -y
						</code>
					</pre>
					<h3>Paso 2: Instala Express</h3>
					<p>
						Express es un framework de Node.js que facilita la
						creación de servidores y APIs. Instálalo ejecutando:
					</p>
					<pre>
						<code>npm install express</code>
					</pre>
					<h3>Paso 3: Escribe tu servidor</h3>
					<p>
						Crea un archivo llamado <code>index.js</code> y agrega
						el siguiente código:
					</p>
					<pre>
						<code>
							<img
								src={codeJava}
								alt="Code JavaScript"
								className="randImage"
							/>
							{/* const express = require("express");{"\n"}
							const app = express();{"\n"}
							const port = 3000;{"\n\n"}
							// Middleware para manejar JSON{"\n"}
							app.use(express.json());{"\n\n"}
							// Rutas{"\n"}
							app.get("/", (req, res) => {{"\n"}
								res.send("¡Bienvenido a mi API REST!");{"\n"}
							}});{"\n\n"}
							app.get("/api/users", (req, res) => {{"\n"}
								res.json(["Usuario1", "Usuario2", "Usuario3"]);{"\n"}
							}});{"\n\n"}
							// Inicia el servidor{"\n"}
							app.listen(port, () => {{"\n"}
								console.log(`Servidor corriendo en http://localhost:${port}`);{"\n"}
							}}); */}
						</code>
					</pre>
					<h3>Paso 4: Ejecuta tu API</h3>
					<p>Inicia el servidor ejecutando:</p>
					<pre>
						<code>node index.js</code>
					</pre>
					<p>
						¡Ahora puedes abrir tu navegador o usar una herramienta
						como Postman para probar tu API en{" "}
						<code>http://localhost:3000/api/users</code>!
					</p>
					<h3>Conclusión</h3>
					<p>
						Has aprendido a construir una API REST básica. Desde
						aquí, puedes expandirla para incluir rutas más
						complejas, bases de datos y autenticación. ¡Sigue
						explorando y aprendiendo!
					</p>
					<br></br>
					<img
						src="https://www.curotec.com/wp-content/uploads/2024/08/Express-1.png?w=1024"
						alt="Node.js y Express"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_1() {
	return {
		date: "12 febrero 2025",
		title: "Reflexión: El Desafío de Crecer en TI en un Mercado Exigente",
		description:
			"Exploramos las barreras que enfrentan los profesionales de TI para avanzar en su carrera y cómo pueden superar los requisitos de experiencia excesivos.",
		keywords: [
			"TI",
			"Experiencia laboral",
			"Infraestructura",
			"Certificaciones",
			"Desarrollo profesional",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid var(--link-color) !important;
					max-width: 100%;
					height: auto;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						Recientemente vi una vacante para un ingeniero sysadmin
						junior que pedía 4 años de experiencia en redes, Windows
						Server, Linux server, bases de datos, desarrollo y
						certificaciones en Cisco, Microsoft y Linux, entre
						otras. El salario era "a convenir".
					</div>
					<h3>¿Un junior debe tener 4 años de experiencia?</h3>
					<p>
						Tras la pandemia, las empresas entendieron que el rol de
						TI es clave para mantener su infraestructura operativa.
						Sin embargo, cada vez exigen más habilidades, dejando
						pocas oportunidades para quienes buscan crecer.
					</p>
					<p>
						Por ejemplo, si alguien viene de soporte N1 o N2 y
						quiere avanzar, se topará con ofertas que piden mínimo 2
						años de experiencia. Pero, ¿cómo adquirir experiencia si
						no hay oportunidades para aprender? Lo mismo ocurre en
						desarrollo, donde cientos de candidatos compiten por su
						primer empleo.
					</p>
					<h3>Consejos para crecer en TI</h3>
					<ul>
						<li>
							1️⃣ Atrévete a asumir retos técnicos (si tienes un
							buen guía como tu jefe inmediato, mejor).
						</li>
						<li>
							2️⃣ Trabaja en tu actitud (ser conflictivo solo frena
							el crecimiento).
						</li>
						<li>
							3️⃣ Certifícate con grandes empresas como Microsoft,
							Cisco, Linux o AWS.
						</li>
						<li>
							4️⃣ Aprovecha cursos en plataformas como Udemy,
							LinkedIn Learning y Coursera para especializarte y
							enfocarte en lo que quieres ser.
						</li>
					</ul>
					<p>
						Ojalá los reclutadores consideren más el potencial y las
						habilidades en lugar de enfocarse solo en la
						experiencia. 🚀💻
					</p>
					<br></br>
					<img
						src={imgRefle}
						alt="TI y Desarrollo Profesional"
						className="randImage"
					/>
					<p>
						<strong>💻 Fuente original de la idea:</strong>{" "}
						Publicación en LinkedIn de{" "}
						<a
							href="https://www.linkedin.com/feed/update/urn:li:activity:7294414401611182080/"
							target="_blank"
						>
							Dairo Rivera Ramírez
						</a>
						, Analista de Infraestructura, Ingeniero de Sistemas.
					</p>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [
	article_1,
	article_2,
	article_3,
	article_4,
	article_5,
	article_6,
];

export default myArticles;
