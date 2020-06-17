const mongoose = require('mongoose');

const AddSettingSchema = new mongoose.Schema({
  user: { type: String, require: true },
  fps: { type: Number, default: 0 },
  resolution: { type: String, default: 'NA' },
  brightness: { type: Number, default: 0 },
});

// the first parameter is used to define which document you want the schema to be placed in
AddSettings = mongoose.model('settings', AddSettingSchema);

module.exports = AddSettings;
