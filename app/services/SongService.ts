import * as process from "process";

const API_URL = process.env.API_URL ?? "localhost";

const get = async () => {
  const response = await fetch(`http://${API_URL}:4000/himnario`);
  return await response.json();
};

const getByNumber = async (number: number) => {
  const response = await fetch(`http://${API_URL}:4000/himnario/${number}`);
  return await response.json();
};

export const SongService = {
  get,
  getByNumber,
};
