"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const BookModel_1 = __importDefault(require("./BookModel")); // Nossa outra entidade
class Comments extends sequelize_1.Model {
}
Comments.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    text: {
        type: (0, sequelize_1.STRING)(255),
        allowNull: false,
    },
    author: {
        type: (0, sequelize_1.STRING)(100),
        allowNull: false,
    },
    bookId: {
        type: sequelize_1.INTEGER,
        allowNull: false,
    }
}, {
    // ... Outras configs
    underscored: true,
    sequelize: _1.default,
    modelName: 'comments',
    timestamps: false,
});
/**
  * `Workaround` para aplicar as associations em TS:
  * Associations 1:N devem ficar em uma das instâncias de modelo
  * */
BookModel_1.default.hasMany(Comments);
Comments.belongsTo(BookModel_1.default);
exports.default = Comments;
