import { JSONFileManager } from "./JSONFileManager";
import { Student } from "./Student";

export class LabenuSystem {
  private fileManager: JSONFileManager = new JSONFileManager("");
  private estudante: Student[] = [];

  constructor() {
    const fileData: any = this.fileManager.readFile();
    this.estudante = fileData.map((item: any) => {
      return new Student(
        item.id,
        item.name,
        item.email,
        item.birthDate,
        item.hobbies
      );
    });
  }

  createAluno(
    id: string,
    name: string,
    email: string,
    birthDate: string,
    hobbies: string
  ): void {
    // this.fileManager.setFilePath("./students.json");
    this.estudante.push(new Student(id, name, email, birthDate, hobbies));
    this.fileManager.writeFile(this.estudante);
  }
}
