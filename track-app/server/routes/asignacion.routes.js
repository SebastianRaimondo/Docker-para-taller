const express = require("express");
const router = express.Router();

const asignacionCtrl = require("../controllers/asignacion.controller");

router.get("/completa/:id", asignacionCtrl.getAsignacionCompleta);
router.get("/", asignacionCtrl.getAsignaciones);
router.post("/", asignacionCtrl.createAsignacion);
router.get("/:id", asignacionCtrl.getAsignacion);
router.put("/:id", asignacionCtrl.editAsignacion);
router.delete("/:id", asignacionCtrl.deleteAsignacion);

module.exports = router;
