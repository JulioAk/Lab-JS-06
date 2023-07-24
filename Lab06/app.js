
/* Definir clase Alumno */
class Alumno {
    constructor(codigo, nombre, nota1, nota2, nota3, nota4) {
      this.codigo = codigo;
      this.nombre = nombre;
      this.nota1 = nota1;
      this.nota2 = nota2;
      this.nota3 = nota3;
      this.nota4 = nota4;
    }
  
    /* Calcular promedio */
    promedio() {
      const prom = (this.nota1 * 0.15) + (this.nota2 * 0.2) + (this.nota3 * 0.25) + (this.nota4 * 0.4);
      return prom.toFixed(2);
    }
  
    /* dar condicion */
    condicion() {
      const promedio = this.promedio();
      return promedio >= 12 ? "Aprobado" : "Desaprobado";
    }
  
    /* Decir si obtiene regalo */
    obsequio() {
      const promedio = this.promedio();
      return promedio > 17 ? "Mochila" : "Ningún obsequio";
    }
  }
  
  // Pedir al usuario las notas mediante prompt()
  const codigo = prompt("Ingrese el código del alumno:");
  const nombre = prompt("Ingrese el nombre del alumno:");
  const nota1 = parseFloat(prompt("Ingrese la nota 1 del alumno:"));
  const nota2 = parseFloat(prompt("Ingrese la nota 2 del alumno:"));
  const nota3 = parseFloat(prompt("Ingrese la nota 3 del alumno:"));
  const nota4 = parseFloat(prompt("Ingrese la nota 4 del alumno:"));
  
  // Crear una instancia de Alumno con las notas ingresadas por el usuario
  const alumno1 = new Alumno(codigo, nombre, nota1, nota2, nota3, nota4);
  
  // Mostrar los resultados
const mensaje = `Nombre: ${alumno1.nombre}\nCódigo: ${alumno1.codigo}\nPromedio: ${alumno1.promedio()}\nCondición: ${alumno1.condicion()}\nObsequio: ${alumno1.obsequio()}`;
alert(mensaje);

 