import { Elysia, t } from "elysia";
import { html } from "@elysiajs/html";
import * as Html from "@kitajs/html";
import HomePage from "@/components/homePage";
import TableData from "@/components/homePage/TableData";

const app = new Elysia()
  .use(html())
  .get("/", ({ html }) => html(<HomePage />))
  .get(
    "/table-data",
    ({ html, query }) => html(<TableData page={query.page} />),
    {
      query: t.Object({
        page: t.Optional(t.Numeric()),
      }),
    }
  )
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
