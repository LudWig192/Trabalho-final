import React from 'react';
import Banner from "../Components/BannerHome";
import Diagnostico from "../Components/DiagnosticoHome";
import Servicos from "../Components/ServiçoHome";
import Exame from "../Components/ExameHome";
import Unidade from "../Components/UnidadeHome";
import Pulseira from "../Components/PulseiraHome";
import Modelo from "../Components/Modelo3DHome";
import Medico from "../Components/MedicoHome";
import '../Style/HomePage.css';

function HomeCliente() {
  return (
    <div className="HomeSemCliente">
     <Banner />
     <Diagnostico />
     <Exame /> 
     <Servicos />
     <Pulseira />
     <Modelo />
     <Unidade />
     <Medico />
    </div>
  );
}

export default HomeCliente;
