import { Model, INTEGER, STRING, DECIMAL } from 'sequelize';
import db from '.';
import Author from './Author';

class Book extends Model {
  declare id: number;
  declare name: string;
  declare authorId: number;
  declare genreId: number;
}

Book.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: STRING,
    allowNull: false,
  },
  authorId: {
    type: INTEGER,
    allowNull: false,
    references: {
      model: 'authors',
      key: 'id',
    },
  },
  genreId: {
    type: INTEGER,
    allowNull: false,
    references: {
      model: 'genres',
      key: 'id',
    },
  }
}, {
  sequelize: db,
  modelName: 'books',
  timestamps: false,
  underscored: true,
});

Book.belongsTo(Author,  { foreignKey: 'id' });
Author.hasMany(Book, { foreignKey: 'authorId' });

export default Book;