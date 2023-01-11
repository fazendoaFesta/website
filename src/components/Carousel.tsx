import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {
    ecorregador,
    algodao,
    mesa,
    pipoca,
    piscina,
    promo,
    pulapula
} from '../assets/index'

import React from 'react';

import styles from './Carousel.module.css'

import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export function Carousel() {
  return (
    <MDBCarousel className={styles.container} showControls showIndicators>
      
        <MDBCarouselItem
            className={styles.imgCarousel}
            itemId={3}    
            src={mesa}
            alt='...'
        />
        <MDBCarouselItem
            className={styles.imgCarousel}
            itemId={3}
            src={pulapula}
            alt='...'
        />

        <MDBCarouselItem
            className={styles.imgCarousel}
            itemId={3}
            src={piscina}
            alt='...'
        />

        <MDBCarouselItem
            className={styles.imgCarousel}
            itemId={3}
            src={algodao}
            alt='...'
        />

        <MDBCarouselItem
            className={styles.imgCarousel}
            itemId={3}
            src={pipoca}
            alt='...'
        />

        <MDBCarouselItem
            className={styles.imgCarousel}
            itemId={3}
            src={ecorregador}
            alt='...'
        />

        <MDBCarouselItem
            className={styles.imgCarousel}
            itemId={3}
            src={promo}
            alt='...'
        />
    </MDBCarousel>
  );
}