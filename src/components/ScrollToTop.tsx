import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { forceScrollToTop } from "../utils/scroll";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Força o scroll imediatamente
    forceScrollToTop();
    
    // Adiciona um delay para garantir que funcione após a renderização
    const timer = setTimeout(() => {
      forceScrollToTop();
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop;