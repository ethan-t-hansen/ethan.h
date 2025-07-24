import fs from "fs";
import path from "path";

export async function getAllImages(dir: string): Promise<string[]> {
  const baseDir = path.join(process.cwd(), "public", dir);

  const files = fs
    .readdirSync(baseDir)
    .filter((file) => /\.(png|jpe?g|webp|svg)$/.test(file));

  return files.map((file) => `/${dir}/${file}`);
}