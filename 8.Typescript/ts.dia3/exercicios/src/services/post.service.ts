import Post from '../interfaces/post.interface';
import PostModel from '../models/post.model';
import { NotFoundError } from 'restify-errors';

export default class PostService {
  public model: PostModel;

  constructor() {
    this.model = new PostModel();
  };

  public async getAll(): Promise<Post[]> {
    const result = await this.model.getAll();
    return result;
  };

  public async getById(id: number): Promise<Post> {
    const post = await this.model.getById(id);
    return post;
  };

  public async create(data: Post): Promise<Post> {
    const newPost = await this.model.create(data);
    return newPost;
  };

  public async update(id: number, data: Post): Promise<void> {
    const postFound = await this.model.getById(id);
    if (!postFound) throw new NotFoundError('Post not found!');

    return this.model.update(id, data);
  };

  public async remove(id: number): Promise<void> {
    const postFound = await this.model.getById(id);
    if (!postFound) throw new NotFoundError('Post not found!');

    return this.model.remove(id);
  };
};