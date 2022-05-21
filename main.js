//Primer Objeto Literal
const natalia = {
    name: "Nath",
    age: 20,
    cursosAprobados: ["Curso HTML básico", "Curso CSS básico"],
    aprobarCurso(nuevoCurso) {
      this.cursosAprobados.push(nuevoCurso);
    },
  }
  
  natalia.aprobarCurso("Curso de JAVA");

  //Creando primer prototipo y primera instancia de prototipo

  const Student = function(name, age, cursosAprobados){
      this.name = name;
      this.age = age;
      this.cursosAprobados = cursosAprobados;
  }

  Student.prototype.aprobarCurso = function(nuevoCurso){
      this.cursosAprobados.push(nuevoCurso);
  }

  const juanita = new Student(
      "Juana",
      33,
      [
          "POO en PHP",
          "Curso de Unreal Engine"
      ]
    )

// Creando un prototipo con sitanxis de clases

class student2 {
    constructor({name, age, cursosAprobados}){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso = function(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
}

const carlos = new student2({name: "Carlitox", age: 12, cursosAprobados: ["Curso de piloto aviador", "Curso de oratoria"]})