const Asignacion = require("../models/asignacion");
const asignacionCtrl = {};

asignacionCtrl.getAsignaciones = async (req, res, next) => {
  try {
    const asigna = await Asignacion.find()
      .populate("asignacion.profesor")
      .populate("asignacion.alumno");
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
      .populate("asignacion.profesor")
      .populate("asignacion.alumno");

    res.ok(asigna);
  } catch (exception) {
    res.internalServerError();
  }
};

asignacionCtrl.createAsignacion = async (req, res, next) => {
  try {
    console.log(req);
    const asignacion = new Asignacion({
      asignacion: req.body.asignacion
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
          asignacion: req.body.asignacion
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
