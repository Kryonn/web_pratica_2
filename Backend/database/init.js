import fs from "fs"
import db from "./database.js"

const schema = fs.readFileSync("./database/schema.sql", "utf8");

try {
    db.exec(schema);
    console.log("Conectado no SQLite com sucesso!");
} catch(err) {
    console.log("Erro ao conectar no SQLite: ", err.message);
}