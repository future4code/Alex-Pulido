import * as fs from "fs";
export class JSONFileManager {
  private fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName;
  }

  public getObjectFromFile(): any {
    const fileBuffer: Buffer = fs.readFileSync(this.fileName);
    const fileText: string = String(fileBuffer);
    return fileText ? JSON.parse(fileText) : [];
  }

  public writeOnjectToFile(data: any): void {
    const upDateData: string = JSON.stringify(data, null, 2);
    fs.writeFileSync(this.fileName, upDateData);
  }
}
