import { Elysia, t } from "elysia";
import { html } from "@elysiajs/html";
import { swagger } from "@elysiajs/swagger";
import * as Html from "@kitajs/html";
import UsersRoute from "@/components/usersRoute";
import TableData from "@/components/usersRoute/TableData";
import User from "@/components/user";

const app = new Elysia()
  .use(html())
  .use(swagger())
  .get("/", ({ set }) => {
    set.redirect = "/users";
  })
  .get(
    "/users",
    ({ query, headers }) => {
      const tees = new Set<string>();
      if (query.xstee) {
        tees.add("xstee");
      }
      if (query.stee) {
        tees.add("stee");
      }
      if (query.mtee) {
        tees.add("mtee");
      }
      if (query.ltee) {
        tees.add("ltee");
      }
      if (query.xltee) {
        tees.add("xltee");
      }
      if (query.xxltee) {
        tees.add("xxltee");
      }
      if (query.xxxltee) {
        tees.add("xxxltee");
      }

      console.log("tees", tees);
      console.log("query", query);

      if (headers["hx-request"]) {
        return (
          <TableData
            page={query?.page}
            size={query?.size}
            q={query?.q}
            tees={tees}
          />
        );
      }
      return <UsersRoute q={query?.q} tees={tees} />;
    },
    {
      query: t.Object({
        q: t.Optional(t.String()),
        size: t.Optional(t.Numeric()),
        page: t.Optional(t.Numeric()),
        xstee: t.Optional(t.Literal("on")),
        stee: t.Optional(t.Literal("on")),
        mtee: t.Optional(t.Literal("on")),
        ltee: t.Optional(t.Literal("on")),
        xltee: t.Optional(t.Literal("on")),
        xxltee: t.Optional(t.Literal("on")),
        xxxltee: t.Optional(t.Literal("on")),
      }),
      headers: t.Object({
        "hx-request": t.Optional(t.Literal("true")),
      }),
    }
  )
  .get("/users/:id", ({ params }) => {
    return <User id={params.id} />;
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
