import { Student } from "./Student";
import { LabenuSystem } from "./Labenusystem";
import { JSONFileManager } from "./JSONFileManager";

const system: LabenuSystem = new LabenuSystem();

const action: string = process.argv[2];

switch (action) {
  case "createAluno":
    system.createAluno(
      process.argv[3],
      process.argv[4],
      process.argv[5],
      process.argv[6],
      process.argv[7]
    );

    break;

  default:
    break;
}
