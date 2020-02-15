const mongoose = require("mongoose");
const { Schema } = mongoose;

const asigPro_AlumSchema = new Schema({
  alumno: { type: Schema.Types.ObjectId },
  profesor: { type: Schema.Types.ObjectId }
});

module.exports = mongoose.model("asignaciones", asigPro_AlumSchema);
