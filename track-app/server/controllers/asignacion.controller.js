const Asignacion = require("../models/asignacion");
const asignacionCtrl = {};

asignacionCtrl.getAsignaciones = async (req, res, next) => {
  try {
    const asigna = await Asignacion.find();
    if (asigna) {
      res.ok(asigna);
    } else {
      res.notFound();
    }
  } catch (exception) {
    res.internalServerError();
  }
};

asignacionCtrl.getAsignacionCompleta = async (req, res, next) => {
  try {
    const { id } = req.params;
    const asigna = await Asignacion.findById(id)
      .populate("asignaciones.profesor")
      .populate("asignaciones.alumno");

    res.ok(asigna);
  } catch (exception) {
    res.internalServerError();
  }
};

asignacionCtrl.createAsignacion = async (req, res, next) => {
  try {
    console.log(req);
    const asignacion = new Asignacion({
      asignaciones: req.body.asignaciones
    });
    await asignacion.save();
    res.created(asignacion);
  } catch (exception) {
    res.internalServerError();
  }
};

asignacionCtrl.getAsignacion = async (req, res, next) => {
  try {
    const { id } = req.params;
    const asigna = await Asignacion.findById(id);

    res.ok(asigna);
  } catch (exception) {
    res.internalServerError();
  }
};

asignacionCtrl.editAsignacion = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Asignacion.updateOne(
      { _id: id },
      {
        $set: {
          asignaciones: req.body.asignaciones
        }
      }
    );
    res.noContent();
  } catch (exception) {
    res.internalServerError();
  }
};

asignacionCtrl.deleteAsignacion = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const result = await Asignacion.deleteOne({ _id: id });
    res.noContent();
  } catch (error) {
    console.log(error);
    res.internalServerError();
  }
};

module.exports = asignacionCtrl;
