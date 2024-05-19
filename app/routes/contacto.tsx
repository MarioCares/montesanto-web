import PageHeader from "~/components/ui/PageHeader";
import {
  Form,
  MetaFunction,
  useActionData,
  useNavigation,
} from "@remix-run/react";
import { ActionFunctionArgs, json } from "@remix-run/node";
import { MessageService } from "~/services/MessageService";
import { IMessage } from "~/interface/message.interface";

export const meta: MetaFunction = () => {
  return [
    { title: `Envíanos un mensaje - MonteSanto.cl` },
    {
      name: "description",
      content: "Bienvenido a nuestra web",
    },
  ];
};

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const response = await MessageService.post({
    name: formData.get("name"),
    email: formData.get("email"),
    text: formData.get("message"),
  } as IMessage);
  return json(response);
}

export default function MessagePage() {
  const navigation = useNavigation();
  const actionData = useActionData<typeof action>() ?? {
    statusCode: 0,
    message: "",
  };
  return (
    <>
      <PageHeader title={"Contacto"} page={"Envíanos un mensaje!"} />
      <section className="section-sm">
        <div className="container content">
          <div className="columns is-align-items-center is-justify-content-center">
            <div className={`column is-9-widescreen is-10-desktop`}>
              <div className="widget widget-about">
                ¿Una petición de Oración? ¿Quieres contarnos un testimonio? O
                simplemente enviarnos un mensaje.
              </div>
              <div className={"box"}>
                {actionData.statusCode === 500 && (
                  <article className={"message is-danger"}>
                    <div className="message-header has-text-white">
                      Error al enviar comentario!
                    </div>
                    <div className="message-body">{actionData.message}</div>
                  </article>
                )}
                {actionData.statusCode === 200 && (
                  <article className={"message is-success"}>
                    <div className="message-header has-text-white">
                      {actionData.message}!
                    </div>
                    <div className="message-body">
                      Dependiendo del comentario (y si escribiste un email) te
                      escribiremos de vuelta!
                    </div>
                  </article>
                )}
                <Form method={"post"}>
                  <div className="field">
                    <label htmlFor="name" className="label">
                      Nombre
                    </label>
                    <div className="control">
                      <input
                        type="text"
                        className="input"
                        name="name"
                        required
                        placeholder={"Pedro Pereira"}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="email" className="label">
                      e-Mail
                    </label>
                    <div className="control">
                      <input type="email" className="input" name="email" />
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="message" className="label">
                      Mensaje
                    </label>
                    <div className="control">
                      <textarea
                        name="message"
                        id="message"
                        className="textarea"
                      ></textarea>
                    </div>
                  </div>
                  <button
                    className={`button is-primary ${
                      navigation.state === "submitting" ? "is-loading" : ""
                    }`}
                    type={"submit"}
                  >
                    Enviar
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
