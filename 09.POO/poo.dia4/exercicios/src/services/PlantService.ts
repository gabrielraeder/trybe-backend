import fs from 'fs/promises';
import path from 'path';
import HttpException from '../exceptions/HttpException';
import { INewPlant, IPlant } from '../interfaces/IPlant';
import PlantModel from '../models/PlantModel';

class PlantService {
  private readonly plantsFile = path.join(__dirname, '..', 'models', 'database', 'plantsData.json');

  private readonly opsFile = path.join(__dirname, '..', 'models', 'database', 'opsInfo.json');

  constructor(public plantModel = new PlantModel()) {}

  public async getAll(): Promise<IPlant[]> {
    const dataRaw = await fs.readFile(this.plantsFile, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(dataRaw);
    return plants;
  }

  public async create(plant: INewPlant): Promise<IPlant> {
    try {
      const created = await this.plantModel.create(plant);
      return created;
    } catch (error) {
      throw new HttpException(500, 'Internal ERROR!');
    }
  }

  public async update(plant: IPlant): Promise<IPlant> {
    try {
      const updated = await this.plantModel.update(plant);
      return updated;
    } catch (err) {
      throw new HttpException(500, 'Internal ERROR!');
    }
  }

  public async remove(id: string): Promise<boolean> {
    try {
      const isREmoved = await this.plantModel.removeById(id);
      return isREmoved;
    } catch (err) {
      throw new HttpException(500, 'Internal ERROR!');
    }
  }
}

export default PlantService;
