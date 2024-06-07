import { Link, MetaFunction, useLoaderData } from "@remix-run/react";
import { ISong } from "~/interface/song.interface";
import { json, LoaderFunctionArgs } from "@remix-run/node";
import { SongService } from "~/services/SongService";
import PageHeader from "~/components/ui/PageHeader";
import { rn2br } from "~/utils/string";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const [song] = await Promise.all([
    await SongService.getByNumber(Number(params.number)),
  ]);
  return json({ song });
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    { title: `${data?.song.title} - MonteSanto.cl` },
    {
      name: "description",
      content: "Bienvenido a nuestra web",
    },
  ];
};

export default function SongPage() {
  const { song } = useLoaderData<typeof loader>() as { song: ISong };
  return (
    <>
      <PageHeader title={song.title} page={"Himnario Monte Santo"} />
      <section className="section-sm">
        <nav className={"level"}>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Canción Nº</p>
              <p className="title">{song.number}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Categoría</p>
              <Link
                to={`/himnario/categoria/${song.category}`}
                className="title"
              >
                {song.category}
              </Link>
            </div>
          </div>
        </nav>
        <div className="container content">
          <div className="columns is-align-items-center is-justify-content-center">
            <div className={`column is-9-widescreen is-10-desktop`}>
              <div
                className={"has-text-centered is-size-5"}
                dangerouslySetInnerHTML={{ __html: rn2br(song.body) }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
