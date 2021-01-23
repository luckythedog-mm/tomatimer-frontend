import React from "react";
import { Link } from "react-router-dom";
import { FaFire } from "react-icons/fa";
import { Button } from "../../buttons/Button";
import { BsXDiamondFill } from "react-icons/bs";
import { GiCrystalize } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import "./Pricing.css";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div>
        <div className="pricing__section">
          <div className="pricing__wrapper">
            <h1 className="pricing__heading">Pricing</h1>
            <div className="pricing__container">
              <Link to="/sign-up" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <FaFire />
                  </div>
                  <h3>Starter</h3>
                  <h4>Gratis</h4>
                  <ul className="pricing__container-features">
                    <li>Pruébalo</li>
                    <li>funcionalidades básicas</li>
                    <li>no pierdas tu tiempo </li>
                  </ul>
                  <Button buttonSize="btn--wide" buttonColor="primary">
                    Escoger Plan
                  </Button>
                </div>
              </Link>

              <Link to="/sign-up" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <BsXDiamondFill />
                  </div>
                  <h3>Gold</h3>
                  <h4>S/7.00</h4>
                  <p>mensual</p>
                  <ul className="pricing__container-features">
                    <li>Acceso a las estadísticas</li>
                    <li>mejorar en tus estudios, trabajo</li>
                    <li>EL MEJOR PLAN</li>
                  </ul>
                  <Button buttonSize="btn--wide" buttonColor="blue">
                    Escoger Plan
                  </Button>
                </div>
              </Link>

              <Link to="/sign-up" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <GiCrystalize />
                  </div>
                  <h3>Diamond</h3>
                  <h4>S/15.00</h4>
                  <p>per month</p>
                  <ul className="pricing__container-features">
                    <li>Acceso a las conferencias mensuales</li>
                    <li>exclusivo para los diamantes</li>
                  </ul>
                  <Button buttonSize="btn--wide" buttonColor="primary">
                    Escoger Plan
                  </Button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Pricing;
