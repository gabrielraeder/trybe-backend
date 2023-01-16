import fs from 'fs/promises';
import path from 'path';
import HttpException from '../exceptions/HttpException';

interface IPlant {
  id: number,
  breed: string,
  needsSun: boolean,
  origin: string,
  size: number,
  waterFrequency: number,
}

type INewPlant = Omit<IPlant, 'id' | 'waterFrequency'>;

interface IOpsInfo {
  createdPlants: number
}

class PlantService {
  private readonly plantsFile = path.join(__dirname, '..', 'models', 'database', 'plantsData.json');

  private readonly opsFile = path.join(__dirname, '..', 'models', 'database', 'opsInfo.json');

  private async updateOpsInfo(incrementAmount = 1): Promise<number> {
    const dataRaw = await fs.readFile(this.opsFile, { encoding: 'utf8' });
    const opsInfo: IOpsInfo = JSON.parse(dataRaw);
    opsInfo.createdPlants += incrementAmount;

    await fs.writeFile(this.opsFile, JSON.stringify(opsInfo, null, 2));

    return opsInfo.createdPlants;
  }

  public async getAll(): Promise<IPlant[]> {
    const dataRaw = await fs.readFile(this.plantsFile, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(dataRaw);
    return plants;
  }

  public async create(plant: INewPlant): Promise<IPlant> {
    const {
      breed,
      needsSun,
      origin,
      size,
    } = plant;

    if (typeof breed !== 'string') {
      throw new HttpException(400, 'Attribute "breed" must be string.');
    }

    if (typeof needsSun !== 'boolean') {
      throw new HttpException(400, 'Attribute "needsSun" must be boolean.');
    }

    if (typeof origin !== 'string') {
      throw new HttpException(400, 'Attribute "origin" must be string.');
    }

    if (typeof size !== 'number') {
      throw new HttpException(400, 'Attribute "size" must be number.');
    }

    const waterFrequency = needsSun
      ? size * 0.77 + (origin === 'Brazil' ? 8 : 7)
      : (size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7);

    const dataRaw = await fs.readFile(this.plantsFile, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(dataRaw);

    const newPlantId = await this.updateOpsInfo(1);
    const newPlant = { id: newPlantId, ...plant, waterFrequency };
    plants.push(newPlant);

    await fs.writeFile(this.plantsFile, JSON.stringify(plants, null, 2));
    return newPlant;
  }
}

export default PlantService;
