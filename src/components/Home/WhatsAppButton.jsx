const WhatsAppButton = () => {
    const phoneNumber = '573001234567'; // Reemplaza con el número real de la veterinaria
  
    return (
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all"
      >
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48a11.81 11.81 0 0 0-16.7 0A11.83 11.83 0 0 0 2.2 17.82L1 22.24l4.55-1.19a11.83 11.83 0 0 0 6.2 1.7h.05a11.82 11.82 0 0 0 8.36-3.47 11.83 11.83 0 0 0 0-16.7ZM12 21.2a9.93 9.93 0 0 1-5.09-1.39l-.36-.21-2.7.71.72-2.63-.23-.38A9.94 9.94 0 1 1 12 21.2Zm5.3-7.61c-.29-.14-1.7-.84-1.96-.94s-.45-.14-.63.14-.72.94-.89 1.13-.33.21-.61.07a8.15 8.15 0 0 1-2.39-1.48 8.89 8.89 0 0 1-1.65-2.06c-.17-.29 0-.45.13-.6.14-.14.29-.33.44-.49a2 2 0 0 0 .29-.48.56.56 0 0 0 0-.51c-.08-.14-.63-1.52-.86-2.08s-.45-.46-.63-.47h-.54a1 1 0 0 0-.72.34 3 3 0 0 0-.94 2.22 5.2 5.2 0 0 0 1.09 2.55 11.79 11.79 0 0 0 4.28 3.88 14.37 14.37 0 0 0 1.42.52 3.38 3.38 0 0 0 1.55.1 2.55 2.55 0 0 0 1.67-1.17 2.06 2.06 0 0 0 .14-1.17c-.06-.1-.27-.15-.56-.3Z" />
        </svg>
      </a>
    );
  };
  
  export default WhatsAppButton;
  