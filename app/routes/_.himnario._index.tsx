import PageHeader from "~/components/ui/PageHeader";
import { Link, MetaFunction, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { SongService } from "~/services/SongService";
import { ISong } from "~/interface/song.interface";

export const meta: MetaFunction = () => {
  return [
    { title: `Himnos, Coros y Alabanzas - MonteSanto.cl` },
    {
      name: "description",
      content: "Bienvenido a nuestra web",
    },
  ];
};

export const loader = async () => {
  const [songs] = await Promise.all([await SongService.get()]);
  return json({ songs });
};

export default function HimnarioPage() {
  const { songs } = useLoaderData<typeof loader>() as {
    songs: ISong[];
  };

  return (
    <>
      <PageHeader
        title={"Himnario Monte Santo"}
        page={"Himnos, Coros y Alabanzas"}
      />
      <section className="section-sm">
        <div className="container content">
          <div className="columns is-align-items-center is-justify-content-center">
            <div className={`column is-9-widescreen is-10-desktop`}>
              <div className="widget widget-about">
                El propósito de este himnario es sólo mantener un registro de
                los Coros, Himnos y alabanzas que cantamos en los cultos. Todos
                son de dominio popular y se cantan en muchas iglesias, algunos
                de ellos incluso por varias generaciones y han sido de bendición
                para muchas vidas.
              </div>
              <h1 className="title is-3">Índice</h1>
              <table className="table">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th className="has-text-right">Número</th>
                  </tr>
                </thead>
                <tbody>
                  {songs.map((song: ISong) => (
                    <tr key={song.id}>
                      <td>
                        <Link to={`/himnario/${song.number}`}>
                          {song.title}
                        </Link>
                      </td>
                      <td className="has-text-right">{song.number}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
