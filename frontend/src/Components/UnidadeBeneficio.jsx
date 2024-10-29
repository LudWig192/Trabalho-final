import React from 'react';
import '../Style/UnidadeBeneficio.css';
import Central from "../Imagens/Hospital_Instituto_central.jpeg";
import Israelita from "../Imagens/Hospital_Israelita.png";
import Libano from "../Imagens/Hospital_Libano.jpg";

const ProjectsComponent = () => {
    return (
        <div className="unidadebeneficio-container">
            <div className="unidadebeneficio-header">
                <div className="unidadebeneficio-title">
                    Conheça nossas unidades médicas
                </div>
                <div className="unidadebeneficio-description">
                    Médicos 24h indicam exames e cirurgias. O BioGuardian monitora a saúde da sua família com IA e oferece atendimento médico em casa para emergências.
                </div>
            </div>
            <div className="unidadebeneficio-cards">
                <div className="unidadebeneficio-card">
                    <img src={Central} alt="Hospital Central" className="unidadebeneficio-image" />
                    <div className="unidadebeneficio-info">
                        <div className="unidadebeneficio-name">Hospital Central</div>
                    </div>
                </div>
                <div className="unidadebeneficio-card">
                    <img src={Israelita} alt="Hospital Israelita" className="unidadebeneficio-image" />
                    <div className="unidadebeneficio-info">
                        <div className="unidadebeneficio-name">Hospital Israelita</div>
                    </div>
                </div>
                <div className="unidadebeneficio-card">
                    <img src={Libano} alt="Hospital Libano" className="unidadebeneficio-image" />
                    <div className="unidadebeneficio-info">
                        <div className="unidadebeneficio-name">Hospital Libano</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsComponent;
