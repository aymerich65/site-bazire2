import BtnFooter from './Modele_bouton_menu_mobile';
import '../style.css';
import { Link } from 'react-router-dom';
import MentionsLegales from "./MentionsLegales";
import '../styleFooterResponsive.css';
import { motion } from 'framer-motion';

export default function Footer(){




 // Définition des variants pour l'animation
 const variants = {
    initial: { 
        scale: 1, 
        backgroundColor: "rgba(137, 43, 226, 0)", // couleur initiale transparente
       
       
    },
    clicked: {  
        
        scale: 0.8, // légèrement agrandi
        backgroundColor: "rgba(255, 255, 255, 0.481)", // semi-transparent au clic
        transition: { duration: 0.1 } ,// durée de l'animation
 borderRadius: "2vw" , // border-radius
 
    }
};




















    return(
     <>

                <div className='blocFooterecranmini '>


               
      

                <div className='linfootermini'><div className='btnsmalltest'> 
                <motion.div
                className="linfootermini"
                variants={variants}
                initial="initial"
                whileTap="clicked"
                style={{ transform: 'translateX(10%)', marginTop: '1%', height: 'auto' }}
            >
                {/* Insérez ici le contenu de votre bloc, par exemple une image */}<img src='/icon_prestations.png'/><Link to="/prestations">PRESTATION</Link>  </motion.div></div>
                </div>  

          





                <div className='linfootermini2'><div className='btnsmalltest'> 
            <motion.div
                className="linfootermini"
                variants={variants}
                initial="initial"
                whileTap="clicked"
                style={{ transform: 'translateX(40%)', marginTop: '1%', height: 'auto' }}
            >
                {/* Insérez ici le contenu de votre bloc, par exemple une image */}
      


                <div className='linfootermini'><img src='/icon_galerie_traité.png'/><Link to="/galerie">GALERIE</Link></div>   </motion.div></div></div>



                <div className='linfootermini3'><div className='btnsmalltest'> 
                <motion.div
                className="linfootermini"
                variants={variants}
                initial="initial"
                whileTap="clicked"
                style={{  transform: 'translateX(80%)', marginTop: '1%', height: 'auto' }}
            >
                {/* Insérez ici le contenu de votre bloc, par exemple une image */}
      
                <div className='linfootermini'><img src='/icon_contact_traité.png'/><Link to="/contact">CONTACT</Link></div>   </motion.div></div></div>  
                        
                        </div>
                      
</>





    )
}
