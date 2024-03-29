import { Request, Response, NextFunction } from 'express';
import PlantService from '../services/PlantService';

class PlantController {
  public service: PlantService = new PlantService();

  public async getAll(_req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const plants = await this.service.getAll();
      return res.status(200).json(plants);
    } catch (error) {
      next(error);
    }
  }

  public async create(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const plant = await this.service.create(req.body);
      return res.status(201).json(plant);
    } catch (error) {
      next(error);
    }
  }

  public async update(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const plant = await this.service.update(req.body);
      return res.status(200).json(plant);
    } catch (error) {
      next(error);
    }
  }

  public async remove(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const isRemoved = await this.service.remove(req.params.id);
      if (isRemoved) return res.status(200).json();
      return res.status(404).json({ message: 'Plant Not Found' });
    } catch (error) {
      next(error);
    }
  }
}

export default PlantController;
