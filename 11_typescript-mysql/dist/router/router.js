"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mysql_1 = __importDefault(require("../sql/mysql"));
const router = express_1.Router();
router.get('/musicos', (req, res) => {
    const query = `
        SELECT * 
        FROM musicos`;
    mysql_1.default.ejecutarQuery(query, (err, musicos) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err,
            });
        }
        else {
            res.json({
                ok: true,
                musicos: musicos
            });
        }
    });
});
router.get('/musicos/:id', (req, res) => {
    const id = req.params.id;
    const escapeId = mysql_1.default.instance.cnn.escape(id);
    const query = `
            SELECT * 
            FROM musicos
            where id = ${escapeId}`;
    mysql_1.default.ejecutarQuery(query, (err, musico) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err,
            });
        }
        else {
            res.json({
                ok: true,
                musico: musico[0]
            });
        }
    });
});
exports.default = router;
