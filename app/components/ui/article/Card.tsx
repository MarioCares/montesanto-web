import { IPost, IPostTag } from "~/interface/post.interface";
import { Link } from "@remix-run/react";
import {
  cropLargeText,
  longDateToShorDate,
  publisherNameToAvatarImage,
} from "~/utils/string";

type RecentPostCardProps = {
  post: IPost;
  isFeatured: boolean;
};

export function RecentPostCard({ post, isFeatured }: RecentPostCardProps) {
  return (
    <article className="card mb-5">
      <div className="post-slider">
        <img
          src={`https://unsplash.it/860/430.webp?random=${post.id}`}
          className="card-img-top"
          alt="post-thumb"
        />
      </div>
      <div className="card-body">
        <h3 className="mb-3">
          <Link className="post-title" to={`/publicacion/${post.slug}`}>
            {isFeatured ? post.subtitle : post.title}
          </Link>
        </h3>
        <ul className="card-meta list-inline">
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
        <div className="content">
          <div
            dangerouslySetInnerHTML={{
              __html: isFeatured
                ? `${cropLargeText(post.introduction, 15)}...`
                : post.introduction,
            }}
          />
        </div>
        <Link
          to={`/publicacion/${post.slug}`}
          className="btn btn-outline-primary"
        >
          Leer más
        </Link>
      </div>
    </article>
  );
}

type FeaturedPostCardProps = {
  post: IPost;
};

export function FeaturedPostCard({ post }: FeaturedPostCardProps) {
  return (
    <article className="card mb-5">
      <div className="card-body is-flex">
        <img
          alt={""}
          className="card-img-sm"
          src={`https://unsplash.it/860/430.webp?random=${post.id}`}
        />
        <div className="ml-3">
          <h4>
            <Link to={post.slug} className="post-title">
              {post.title}
            </Link>
          </h4>
          <ul className="card-meta mt-2">
            <li className="list-inline-item mb-0">
              <i className="ti-calendar"></i>
              {longDateToShorDate(post.postAt)}
            </li>
            <li className="list-inline-item mb-0">
              <i className="ti-timer"></i>
              {post.lectureTime}&apos; lectura
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
