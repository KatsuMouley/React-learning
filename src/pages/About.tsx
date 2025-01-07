import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Outlet, Link } from "react-router-dom";
import Navbar from '../components/Home/Navbar'

function About() {
  return (
      <div className='text-lg text-gray-700 leading-relaxed p-40'>
        Este projeto, com mais de 100 páginas, é uma iniciativa robusta de estudo e desenvolvimento de portfólio, projetada para demonstrar habilidades técnicas, criatividade e dedicação. Ele abrange uma ampla gama de áreas, estruturadas de maneira a oferecer um conteúdo rico e detalhado para aprendizado contínuo e apresentação profissional.
      </div>
  );
}

export default About;
