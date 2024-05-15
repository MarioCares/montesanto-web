import PageHeader from "~/components/ui/PageHeader";

export default function HimnarioPage() {
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
