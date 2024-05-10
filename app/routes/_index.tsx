import Banner from "~/components/Index/Banner";
import FeaturedPost from "~/components/Index/FeaturedPost";
import Sidebar from "~/components/Index/Sidebar";
import Post from "~/components/Index/Post";
import { PostService } from "~/services/PostService";
import { MetaFunction, useLoaderData } from "@remix-run/react";
import { IPost } from "~/interface/post.interface";
import { json } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "MonteSanto.cl" },
    {
      name: "description",
      content: "Bienvenido a nuestra web",
    },
  ];
};

export const loader = async () => {
  const [posts, tags, categories] = await Promise.all([
    await PostService.get(),
    await PostService.getTags(),
    await PostService.getCategories(),
  ]);
  return json({ posts, tags, categories });
};

// tema => https://github.com/themefisher/reader-bulma/tree/main

export default function Index() {
  const { posts } = useLoaderData<typeof loader>() as {
    posts: IPost[];
    tags: string[];
    categories: { [key: string]: number };
  };

  return (
    <>
      <Banner />
      <FeaturedPost />
      <section className="section-sm">
        <div className="container">
          <div className="columns is-multiline is-desktop is-justify-content-center">
            <Post posts={posts} />
            <Sidebar />
          </div>
        </div>
      </section>
    </>
  );
}
