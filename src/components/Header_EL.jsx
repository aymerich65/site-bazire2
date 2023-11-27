import { HeaderStyle } from '../styleComponents';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Header_EL() {
  const navigate = useNavigate();

  const linkVariants = {
    hover: {
      scale: 1.1, // Effet au survol
      transition: { duration: 0.2, type: "tween" },
      backgroundColor: '#eded4a', // couleur jaune au survol
    },
    pressed: {
      scale: 0.95, // Effet au clic
      transition: { duration: 0.2, type: "tween" },
      backgroundColor: 'rgb(237,237,74)', // couleur jaune au clic
    },
  };

  // Cette fonction prend en paramètre le chemin vers lequel naviguer
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className='header_EL'>
      <img src="/elementsgraphiques/logo_bande3.png" alt="Logo" className="imgheader_EL" />
      <div className='liensHeader'>
        {['/', '/prestations', '/galerie', '/contact'].map((path, index) => (
          <motion.div
            key={index}
            className='blocLiensheader'
            variants={linkVariants}
            whileHover="hover"
            whileTap="pressed"
            onClick={() => handleNavigation(path)}
            style={{ cursor: 'pointer'}}    
          >
            {path === '/' ? 'Accueil' : path.substring(1)}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
