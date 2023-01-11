import styles from './Footer.module.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';
  
export function Footer() {
    return (
            <div className={styles.footer}>
                <MDBFooter className='text-center text-white '>
                    <MDBContainer className='p-4 pb-0'>
                        <section className='mb-4'>
                            <MDBBtn outline color="light" floating className='m-1' target="_blank" href='https://www.instagram.com/fazendoafestasjc/' role='button'>
                                <MDBIcon fab size='lg' className={styles.button} icon='instagram' />
                            </MDBBtn>
                            <MDBBtn outline color="light" floating className='m-1' target="_blank" href='https://api.whatsapp.com/send/?phone=5512997811224&text&type=phone_number&app_absent=0' role='button'>
                                <MDBIcon fab size='lg' className={styles.button} icon='whatsapp' />
                            </MDBBtn>
                        </section>
                    </MDBContainer>

                    <div className='text-center p-3'>
                        © 2023 Copyright: D. Indutry
                    </div>
                </MDBFooter>
            </div> 
    )
};