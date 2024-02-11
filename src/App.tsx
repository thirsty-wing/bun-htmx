import { Elysia, t } from "elysia";
import { html } from "@elysiajs/html";
import { swagger } from "@elysiajs/swagger";
import * as Html from "@kitajs/html";
import HomePage from "@/components/homePage";
import TableData from "@/components/homePage/TableData";

const app = new Elysia()
  .use(html())
  .use(swagger())
  .get("/", ({ html, query }) => html(<HomePage {...query} />), {
    query: t.Object({ q: t.Optional(t.String()) }),
  })
  .get("/table-data", ({ html, query }) => html(<TableData {...query} />), {
    query: t.Object({
      q: t.Optional(t.String()),
      size: t.Optional(t.Numeric()),
      page: t.Optional(t.Numeric()),
    }),
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
