import process from "process";
import { IMessage } from "~/interface/message.interface";
import { getErrorMessage } from "~/utils/Errors";

const API_URL = process.env.API_URL ?? "localhost";

const post = async (message: IMessage) => {
  try {
    const response = await fetch(`http://${API_URL}:4000/contacto`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
    return {
      statusCode: 200,
      message: "Mensaje enviado correctamente",
      data: await response.json(),
    };
  } catch (error: unknown) {
    console.error("Error at MessageService.post", error);
    return {
      statusCode: 500,
      message: `Error al enviar mensaje: ${getErrorMessage(error)}`,
    };
  }
};

export const MessageService = {
  post,
};
