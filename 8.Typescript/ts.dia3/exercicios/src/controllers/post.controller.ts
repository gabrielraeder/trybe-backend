import { Request, Response } from 'express';
import PostService from '../services/post.service';

export default class PostController {
  constructor(private postService = new PostService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const posts = await this.postService.getAll();
    return res.status(200).json(posts);
  };

  public getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const post = await this.postService.getById(+id);
    return res.status(200).json(post);
  };

  public create = async (req: Request, res: Response) => {
    const data = req.body;
    const newPost = await this.postService.create(data);
    return res.status(201).json(newPost);
  };

  public update = async (req: Request, res: Response) => {
    const data = req.body;
    const { id }  = req.params;

    await this.postService.update(+id, data);
    res.status(204).end();
  };

  public remove = async (req: Request, res: Response) => {
    const { id }  = req.params;

    await this.postService.remove(+id);
    res.status(204).end();
  };
};