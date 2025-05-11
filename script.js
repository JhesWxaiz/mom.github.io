let isFlipped = false;
let isEnvelopeOpen = false;

function handleCardClick(card) {
  if (!isFlipped) {
    // Primer clic: Voltea la tarjeta para mostrar el sobre
    card.classList.add('is-flipped');
    isFlipped = true;
    
    // Mostrar las fotos inmediatamente cuando se voltea la tarjeta
    setTimeout(() => {
      const leftImage = document.querySelector('.left-image');
      leftImage.classList.add('visible');
      
      setTimeout(() => {
        const rightImage = document.querySelector('.right-image');
        rightImage.classList.add('visible');
      }, 300);
    }, 600);
    
  } else if (isFlipped && !isEnvelopeOpen) {
    // Segundo clic: Abre el sobre
    document.querySelector('.envelope-flap').classList.add('open');
    document.querySelector('.envelope-back').classList.add('open');
    isEnvelopeOpen = true;
    
    // Muestra el contenido de la carta después de un breve retraso
    setTimeout(() => {
      document.querySelector('.message').classList.add('visible');
    }, 800);
  }
}