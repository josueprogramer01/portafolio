import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Experiencia - Desarrollador de Software"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPCA9WyURn-4mLRnusTp2vWGoDHE46AQblIA&s"
								alt="turing"
								className="work-image"
							/>
							<div className="work-title">
								Turing Inteligencia Artificial S.A.S
							</div>
							<div className="work-subtitle">
								Desarrollador Full Stack
							</div>
							<div className="work-duration">
								Nov 2023 - Oct 2024
							</div>
						</div>

						<div className="work">
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqw-OQaQuYdWF6abJiAEkhtrQCENL-aX0qmg&s"
								alt="villa"
								className="work-image"
							/>
							<div className="work-title">
								VILLANET S.A DE C.V
							</div>
							<div className="work-subtitle">
								Desarrollador Móvil
							</div>
							<div className="work-duration">
								Oct 2022 – Ene 2023
							</div>
						</div>

						<div className="work">
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN_fNq1q_RrVClBDWlBtuF8rbgogu169td8Q&s"
								alt="BELLOTA"
								className="work-image"
							/>
							<div className="work-title">
								Ciber y Papelería Bellota
							</div>
							<div className="work-subtitle">
								Desarrollador Full Stack
							</div>
							<div className="work-duration">
								 Sep 2020 – Dic 2020
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
