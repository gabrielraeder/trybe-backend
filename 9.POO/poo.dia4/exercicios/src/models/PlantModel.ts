import { HandleFile, FileType } from './HandleFile';
import { IModel } from './interfaces/IModel';
import { IPlant, IOpsInfo } from '../interfaces/IPlant';

export default class PlantModel implements IModel<IPlant> {
  private fileTypePlant: FileType = 'plants';

  private fileTypeOpsInfo: FileType = 'opsInfo';

  private handleFile = new HandleFile();

  private async updateOpsInfo(incrementAmount = 1): Promise<number> {
    const opsInfo = await this.handleFile.readFile<IOpsInfo>(this.fileTypeOpsInfo);
    opsInfo.createdPlants += incrementAmount;

    await this.handleFile.saveFile(this.fileTypeOpsInfo, opsInfo);

    return opsInfo.createdPlants;
  }

  public async getAll(): Promise<IPlant[]> {
    const plants = this.handleFile.readFile<IPlant[]>(this.fileTypePlant);
    return plants;
  }

  public async getById(id: string): Promise<IPlant | null> {
    const plants = await this.getAll();
    const plant = plants.find((p) => p.id === +id);
    if (!plant) return null;
    return plant;
  }

  public async create(plant: Omit<IPlant, 'id'>): Promise<IPlant> {
    const {
      breed,
      needsSun,
      origin,
      size,
    } = plant;

    const waterFrequency = needsSun
      ? size * 0.77 + (origin === 'Brazil' ? 8 : 7)
      : (size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7);

    const data = await this.getAll();
    const newPlantId = await this.updateOpsInfo(1);
    const newPlant = { id: newPlantId, ...plant, waterFrequency };
    data.push(newPlant);

    await this.handleFile.saveFile<IPlant[]>(this.fileTypePlant, data);
    return newPlant;
  }
}
