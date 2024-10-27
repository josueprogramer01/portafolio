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
							<div className="work-title">Turing Inteligencia Artificial</div>
							<div className="work-subtitle">
								 Desarrollo de Software
							</div>
							<div className="work-duration">Nov 2023 - octubre 2024</div>
						</div>

						<div className="work">
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqw-OQaQuYdWF6abJiAEkhtrQCENL-aX0qmg&s"
								alt="villa"
								className="work-image"
							/>
							<div className="work-title">VILLANET S.A DE C.V</div>
							<div className="work-subtitle">
								Desarrollo de App Android
							</div>
							<div className="work-duration">Octubre 2022 – enero 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
