import { Elysia, t } from "elysia";
import { html } from "@elysiajs/html";
import { swagger } from "@elysiajs/swagger";
import * as Html from "@kitajs/html";
import UsersRoute from "@/components/usersRoute";
import TableData from "@/components/usersRoute/TableData";

const app = new Elysia()
  .use(html())
  .use(swagger())
  .get("/", ({ set }) => {
    set.redirect = "/users";
  })
  .get(
    "/users",
    ({ html, query, headers }) => {
      if (headers["hx-request"]) {
        return html(
          <TableData page={query?.page} size={query?.size} q={query?.q} />
        );
      }
      return html(<UsersRoute query={query} />);
    },
    {
      query: t.Object({
        q: t.Optional(t.String()),
        size: t.Optional(t.Numeric()),
        page: t.Optional(t.Numeric()),
      }),
      headers: t.Object({
        "hx-request": t.Optional(t.Literal("true")),
      }),
    }
  )
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
