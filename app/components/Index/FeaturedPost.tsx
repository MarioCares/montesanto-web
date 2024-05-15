import { useLoaderData } from "@remix-run/react";
import { IPost } from "~/interface/post.interface";
import { loader } from "~/routes/_index";
import { FeaturedPostCard, RecentPostCard } from "~/components/ui/article/Card";

export default function FeaturedPost() {
  const { lastDominical, featuredPosts } = useLoaderData<typeof loader>() as {
    lastDominical: IPost;
    featuredPosts: IPost[];
  };
  return (
    <section className="section-sm pb-0">
      <div className="container">
        <div className="columns is-desktop is-multiline">
          <div className="column is-4-widescreen is-6-desktop mb-5">
            <h2 className="h5 section-title">Palabra Dominical</h2>
            <RecentPostCard post={lastDominical} isFeatured />
          </div>
          <div className="column is-4-widescreen is-6-desktop mb-5">
            <h2 className="h5 section-title">Devocionales</h2>
            {featuredPosts.map((post: IPost) => (
              <FeaturedPostCard key={post.id} post={post} />
            ))}
          </div>

          <div className="column is-4-widescreen mb-5">
            <h2 className="h5 section-title">Canción Popular</h2>
            <article className="card">
              <div className="post-slider slider-sm">
                <img
                  src="https://demo.themefisher.com/reader-bulma/images/post/post-5.jpg"
                  className="card-img-top"
                  alt="post-thumb"
                />
              </div>
              <div className="card-body">
                <h3 className="h4 mb-3">
                  <a className="post-title" href="post-details.html">
                    How To Make Cupcakes and Cashmere Recipe At Home
                  </a>
                </h3>
                <ul className="card-meta list-inline">
                  <li className="list-inline-item">
                    <a href="author-single.html" className="card-meta-author">
                      <img
                        src="https://demo.themefisher.com/reader-bulma/images/kate-stone.jpg"
                        alt="Kate Stone"
                      />
                      <span>Kate Stone</span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <i className="ti-timer"></i>2 Min To Read
                  </li>
                  <li className="list-inline-item">
                    <i className="ti-calendar"></i>14 jan, 2020
                  </li>
                  <li className="list-inline-item">
                    <ul className="card-meta-tag list-inline">
                      <li className="list-inline-item">
                        <a href="tags.html">City</a>
                      </li>
                      <li className="list-inline-item">
                        <a href="tags.html">Food</a>
                      </li>
                      <li className="list-inline-item">
                        <a href="tags.html">Taste</a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <p>
                  It’s no secret that the digital industry is booming. From
                  exciting startups to …
                </p>
                <a href="post-details.html" className="btn btn-outline-primary">
                  Read More
                </a>
              </div>
            </article>
          </div>
          <div className="column is-12">
            <div className="border-bottom border-default"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
