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

// Challenge

class LearningPath{
    constructor({name, courses}){
        this.name = name;
        this.courses = courses; 
    }
}

class Cursos{
    constructor({
        name,
        lecciones = []
    }){
        this._name = name;
        this.lecciones = lecciones;
    }

    get name(){
        return this._name;
    }

    set name(nuevoNombre){
        if(nuevoNombre === "Curso Malo"){
            console.error ("Si sos profesional no lo hagas");
        } else{
            this._name = nuevoNombre;
        }
    }
}

const cursoProgBasica = new Cursos({
    name: "Curso de Programación Básica",
    lecciones: []
})

const cursoHTML = new Cursos({
    name: "Curso de HTML Básico",
    lecciones: []
})

const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
    courses: [
        cursoProgBasica,
        cursoHTML,
        "Curso de CSS",
        "Curso de JS"
    ]
})

const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
        cursoProgBasica,
        "Curso de Python",
        "Curso de DataBussines"
    ]
})

const escuelaVgs = new LearningPath({
    name: "Escuela de VideoJuegos",
    courses: [
        cursoProgBasica,
        "Curso de Unreal Engine",
        "Curso de C"
    ]
})