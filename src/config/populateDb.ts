import * as fs from "fs-extra";

export class populateDB {

	async readJson() {
    //write data connection and population logic here
    fs.readJSON('./pokemon.json').then(data => {
      return data;
    }).catch(err => {
      return err;
    });
  }
}