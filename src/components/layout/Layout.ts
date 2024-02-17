const htmx = Bun.file("./node_modules/htmx.org/dist/htmx.min.js");
const picoCSS = Bun.file(
  "./node_modules/@picocss/pico/css/pico.indigo.min.css"
);
const customCSS = Bun.file("./src/static/custom.css");

export async function BaseHtml({
  title,
  children,
}: {
  title: string;
  children: JSX.Element | JSX.Element[];
}) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script>${await htmx.text()}</script>
      <style>${await picoCSS.text()}</style>
      <style>${await customCSS.text()}</style>

      <title>${title}</title>
    </head>
    <body style="height: 100vh; display: flex;">
      ${children}
    </body>
  </html>
`;
}
// <link href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css" rel="stylesheet">
// <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
// <script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script>

export default BaseHtml;
