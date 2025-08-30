const readline = require('readline');

function crearMenu() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function mostrarMenu() {
    console.log("\n=== MENÚ PRINCIPAL ===");
    console.log("1. Ejecutar CLI Tool");
    console.log("2. Ejecutar Registro de Sistema");
    console.log("3. Ejecutar System Monitor");
    console.log("0. Salir");

    rl.question("Elige una opción: ", (opcion) => {
      switch (opcion) {
        case "1": {
          const { iniciarCLI } = require('./cli-tool');
          iniciarCLI(rl, () => { // le paso rl y callback
            mostrarMenu();       // cuando salga de CLI vuelve al menú
          });
          break;
        }
        case "2": {
          const { iniciarRegistro } = require('./registro-sistema');
          iniciarRegistro();
          mostrarMenu();
          break;
        }
        case "3": {
          const { iniciarMonitor } = require('./system-monitor');
          iniciarMonitor();
          mostrarMenu();
          break;
        }
        case "0":
          console.log("Saliendo...");
          rl.close();
          return;
        default:
          console.log("Opción no válida");
          mostrarMenu();
      }
    });
  }

  mostrarMenu();
}

crearMenu();
