import fs from "fs";

const htmx = fs.readFileSync("./src/static/htmx.org@1.9.10", "utf8");
const picoCSS = fs.readFileSync("./src/static/pico-1.5.11.css", "utf8");
const customCSS = fs.readFileSync("./src/static/custom.css", "utf8");

export function BaseHtml({
  title,
  children,
}: {
  title: string;
  children: JSX.Element | JSX.Element[];
}): JSX.Element {
  return `
  <!DOCTYPE html>
  <html lang="en" hx-boost="true">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script>${htmx}</script>
      <style>${picoCSS}</style>
      <style>${customCSS}</style>

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
