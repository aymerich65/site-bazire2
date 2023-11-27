import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import '../style.css';
import Formulaire from './Formulaire';
import Formulaire_EcranLarge from './Formulaire_EcranLarge';
import Header_EL from './Header_EL';
import '../stylecontact.css';
import FooterContact from './FooterContact'
import React, { useEffect } from 'react';


export default function Contact() {

  useEffect(() => {
    document.title = "Contact";
  }, []);


  return (
    <>
    <div className='grid-container-contact'>
      <div className="grid-a bA">
        <Header />
      </div>
      <div className="grid-b contactMain">
        <Formulaire/>
      </div>
      <div className="grid-c bC">
        <FooterContact />
      </div>
      <div className="grid-dmobile ">
        <div className='centrageLink'>
          <Link to="/mentionslegales" className='mentionslegalesStyle'>
            MENTIONS LEGALES
          </Link>
        </div>
      </div>
      </div>






          <div className='grid-container-contact-EcranLarge'> 
          <div className='grid-container-contact-EcranLargeEnfant'>
          <Header_EL />      
          <div className="grid-b contactMain">
            <Formulaire_EcranLarge/>
          </div>
  


            <div className="grid-dContact">
              <div className='centrageLink'>
                <Link to="/mentionslegales"  className='mentionslegalesStyle'>
                  MENTIONS LEGALES
                </Link>
              </div>
            </div> 



</div> 
         </div>

          </>
  );
}
