import * as Html from "@kitajs/html";
import Layout from "@/components/layout";

export function HomePage({ q = "" }: { q?: string }) {
  const filterProps = [];

  if (q) {
    filterProps.push(`q=${q}`);
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
            hx-get={`/table-data`}
            hx-target="#table-body"
            hx-trigger="input changed delay:500ms, search"
            hx-swap="innerHTML scroll:#table-container:top"
            hx-push-url="#"
            value={q}
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
              <tbody
                hx-get={`/table-data${
                  filterProps.length ? "?" : ""
                }${filterProps.join(",")}`}
                hx-trigger="load"
                id="table-body"
                style="overflow: auto;"
              ></tbody>
            </table>
          </div>
        </main>
      </body>
    </Layout>
  );
}

export default HomePage;
