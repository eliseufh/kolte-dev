// Utility functions for scroll behavior

export const scrollToTop = () => {
  // Múltiplas abordagens para garantir que funcione em todos os browsers
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  
  // Força o scroll no próximo frame
  requestAnimationFrame(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  });
};

export const forceScrollToTop = () => {
  // Versão mais agressiva para garantir o scroll
  const scrollToZero = () => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Verifica se ainda não está no topo e tenta novamente
    if (window.pageYOffset > 0 || document.documentElement.scrollTop > 0) {
      requestAnimationFrame(scrollToZero);
    }
  };
  
  scrollToZero();
};
