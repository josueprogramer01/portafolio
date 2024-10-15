import React from "react";

function article_1() {
	return {
		date: "07 Mayo 2024",
		title: "Beneficios del Cloud Computing",
		description:
			"La computación en nube ofrece una serie de ventajas, como el ahorro de costes y una mayor flexibilidad.",
		keywords: [
			"Beneficios del Cloud Computing",
			"Computación en la nube",
			"Ventajas de la nube",
			"Cloud Computing",
			"Servicios en la nube"
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						La computación en la nube ha revolucionado la forma en que las organizaciones acceden y gestionan los recursos tecnológicos. Entre los beneficios más destacados se encuentran:
					</div>
					<ul>
						<li><strong>Reducción de costos:</strong> Las empresas ya no necesitan invertir en infraestructura física costosa, lo que reduce los gastos operativos y de mantenimiento.</li>
						<li><strong>Escalabilidad:</strong> Los recursos pueden ajustarse dinámicamente según la demanda, lo que garantiza una capacidad óptima en todo momento.</li>
						<li><strong>Acceso global:</strong> Los usuarios pueden acceder a sus datos y aplicaciones desde cualquier lugar con conexión a Internet.</li>
						<li><strong>Seguridad mejorada:</strong> Los proveedores de servicios en la nube implementan protocolos de seguridad avanzados y actualizaciones automáticas.</li>
						<li><strong>Resiliencia y respaldo:</strong> Los datos en la nube se replican en varias ubicaciones, minimizando la pérdida de información en caso de fallas.</li>
					</ul>
					<div className="paragraph">
						Adicionalmente, la computación en la nube facilita la innovación continua, ya que permite a las empresas integrar nuevas tecnologías y servicios sin interrupciones.
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


function article_2() {
	return {
		date: "07 Octubre 2024",
		title: "La importancia de Google Cloud Run",
		description:
			"Google Cloud Run es un servicio que permite desplegar y ejecutar aplicaciones contenedorizadas de manera escalable y sin servidor, eliminando la complejidad de gestionar infraestructura.",
		keywords: [
			"Google Cloud Run",
			"Cloud Run",
			"Aplicaciones sin servidor",
			"Contenedores",
			"Escalabilidad"
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						Google Cloud Run es una solución poderosa para desplegar y ejecutar aplicaciones contenedorizadas sin necesidad de gestionar servidores. Este servicio ofrece:
					</div>
					<ul>
						<li><strong>Despliegue sin servidor:</strong> Los desarrolladores pueden enfocarse en el código, mientras Cloud Run se encarga de la infraestructura subyacente.</li>
						<li><strong>Escalabilidad automática:</strong> Las aplicaciones escalan automáticamente según la demanda, lo que evita sobrecargas o recursos ociosos.</li>
						<li><strong>Compatibilidad con contenedores:</strong> Cualquier aplicación empaquetada en un contenedor puede ejecutarse en Cloud Run, lo que ofrece flexibilidad en el desarrollo y despliegue.</li>
						<li><strong>Facturación por uso:</strong> Solo se paga por el tiempo de ejecución real, optimizando costos y permitiendo a las empresas gestionar mejor sus presupuestos en la nube.</li>
						<li><strong>Integración con otras herramientas de Google Cloud:</strong> Cloud Run se integra fácilmente con servicios como Cloud Build, BigQuery, Pub/Sub y más, potenciando soluciones más completas.</li>
					</ul>
					<div className="paragraph">
						En resumen, Google Cloud Run es esencial para empresas que buscan agilidad, escalabilidad y reducción de costos en el desarrollo de aplicaciones modernas sin comprometer la flexibilidad y el control.
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

const myArticles = [article_1, article_2];

export default myArticles;
