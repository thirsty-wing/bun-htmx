import * as Html from "@kitajs/html";
import Layout from "@/components/layout";
import TableData from "./TableData";

export function UsersRoute({
  query,
  headers,
}: {
  query?: { q?: string; size?: number; page?: number };
  headers?: { "hx-request"?: boolean };
}) {
  // just return a table data page if it is a hx-request
  if (headers?.["hx-request"]) {
    return <TableData page={query?.page} size={query?.size} q={query?.q} />;
  }

  return (
    <Layout title="Home">
      <body style="height: 100vh; display: flex;">
        <main
          class="container-fluid"
          style="display: flex; flex-direction: column; flex: 1;"
        >
          <input
            type="search"
            name="q"
            placeholder="search for users..."
            hx-get={`/users`}
            hx-target="#table-body"
            hx-trigger="input changed delay:500ms, search"
            hx-swap="innerHTML scroll:#table-container:top"
            hx-push-url="true"
            value={query?.q}
          />
          <div id="table-container" style="display: flex; overflow: auto;">
            <table style="table-layout: fixed;">
              <thead style="position: sticky; top: 0;">
                <tr>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>City</th>
                  <th>Department</th>
                  <th>Shirt Size</th>
                </tr>
              </thead>
              <tbody id="table-body" style="overflow: auto;">
                <TableData q={query?.q} />
              </tbody>
            </table>
          </div>
        </main>
      </body>
    </Layout>
  );
}

export default UsersRoute;
