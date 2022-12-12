import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

import Books from './BookModel'; // Nossa outra entidade

class Comments extends Model {
  declare id: number;
  declare text: string;
  declare author: string;
}

Comments.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  text: {
    type: STRING(255),
    allowNull: false,
  },
  author: {
    type: STRING(100),
    allowNull: false,
  },
  bookId: {
    type: INTEGER,
    allowNull: false,
  }
}, {
  // ... Outras configs
  underscored: true,
  sequelize: db,
  modelName: 'comments',
  timestamps: false,
});

/**
  * `Workaround` para aplicar as associations em TS:
  * Associations 1:N devem ficar em uma das instâncias de modelo
  * */

Books.hasMany(Comments);
Comments.belongsTo(Books);

export default Comments;