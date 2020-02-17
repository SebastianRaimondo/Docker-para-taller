const Curso = require("../models/curso");
const cursoCtrl = {};

cursoCtrl.getCursos = async (req, res, next) => {
  try {
    const cursos = await Curso.find();
    if (cursos) {
      res.ok(cursos);
    } else {
      res.notFound();
    }
  } catch (exception) {
    res.internalServerError();
  }
};

cursoCtrl.getCursoCompleto = async (req, res, next) => {
  try {
    const { id } = req.params;
    const curso = await Curso.findById(id)
      .populate("alumnos")
      .populate("profesores")
      .populate("asignaciones.alumno")
      .populate("asignaciones.profesor");

    res.ok(curso);
  } catch (exception) {
    res.internalServerError();
  }
};

cursoCtrl.getAlumnosDeUnCurso = async (req, res, next) => {
  try {
    const { id } = req.params;
    const curso = await Curso.findById(id).populate("alumnos");
    res.ok(curso);
  } catch (exception) {
    res.internalServerError();
  }
};

//cursoCtrl.deleteAsignaciones = async (req, res, next) => {
//  try {
//   const { id } = req.params;
//    console.log(id);
//    const result = await Curso.findById(id).findOneAndRemove()
//    res.noContent();
//  } catch (error) {
//    console.log(error);
//    res.internalServerError();
//  }

cursoCtrl.createCurso = async (req, res, next) => {
  try {
    console.log("request controller(" + req + ")");
    const curso = new Curso({
      materia: req.body.materia,
      sede: req.body.sede,
      dias: req.body.dias,
      cuatrimestre: req.body.cuatrimestre,
      anio: req.body.anio,
      alumnos: req.body.alumnos,
      profesores: req.body.profesores,
      asignaciones: req.body.asignaciones
    });
    console.log("Lama(" + curso + ")");
    await curso.save();
    res.created(curso);
  } catch (exception) {
    console.log("esta es la exception" + exception);
    res.internalServerError();
  }
};

cursoCtrl.getCurso = async (req, res, next) => {
  try {
    const { id } = req.params;
    const curso = await Curso.findById(id);

    res.ok(curso);
  } catch (exception) {
    res.internalServerError();
  }
};

cursoCtrl.editCurso = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Curso.updateOne(
      { _id: id },
      {
        $set: {
          materia: req.body.materia,
          sede: req.body.sede,
          dias: req.body.dias,
          cuatrimestre: req.body.cuatrimestre,
          anio: req.body.anio,
          alumnos: req.body.alumnos,
          profesores: req.body.profesores,
          asignaciones: req.body.asignaciones
        }
      }
    );
    res.noContent();
  } catch (exception) {
    res.internalServerError();
  }
};

cursoCtrl.deleteCurso = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const result = await Curso.deleteOne({ _id: id });
    res.noContent();
  } catch (error) {
    console.log(error);
    res.internalServerError();
  }
};

module.exports = cursoCtrl;
