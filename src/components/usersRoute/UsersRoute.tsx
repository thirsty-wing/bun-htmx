import * as Html from "@kitajs/html";
import Layout from "@/components/layout";
import TableData from "./TableData";

export function UsersRoute({
  query,
}: {
  query?: { q?: string; size?: number; page?: number };
}) {
  return (
    <Layout title="Home">
      <main
        class="container-fluid"
        style="display: flex; flex-direction: row; flex: 1; gap: 24px;"
      >
        <aside style="border-right: solid gray; width: 100px;">
          <nav>
            <ul>
              <a href="/users">Users</a>
            </ul>
          </nav>
        </aside>
        <div style="display: flex; flex-direction: column; flex: 1">
          <input
            type="search"
            name="q"
            placeholder="search for users..."
            hx-get={`/users`}
            hx-target="#table-body"
            hx-trigger="input changed delay:500ms, search"
            hx-swap="innerHTML scroll:#table-container:top"
            hx-replace-url="true"
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
        </div>
      </main>
    </Layout>
  );
}

export default UsersRoute;
