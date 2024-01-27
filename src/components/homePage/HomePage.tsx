import * as Html from "@kitajs/html";
import BaseHtml from "@/components/baseHtml";

export function HomePage() {
  return (
    <BaseHtml title="Home">
      <body>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
        </nav>
        <header class="container">
          <h1>Greetings!</h1>
        </header>
        <main class="container">
          <ul>
            <li>cards</li>
            <li>envelopes</li>
            <li>stamps</li>
          </ul>
          <article>
            <hgroup>
              <h2>what a header</h2>
              <p>this is something special</p>
            </hgroup>
            <button class="mdc-button foo-button">
              <div class="mdc-button__ripple"></div>
              <span class="mdc-button__label">Button</span>
            </button>
            <script>
              mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));
            </script>
            <div class="mdc-data-table">
              <div class="mdc-data-table__table-container">
                <table
                  class="mdc-data-table__table"
                  aria-label="Dessert calories"
                >
                  <thead>
                    <tr class="mdc-data-table__header-row">
                      <th
                        class="mdc-data-table__header-cell"
                        role="columnheader"
                        scope="col"
                      >
                        Dessert
                      </th>
                      <th
                        class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric"
                        role="columnheader"
                        scope="col"
                      >
                        Carbs (g)
                      </th>
                      <th
                        class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric"
                        role="columnheader"
                        scope="col"
                      >
                        Protein (g)
                      </th>
                      <th
                        class="mdc-data-table__header-cell"
                        role="columnheader"
                        scope="col"
                      >
                        Comments
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    hx-get="/table-data"
                    hx-trigger="load"
                    class="mdc-data-table__content"
                  ></tbody>
                </table>
              </div>
            </div>
          </article>
        </main>
        <footer class="container">
          <h1>Thank you for visiting!</h1>
        </footer>
      </body>
    </BaseHtml>
  );
}

export default HomePage;
