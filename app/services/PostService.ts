import * as process from "process";

const get = async (apiUrl: string) => {
  const response = await fetch(`${apiUrl}/publicacion`);
  return await response.json();
};

const getBySlug = async (slug: string | undefined, apiUrl: string) => {
  const response = await fetch(`${apiUrl}/publicacion/${slug}`);
  return await response.json();
};

const getTags = async (apiUrl: string) => {
  const response = await fetch(`${apiUrl}/publicacion/tags`);
  return await response.json();
};

const getCategories = async (apiUrl: string) => {
  const response = await fetch(`${apiUrl}/publicacion/categorias`);
  return await response.json();
};

const getByCategories = async (
  category: string | undefined,
  apiUrl: string
) => {
  const response = await fetch(`${apiUrl}/publicacion/categoria/${category}`);
  return await response.json();
};

const getByTags = async (tag: string | undefined, apiUrl: string) => {
  const response = await fetch(`${apiUrl}/publicacion/tag/${tag}`);
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
