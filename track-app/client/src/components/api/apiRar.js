const axios = require("axios");

//Crud Alumnos

function getAlu(id) {
  return axios.get("http://localhost:3001/api/alumnos/" + id);
}

function editAlu(id, aluInfo, cb) {
  axios
    .put("http://localhost:3001/api/alumnos/" + id, aluInfo)
    .then(() => cb());
}

function createAlu(alu, cb) {
  axios.post("http://localhost:3001/api/alumnos/", alu).then(() => cb());
}

function deleteAlu(id, fn) {
  axios.delete("http://localhost:3001/api/alumnos/" + id).then(() => fn());
}

function getAlumumnos() {
  return axios.get("http://localhost:3001/api/alumnos/");
}

function getAlumumnosDelCurso(id) {
  return axios.get("http://localhost:3001/api/alumnos/" + id);
}

function getSpecAlums(alums) {
  return axios.get("http://localhost:3001/api/alumnos" + alums);
}

//Crud Profesores

function getProf(id) {
  return axios.get("http://localhost:3001/api/profesores/" + id);
}

function editProf(id, aluInfo, cb) {
  axios
    .put("http://localhost:3001/api/profesores/" + id, aluInfo)
    .then(() => cb());
}

function createProf(alu, cb) {
  axios.post("http://localhost:3001/api/profesores/", alu).then(() => {
    console.log("prueba api");
    cb();
  });
}

function deleteProf(id, fn) {
  axios.delete("http://localhost:3001/api/profesores/" + id).then(() => fn());
}

function getProfesores() {
  return axios.get("http://localhost:3001/api/profesores");
}

//Crud Cursos

function getCurso(id) {
  return axios.get("http://localhost:3001/api/cursos/" + id);
}

function getCursoCompleto(id) {
  return axios.get("http://localhost:3001/api/cursos/completo/" + id);
}

function getAlumnosDeUnCurso(id) {
  return axios.get("http://localhost:3001/api/cursos/alumnosDeUnCurso/" + id);
}

function editCurso(id, cursoInfo, cb) {
  axios
    .put("http://localhost:3001/api/cursos/" + id, cursoInfo)
    .then(() => cb());
}

function createCurso(curso, cb) {
  console.log(curso);
  axios.post("http://localhost:3001/api/cursos/", curso).then(() => {
    console.log("prueba api");
    cb();
  });
}

function deleteCurso(id, fn) {
  axios.delete("http://localhost:3001/api/cursos/" + id).then(() => fn());
}

function getCursos() {
  return axios.get("http://localhost:3001/api/cursos");
}

//Crud Asignaciones

function getAsignacion(id) {
  return axios.get("http://localhost:3001/api/asignaciones/" + id);
}

function editAsignacion(id, aluInfo, cb) {
  axios
    .put("http://localhost:3001/api/asignaciones/" + id, aluInfo)
    .then(() => cb());
}

function createAsignacion(alu, cb) {
  axios.post("http://localhost:3001/api/asignaciones/", alu).then(() => cb());
}

function deleteAsignacion(id, fn) {
  axios.delete("http://localhost:3001/api/asignaciones/" + id).then(() => fn());
}

function getAsignaciones() {
  return axios.get("http://localhost:3001/api/asignaciones/");
}

function getAsignacionCompleta(id) {
  return axios.get("http://localhost:3001/api/cursos/completa/" + id);
}
export default {
  getAlumumnos,
  deleteAlu,
  createAlu,
  editAlu,
  getAlu,
  getProf,
  editProf,
  createProf,
  deleteProf,
  getProfesores,
  getCursos,
  editCurso,
  createCurso,
  deleteCurso,
  getCurso,
  getSpecAlums,
  getAlumumnosDelCurso,
  getCursoCompleto,
  getAlumnosDeUnCurso,
  getAsignacion,
  editAsignacion,
  createAsignacion,
  deleteAsignacion,
  getAsignaciones,
  getAsignacionCompleta
};
