import * as process from "process";

const API_URL = process.env.API_URL ?? "localhost";

const get = async (limit: number, offset: number, category: string) => {
  const response = await fetch(
    `http://${API_URL}:4000/publicacion?limit=${limit}&offset=${offset}&category=${category}`
  );
  return await response.json();
};

const getBySlug = async (slug: string | undefined) => {
  const response = await fetch(`http://${API_URL}:4000/publicacion/${slug}`);
  return await response.json();
};

const getTags = async () => {
  const response = await fetch(`http://${API_URL}:4000/publicacion/tags`);
  return await response.json();
};

const getCategories = async () => {
  const response = await fetch(`http://${API_URL}:4000/publicacion/categorias`);
  return await response.json();
};

const getByCategories = async (category: string | undefined) => {
  const response = await fetch(
    `http://${API_URL}:4000/publicacion/categoria/${category}`
  );
  return await response.json();
};

const getByTags = async (tag: string | undefined) => {
  const response = await fetch(`http://${API_URL}:4000/publicacion/tag/${tag}`);
  return await response.json();
};

const getLastDominical = async () => {
  const response = await fetch(
    `http://${API_URL}:4000/publicacion/ultima-palabra`
  );
  return await response.json();
};

export const PostService = {
  get,
  getBySlug,
  getTags,
  getByTags,
  getCategories,
  getByCategories,
  getLastDominical,
};
