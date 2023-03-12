"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const exampleSchema = new mongoose_1.Schema({
    name: { type: String },
    id: { type: String },
});
exports.default = (0, mongoose_1.model)('exampleData', exampleSchema);
