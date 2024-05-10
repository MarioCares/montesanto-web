import * as process from "process";

const get = async () => {
  const response = await fetch(`${process.env.API_URL}/publicacion`);
  return await response.json();
};

const getBySlug = async (slug: string | undefined) => {
  const response = await fetch(`${process.env.API_URL}/publicacion/${slug}`);
  return await response.json();
};

const getTags = async () => {
  const response = await fetch(`${process.env.API_URL}/publicacion/tags`);
  return await response.json();
};

const getCategories = async () => {
  const response = await fetch(`${process.env.API_URL}/publicacion/categorias`);
  return await response.json();
};

const getByCategories = async (category: string | undefined) => {
  const response = await fetch(
    `${process.env.API_URL}/publicacion/categoria/${category}`
  );
  return await response.json();
};

const getByTags = async (tag: string | undefined) => {
  const response = await fetch(`${process.env.API_URL}/publicacion/tag/${tag}`);
  return await response.json();
};

export const PostService = {
  get,
  getBySlug,
  getTags,
  getByTags,
  getCategories,
  getByCategories,
};
