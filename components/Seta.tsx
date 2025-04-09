import React from 'react';

export default function Seta() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      onClick={scrollToTop}
      className="fixed bottom-14 right-4 cursor-pointer z-50"
    >
      <img 
        src="/seta.png" 
        alt="Voltar ao topo"
        className="w-[80px] h-[10px] rotate-90 transition-transform hover:scale-110"
      />
    </div>
  );
}
