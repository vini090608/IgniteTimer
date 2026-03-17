import { HeaderContainer } from "./styles";
import { Timer, Scroll } from "phosphor-react";

import LogoIgnite from "../../assets/Logo.svg";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const { pathname } = useLocation();

  return (
    <HeaderContainer>
      <img src={LogoIgnite} alt="Logo" />
      <nav>
        {/* Comparamos diretamente com a string da rota */}
        <Link data-current={pathname === "/"} to="/" title="Timer">
          <Timer size={24} />
        </Link>
        <Link
          data-current={pathname === "/history"}
          to="/history"
          title="Histórico"
        >
          <Scroll size={24} />
        </Link>
      </nav>
    </HeaderContainer>
  );
}
