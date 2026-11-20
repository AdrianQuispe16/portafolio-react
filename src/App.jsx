import LogoDefiniciones from "./components/LogoDefiniciones";
import Precarga from "./components/Precarga";
import FondoAnimado from "./components/FondoAnimado";
import Navegacion from "./components/Navegacion";
import CarruselTecnologias from "./components/CarruselTecnologias";
import PiePagina from "./components/PiePagina";
import Inicio from "./sections/Inicio";
import SobreMi from "./sections/SobreMi";
import Proyectos from "./sections/Proyectos";
import Experiencia from "./sections/Experiencia";
import Formacion from "./sections/Formacion";
import Habilidades from "./sections/Habilidades";
import Contacto from "./sections/Contacto";
import { useAnimacionesEntrada } from "./hooks/useAnimacionesEntrada";
export default function App() {
  useAnimacionesEntrada();
  return (
    <>
      <LogoDefiniciones />
      <Precarga />
      <FondoAnimado />
      <Navegacion />
      <Inicio />
      <CarruselTecnologias />
      <SobreMi />
      <Proyectos />
      <Experiencia />
      <Formacion />
      <Habilidades />
      <Contacto />
      <PiePagina />
    </>
  );
}
