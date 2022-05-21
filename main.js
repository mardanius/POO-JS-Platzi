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
  