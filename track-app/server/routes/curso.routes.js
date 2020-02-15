const express = require("express");
const router = express.Router();

const cursoCtrl = require("../controllers/curso.controller");

router.get("/completo/:id", cursoCtrl.getCursoCompleto);
router.get("/alumnosDeUnCurso/:id", cursoCtrl.getAlumnosDeUnCurso);
router.get("/", cursoCtrl.getCursos);
router.post("/", cursoCtrl.createCurso);
router.get("/:id", cursoCtrl.getCurso);
router.put("/:id", cursoCtrl.editCurso);
router.delete("/:id", cursoCtrl.deleteCurso);

module.exports = router;
