import * as Html from "@kitajs/html";
import Layout from "@/components/layout";

export function HomePage() {
  return (
    <Layout title="Home">
      <body style="height: 100vh; display: flex;">
        <main class="container-fluid" style="display: flex; flex: 1;">
          <article style="display: flex; flex-direction: column; flex: 1;">
            <input
              type="search"
              name="search"
              placeholder="search for users..."
              hx-get="/table-data"
              hx-trigger="input changed delay:500ms, search"
              hx-target="#table-body"
              hx-swap="innerHTML scroll:#table-container:top"
            />
            <div id="table-container" style="display: flex; overflow: auto;">
              <table style="table-layout: fixed;">
                <thead style="position: sticky; top: 0;">
                  <tr>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Department</th>
                  </tr>
                </thead>
                <tbody
                  hx-get="/table-data"
                  hx-trigger="load"
                  id="table-body"
                  style="overflow: auto;"
                ></tbody>
              </table>
            </div>
          </article>
        </main>
      </body>
    </Layout>
  );
}

export default HomePage;
