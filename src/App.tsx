import { Elysia, t } from "elysia";
import { html } from "@elysiajs/html";
import { swagger } from "@elysiajs/swagger";
import * as Html from "@kitajs/html";
import UsersRoute from "@/components/usersRoute";

const app = new Elysia()
  .use(html())
  .use(swagger())
  .get("/", ({ set }) => {
    set.redirect = "/users";
  })
  .get("/users", ({ html, ...props }) => html(<UsersRoute {...props} />), {
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
