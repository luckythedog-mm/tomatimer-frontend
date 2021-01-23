import React, { useContext } from "react";
import UserContext from "../../../context/UserContext";
import HeroSection from "../../pages/HeroSection";
import { homeObjOne, homeObjTwo } from "./Data";
import Reloj from "../relojito/Reloj";
import "./Bienvenida.css";

function Home() {
  const { userData } = useContext(UserContext);
  return (
    <>
      <div className="page">
        {userData.user ? (
          <>
            <div className="bienvenida">
              <h1 className="bienvenida-title">
                Bienvenido {userData.user.displayName}, que tengas buenos
                TOMATIMES
              </h1>
            </div>
            <div className="PRUEBA">
              <Reloj />
            </div>
          </>
        ) : (
          <>
          
            
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjTwo} />

          </>
        )}
      </div>
    </>
  );
}

export default Home;
