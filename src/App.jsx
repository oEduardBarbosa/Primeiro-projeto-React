import { Header } from './componentes/Header';
import {  Post } from  './Post' ;

import styles from './App.module.css';

import  './global.css';
import { Sidebar } from './componentes/Sidebar';

export function App() {

  return (
    <div>
      <Header />

    <div className={styles.wrapper}>
      <Sidebar  />
      <main>
          <Post 
          author="William Shakespeare" 
          content="Aprende que nunca se deve dizer a uma criança que sonhos são bobagens, poucas coisas são tão humilhantes e seria uma tragédia se ela acreditasse nisso. Aprende que quando está com raiva tem o direito de estar com raiva, mas isso não te dá o direito de ser cruel. “A alegria evita mil males e prolonga a vida. "
        />

        <Post 
          author="Machado de Assis" 
          content="Querida, ao pé do leito derradeiro
          Em que descansas dessa longa vida,
          Aqui venho e virei, pobre querida,
          Trazer-te o coração do companheiro.
           
          Pulsa-lhe aquele afeto verdadeiro
          Que, a despeito de toda a humana lida,
          Fez a nossa existência apetecida
          E num recanto pôs o mundo inteiro.
          
          Trago-te flores - restos arrancados
          Da terra que nos viu passar unidos
          E ora mortos nos deixa e separados.
          
          Que eu, se tenho nos olhos malferidos
          Pensamentos de vida formulados,
          São pensamentos idos e vividos."
        />
        
      </main>
    </div>
   </div>
  )
}

