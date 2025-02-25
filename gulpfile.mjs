import { src, dest, series } from "gulp";
import zipGulp from "gulp-zip";
import path from "path";

import { deleteAsync } from "del";

// Função para deletar tudo dentro da pasta "dist"
export function clean() {
  return deleteAsync(["dist/**"]);
}

// Função para obter a data atual no formato dd-mm-yyyy
function getCurrentDate() {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Janeiro é 0!
  const year = now.getFullYear();
  return `${day}-${month}-${year}`;
}

// Tarefa para criar o ZIP da pasta dist
export function zip() {
  const dirname = path.basename(path.resolve());
  // Nome do arquivo ZIP gerado
  const zipFileName = `${dirname}_${getCurrentDate()}_SCORM-PKG.zip`;
  return src("dist/build/**/*") // Pega todos os arquivos dentro de dist
    .pipe(zipGulp(zipFileName)) // Cria o ZIP com o nome definido
    .pipe(dest("dist/")); // Salva o ZIP na raiz do projeto
}

// Para usar no package.json
export const beforeBuild = series(clean);
export const afterBuild = series(zip);

// Tarefa padrão para executar a criação do ZIP automaticamente após o build
export default series(zip);
