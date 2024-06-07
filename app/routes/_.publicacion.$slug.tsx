import { Link, MetaFunction, useLoaderData } from "@remix-run/react";
import { PostService } from "~/services/PostService";
import { IPost, IPostTag } from "~/interface/post.interface";
import TextAndImage from "~/components/ui/sections/TextAndImage";
import { longDateToShorDate, publisherNameToAvatarImage } from "~/utils/string";
import { json, LoaderFunctionArgs } from "@remix-run/node";
import { BaseComment, LeaveComment } from "~/components/ui/article/Comment";
import useMonteUser from "~/hooks/useMonteUser";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const [post] = await Promise.all([await PostService.getBySlug(params.slug)]);
  return json({ post });
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    { title: `${data?.post.title} - MonteSanto.cl` },
    {
      name: "description",
      content: "Bienvenido a nuestra web",
    },
  ];
};

export default function PostPage() {
  const { post } = useLoaderData<typeof loader>() as { post: IPost };
  const user = useMonteUser();

  console.log({ user });

  return (
    <>
      <div className="py-4"></div>
      <section className="section">
        <div className="container">
          <div className="columns is-multiline is-desktop is-justify-content-center">
            <div className="column is-9-desktop">
              <article>
                <h1 className="h2">{post.title}</h1>
                <ul className="card-meta my-3 list-inline">
                  <li className="list-inline-item">
                    <Link
                      to={`/publicaciones/publicador/${post.publisher}`}
                      className="card-meta-author"
                    >
                      <img
                        alt={post.publisher}
                        src={`/images/avatar/${publisherNameToAvatarImage(
                          post.publisher
                        )}.png`}
                      />
                      <span>{post.publisher}</span>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <i className="ti-timer"></i>
                    {post.lectureTime}&apos; lectura
                  </li>
                  <li className="list-inline-item">
                    <i className="ti-calendar"></i>
                    {longDateToShorDate(post.postAt)}
                  </li>
                  <li className="list-inline-item">
                    <ul className="card-meta-tag list-inline">
                      {post.PostTags.map((tag: IPostTag) => (
                        <li key={tag.id} className="list-inline-item">
                          <Link to={`/publicaciones/tag/${tag.description}`}>
                            {tag.description}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
                <TextAndImage
                  imageAlign={"left"}
                  img={
                    <img
                      src={`https://unsplash.it/1600/800.webp?random=${post.id}`}
                      className="card-img"
                      alt="post-thumb"
                    />
                  }
                >
                  <div
                    className="content"
                    dangerouslySetInnerHTML={{ __html: post.introduction }}
                  />
                </TextAndImage>
                <div
                  className="content"
                  dangerouslySetInnerHTML={{ __html: post.body }}
                />
                <div className="widget mt-6">
                  <nav className="level">
                    <div className="level-item has-text-centered">
                      <div>
                        <p className="heading">Escritor</p>
                        <p className="title">{post.originalAuthor}</p>
                      </div>
                    </div>
                    <div className="level-item has-text-centered">
                      <div>
                        <p className="heading">Publicado en</p>
                        <p className="title">
                          {post.originallyPublish ? (
                            <a
                              rel="noreferrer"
                              href={post.originallyPublish}
                              target="_blank"
                            >
                              <span className="icon-text">
                                <span className="icon">
                                  <i className="ti-link"></i>
                                </span>
                                <span>Visitar</span>
                              </span>
                            </a>
                          ) : (
                            "La Biblia"
                          )}
                        </p>
                      </div>
                    </div>
                  </nav>
                </div>
              </article>
            </div>

            <div className="column is-9-desktop">
              <div className="mb-5 border-top pt-5">
                <h3 className="mb-5">Comentarios</h3>
                <BaseComment
                  comment={{
                    postedAt: "now",
                    text: "text",
                    likes: 1,
                    dislikes: 2,
                    userName: "Mario",
                    email: "mario@",
                    id: 1,
                  }}
                />
                <BaseComment
                  comment={{
                    postedAt: "now",
                    text: "text",
                    likes: 1,
                    dislikes: 2,
                    userName: "Mario",
                    email: "mario@",
                    id: 1,
                  }}
                />
              </div>

              <div className="pt-5">
                {user ? (
                  <>
                    <h3 className="mb-5">Deja un comentario</h3>
                    <LeaveComment />
                  </>
                ) : (
                  <>
                    <h1 className="title is-3">
                      ¿Quieres dejar un comentario?
                    </h1>
                    <a href={"/login"} className="button is-link">
                      Ingresar
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
