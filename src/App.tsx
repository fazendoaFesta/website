import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Carousel } from './components/Carousel'

import { useState } from 'react'
import './global.css'
import styles from './App.module.css'
import logo from './assets/Logo.jpeg'


function App() {

  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <img className={styles.logo} src={logo} alt="Logo da marca"/> 
      </div>

      <div className={styles.containerText}>
        <p>Somos especializados em aluguel de itens para o seu evento.</p>
        <p>Conte conosco sempre que precisar 🤜🏼🤛🏽.</p>
        <p>Iniciamos nossas operações com aluguel de brinquedos infantis, porém agora também temos o aluguel de mesas e cadeiras em nosso portfólio.</p>
        <p>Temos os seguintes itens a disposição:</p>
      </div>

      <div className={styles.containerItens}>
        
        <p>● Kit de mesas e cadeiras;</p>
        <p>● Cama elástica;</p>
        <p>● Piscina de bolinhas;</p>
        <p>● Escorregador;</p>
        <p>● Gangorra.</p>
      </div>
        
      <div className={styles.containerText}>
        <b>Estamos preparados para deixar sua festa ainda mais especial 🎉🎊</b>
      </div>
      <div className={styles.containerCaroulsel}>
        <Carousel/>
      </div>

      <Footer/>
    </>
  )
}

export default App
