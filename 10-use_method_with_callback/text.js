import { writeFile } from "node:fs";
const text = "Questo è un testo di prova";

writeFile("message.txt", text, (err) => {
    if (err) throw err;
    console.log(`File saved with text: ${text}`);
});
