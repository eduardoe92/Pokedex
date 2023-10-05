import generacion1 from "../img/Generaciones/1.jpg";
import generacion2 from "../img/Generaciones/2.jpg";
import generacion3 from "../img/Generaciones/3.jpg";
import generacion4 from "../img/Generaciones/4.jpg";
import generacion5 from "../img/Generaciones/5.jpg";
import generacion6 from "../img/Generaciones/6.jpg";
import generacion7 from "../img/Generaciones/7.jpg";
import generacion8 from "../img/Generaciones/8.jpg";
import generacion9 from "../img/Generaciones/9.jpg";
import generaciones from "../img/Generaciones/gen.jpg";
import './Generations.css'

const Generation1 = () => {
    return (
        <img src={generacion1} alt="Generacion-1" />
    );
}
const Generation2 = () => {
    return (
        <img src={generacion2} alt="Generacion-2" />
    );
}
const Generation3 = () => {
    return (
        <img src={generacion3} alt="Generacion-3" />
    );
}
const Generation4 = () => {
    return (
        <img src={generacion4} alt="Generacion-4" />
    );
}
const Generation5 = () => {
    return (
        <img src={generacion5} alt="Generacion-5" />
    );
}

const Generation6 = () => {
    return (
        <img src={generacion6} alt="Generacion-6" />
    );
}
const Generation7 = () => {
    return (
        <img src={generacion7} alt="Generacion-7" />
    );
}
const Generation8 = () => {
    return (
        <img src={generacion8} alt="Generacion-8" />
    );
}
const Generation9 = () => {
    return (
        <img src={generacion9} alt="Generacion-9" />
    );
}
const AllGenerations = () => {
    return (
        <img src={generaciones} alt="Generaciones" />
    );
}

export {Generation1, Generation2, Generation3, Generation4, Generation5, Generation6, Generation7, Generation8, Generation9, AllGenerations};