import { Link } from "react-router-dom";
import { ModeleBtnMobile } from '../styleComponents';
import '../style.css';
import { useState } from 'react';


export default function Modele_bouton_menu_mobile(props) {

  return (
    <div
    className={props.blocBoutonfooter} // Assurez-vous que la classe CSS correspond
    /*style={{ ...props.customButtonStyles }}*/
 
    >
      <img src={props.routeImg}  />
      <div className={props.ajustLinkBtnFooter}>
      <Link to={props.route} style={props.btnTextStyle}>
          {props.titre}
        </Link>
      </div>
      
    </div>
  );
}
