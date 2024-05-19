import PageHeader from "~/components/ui/PageHeader";
import { useState } from "react";
import Modal from "~/components/ui/Modal";
import { PdfViewer } from "~/components/ui/PdfViewer";
import { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: `Descarga de Contenido - MonteSanto.cl` },
    {
      name: "description",
      content: "Bienvenido a nuestra web",
    },
  ];
};

export default function DownloadsPage() {
  const [modalVidaVictoriaIsOpen, setModalVidaVictoriaIsOpen] =
    useState<boolean>(false);
  return (
    <>
      <PageHeader title={"Descargas"} page={"Descarga de recursos"} />
      <section className="section-sm">
        <div className="container content">
          <div className="columns is-align-items-center is-justify-content-center">
            <div className={`column is-9-widescreen is-10-desktop`}>
              <div className="box">
                <div className="columns">
                  <div className="column">
                    <div className="card is-shady">
                      <div className="card-image has-text-centered">
                        <i className="fa-regular fa-file-pdf"></i>
                      </div>
                      <div className="card-content">
                        <div className="content">
                          <h4>Una vida en victoria</h4>
                          <blockquote>
                            Quiero que este libro sea para que mis hijos y
                            nietos conozcan mis vivencias, como mi vida se fue
                            acrecentando en Dios, mi fe fue creciendo cada días
                            más y sepan que el camino del Señor es perfecto.
                          </blockquote>
                          <button
                            className="button is-info"
                            onClick={() =>
                              setModalVidaVictoriaIsOpen(
                                !modalVidaVictoriaIsOpen
                              )
                            }
                          >
                            <span>Leer</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {modalVidaVictoriaIsOpen && (
        <Modal
          onClose={() => setModalVidaVictoriaIsOpen(!modalVidaVictoriaIsOpen)}
        >
          <PdfViewer
            url={"/pdf/una_vida_en_victoria.pdf"}
            title={"Una vida en victoria"}
          />
        </Modal>
      )}
    </>
  );
}
