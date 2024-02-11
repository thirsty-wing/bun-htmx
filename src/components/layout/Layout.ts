const htmx = Bun.file("./src/static/htmx.org@1.9.10");
const picoCSS = Bun.file("./src/static/pico-1.5.11.css");
const customCSS = Bun.file("./src/static/custom.css");

export async function BaseHtml({
  title,
  children,
}: {
  title: string;
  children: JSX.Element | JSX.Element[];
}): Promise<JSX.Element> {
  return `
  <!DOCTYPE html>
  <html lang="en" hx-boost="true">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script>${await htmx.text()}</script>
      <style>${await picoCSS.text()}</style>
      <style>${await customCSS.text()}</style>

      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
      <script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script>
      <title>${title}</title>
    </head>
    ${children}
  </html>
`;
}
//<link href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css" rel="stylesheet">

export default BaseHtml;
