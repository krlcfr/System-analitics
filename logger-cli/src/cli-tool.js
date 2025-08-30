function iniciarCLI(rl, callbackVolverMenu) {
  console.log('Bienvenido a la CLI de ejemplo');
  console.log('Comandos disponibles: hola, tiempo, salir');

  function preguntar() {
    rl.question('Ingresa un comando: ', (input) => {
      input = input.trim().toLowerCase();

      switch (input) {
        case 'hola':
          console.log('¡Hola! ¿Cómo estás?');
          break;
        case 'tiempo':
          console.log(`Tiempo activo: ${process.uptime().toFixed(2)} segundos`);
          break;
        case 'salir':
          console.log('Saliendo de la CLI...\n');
          callbackVolverMenu(); // 👈 volver al menú sin cerrar rl
          return;
        default:
          console.log('Comando no reconocido');
      }

      preguntar();
    });
  }

  preguntar();
}

module.exports = { iniciarCLI };
