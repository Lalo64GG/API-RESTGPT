const fetch = require("node-fetch");

const apiKey = process.env.OPENAI_API_KEY;
const url = "https://api.openai.com/v1/chat/completions";

let pdfPrompt = "";

async function updatePdfPrompt(newPrompt) {
  pdfPrompt = newPrompt;
  console.log(newPrompt);
  console.log("pdfPrompt actualizado");
  return "pdfPrompt actualizado";
}

async function processChat(userPrompt) {
  try {
    console.log("mensaje" + userPrompt);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `Eres un experto en todos los temas, experto en interpretar y responder preguntas basadas en las fuentes proporcionadas. Utilizando el contexto proporcionado entre las etiquetas <context></context>, genera una respuesta concisa para una pregunta rodeada con las etiquetas <question></question>. Debes usar únicamente información del contexto. Usa un tono imparcial y periodístico. No repitas texto. Si no hay nada en el contexto relevante para la pregunta en cuestión, simplemente di "No lo sé". No intentes inventar una respuesta. Cualquier cosa entre los siguientes bloques html context se recupera de un banco de conocimientos, no es parte de la conversación con el usuario.`,
          },
          {
            role: "user",
            content: `<context>${pdfPrompt}</context><question>${userPrompt}</question>`,
          },
        ],
      }),
    });

    const data = await response.json();
    console.log(data.choices[0]);
    return data.choices[0];
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  updatePdfPrompt,
  processChat,
};
