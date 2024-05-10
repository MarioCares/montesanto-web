import Sidebar from "~/components/Index/Sidebar";
import { PostService } from "~/services/PostService";
import { useLoaderData } from "@remix-run/react";
import { IPost } from "~/interface/post.interface";
import RecentPostCard from "~/components/ui/article/Card";
import PostNotFound from "~/components/ui/PostNotFound";
import { json, LoaderFunctionArgs } from "@remix-run/node";

export const loader = async ({ context, params }: LoaderFunctionArgs) => {
  const api_url = "context.cloudflare.env.API_URL";
  const [posts, tags, categories] = await Promise.all([
    await PostService.getByCategories(params.category, api_url),
    await PostService.getTags(api_url),
    await PostService.getCategories(api_url),
  ]);
  return json({ posts, category: params.category, tags, categories });
};

export default function PostByCategoryPage() {
  const { posts, category, categories, tags } = useLoaderData<
    typeof loader
  >() as {
    posts: IPost[];
    category: string;
    tags: string[];
    categories: { [key: string]: number };
  };

  return (
    <>
      <section className="section">
        <div className="py-4"></div>
        <div className="container">
          <div className="columns is-multiline is-desktop">
            <div className="column is-8-desktop">
              <h1 className="h2 mb-5">
                Publicaciones encontradas bajo categoría <mark>{category}</mark>
              </h1>
              {posts.length ? (
                posts.map((post: IPost) => (
                  <RecentPostCard key={post.slug} post={post} />
                ))
              ) : (
                <PostNotFound />
              )}
            </div>
            <Sidebar categories={categories} tags={tags} />
          </div>
        </div>
      </section>
    </>
  );
}
