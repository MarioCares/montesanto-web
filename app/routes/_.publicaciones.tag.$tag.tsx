import Sidebar from "~/components/Index/Sidebar";

import { PostService } from "~/services/PostService";
import { useLoaderData } from "@remix-run/react";
import { IPost } from "~/interface/post.interface";
import { RecentPostCard } from "~/components/ui/article/Card";
import PostNotFound from "~/components/ui/PostNotFound";
import { json, LoaderFunctionArgs } from "@remix-run/node";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const [posts, tags, categories] = await Promise.all([
    await PostService.getByTags(params.tag),
    await PostService.getTags(),
    await PostService.getCategories(),
  ]);
  return json({ posts, tag: params.tag, tags, categories });
};

export default function PostByTagPage() {
  const { posts, tag } = useLoaderData<typeof loader>() as {
    posts: IPost[];
    tag: string;
  };

  return (
    <>
      <section className="section">
        <div className="py-4"></div>
        <div className="container">
          <div className="columns is-multiline is-desktop">
            <div className="column is-8-desktop">
              <h1 className="h2 mb-5">
                Publicaciones encontradas bajo tag <mark>{tag}</mark>
              </h1>
              {posts.length ? (
                posts.map((post: IPost) => (
                  <RecentPostCard key={post.slug} post={post} isFeatured />
                ))
              ) : (
                <PostNotFound />
              )}
            </div>
            <Sidebar />
          </div>
        </div>
      </section>
    </>
  );
}
