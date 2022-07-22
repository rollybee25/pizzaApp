import  sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
    projectId: "es56gb0i",
    dataset: 'production',
    apiVersion: "2022-07-22",
    useCdn: true,
    token: "skDsNePufOGifxsSrKxZ0KliUxBCCDgOiGLOqoJ4x56pgoFBbLlcRj5WWe5XyssOu2i883cCquDRp5ZlL10jKPiTkocCkBd4xQS6CQi8OQE2fUdPswezePDEAIS8n7zWjaXX0z7mlX6vTUuoM8YIq2rrKAqsROIPdfGnVv43Ftg68kVrLMIR"
})

const builder = ImageUrlBuilder (client);

export const urlFor = (source) => builder.image(source)