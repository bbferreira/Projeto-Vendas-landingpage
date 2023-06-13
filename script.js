function enviarMensagem() {
    const phoneNumber = '14997605588';
    const encodedMessage = encodeURIComponent('Olá! Esta é uma mensagem genérica enviada pelo botão WhatsApp.');

    const linkWhatsapp = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.open(linkWhatsapp, '_blank');
  }