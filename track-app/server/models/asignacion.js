const mongoose = require("mongoose");
const { Schema } = mongoose;

const AsignacionSchema = new Schema({
  asignaciones: [
    {
      profesor: { type: Schema.Types.ObjectId, ref: "Prof" },
      alumno: { type: Schema.Types.ObjectId, ref: "Alu" },
      idCurso: { type: String }
    }
  ]
});

module.exports = mongoose.model("Asignacion", AsignacionSchema);
