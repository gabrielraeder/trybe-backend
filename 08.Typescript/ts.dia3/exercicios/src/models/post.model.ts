import { Pool, ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import Post from '../interfaces/post.interface';

export default class PostModel {
  public connection: Pool;

  constructor() {
    this.connection = connection;
  };

  public async getAll(): Promise<Post[]> {
    const result = await this.connection.execute('SELECT * FROM Posts');
    const [rows] = result;
    return rows as Post[];
  };

  public async getById(id: number): Promise<Post> {
    const result = await this.connection
      .execute('SELECT * FROM Posts WHERE id=?', [id]);
    const [rows] = result;
    const [post] = rows as Post[];
    return post;
  };

  public async create(data: Post): Promise<Post> {
    const { title, author, category, publicationDate } = data;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Posts (title, author, category, publicationDate) VALUES (?, ?, ?, ?)',
      [title, author, category, publicationDate],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...data };
  };

  public async update(id: number, data: Post): Promise<void> {
    const { title, author, category, publicationDate } = data;
    await this.connection.execute(
      'UPDATE Posts SET title=?, author=?, category=?, publicationDate=? WHERE id=?',
      [title, author, category, publicationDate, id],
    );
  };

  public async remove(id: number): Promise<void> {
    await this.connection.execute(
      'DELETE FROM Posts WHERE id=?',
      [id],
    );
  };

  public async querySearch(q: string): Promise<Post[]> {
    const [rows] = await this.connection.execute(
      'SELECT * FROM Posts WHERE author=? OR category=? OR publicationDAte=?',
      [q, q, q],
    );
      return rows as Post[];
  }
};