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
              hx-swap="innerHTML show:top settle:1s"
            />
            <div style="display: flex; flex: 1; overflow: auto;">
              <table>
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
/*
            <button class="mdc-button foo-button">
              <div class="mdc-button__ripple"></div>
              <span class="mdc-button__label">Button</span>
            </button>
            <script>
              mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));
            </script>
	    */

export default HomePage;
