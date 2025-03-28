    // Lista de IDs de botones y sus sufijos únicos
    const buttons = [
        { id: "button1", suffix: "R7RFUIFX" },
        { id: "button2", suffix: "SGDBBHCC" },
        { id: "button3", suffix: "1SD17FUB" },
        { id: "button4", suffix: "388BITA5" },
        { id: "button5", suffix: "SRAQSUNN" },
        { id: "button6", suffix: "IJALQFUI" },
        { id: "button7", suffix: "JNR8JVPW" }
    ];

    // Función para agregar eventos a los botones
    buttons.forEach(button => {
        document.getElementById(button.id).addEventListener("click", () => {
            window.open(`https://cwallet.com/t/${button.suffix}`, "_blank");
        });
    });







              // SUMA DE $

// Función para generar un número aleatorio en un rango
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  // Función para actualizar el valor progresivo y el tiempo de espera
  function updateValue() {
    let currentValue = parseFloat(localStorage.getItem('usdt-raised')) || 4736512.52; // Valor inicial
    const targetValue = 600000000.00; // Valor objetivo
    const increment = getRandomNumber(23.48, 218.13); // Incremento aleatorio

    // Incrementar el valor actual
    const newValue = Math.min(currentValue + increment, targetValue);

    // Actualizar el texto con formato de moneda
    document.getElementById('usdt-raised').innerText = '$' + newValue.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    
    // Guardar el nuevo valor en el almacenamiento local
    localStorage.setItem('usdt-raised', newValue);
    
    // Si no hemos alcanzado el valor objetivo, programar la próxima actualización
    if (newValue < targetValue) {
      setTimeout(updateValue, getRandomNumber(1100, 2330));
    }
  }

  // Llamar a la función inicialmente para comenzar la cuenta progresiva
  updateValue();

      // FIN SUMA DE $
