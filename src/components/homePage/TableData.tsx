import * as Html from "@kitajs/html";

export function TableData({ page = 0 }: { page?: number }) {
  const shouldShowMore = page < 10;

  return (
    <>
      <tr class="mdc-data-table__row">
        <th class="mdc-data-table__cell" scope="row">
          Frozen yogurt
        </th>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">24</td>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">4.0</td>
        <td class="mdc-data-table__cell">Super tasty</td>
      </tr>
      <tr class="mdc-data-table__row">
        <th class="mdc-data-table__cell" scope="row">
          Ice cream sandwich
        </th>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">37</td>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
          4.33333333333
        </td>
        <td class="mdc-data-table__cell">I like ice cream more</td>
      </tr>
      <tr class="mdc-data-table__row">
        <th class="mdc-data-table__cell" scope="row">
          Eclair
        </th>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">24</td>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">6.0</td>
        <td class="mdc-data-table__cell">New filing flavor</td>
      </tr>
      <tr class="mdc-data-table__row">
        <th class="mdc-data-table__cell" scope="row">
          Frozen yogurt
        </th>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">24</td>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">4.0</td>
        <td class="mdc-data-table__cell">Super tasty</td>
      </tr>
      <tr class="mdc-data-table__row">
        <th class="mdc-data-table__cell" scope="row">
          Ice cream sandwich
        </th>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">37</td>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
          4.33333333333
        </td>
        <td class="mdc-data-table__cell">I like ice cream more</td>
      </tr>
      <tr class="mdc-data-table__row">
        <th class="mdc-data-table__cell" scope="row">
          Eclair
        </th>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">24</td>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">6.0</td>
        <td class="mdc-data-table__cell">New filing flavor</td>
      </tr>
      <tr class="mdc-data-table__row">
        <th class="mdc-data-table__cell" scope="row">
          Frozen yogurt
        </th>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">24</td>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">4.0</td>
        <td class="mdc-data-table__cell">Super tasty</td>
      </tr>
      <tr class="mdc-data-table__row">
        <th class="mdc-data-table__cell" scope="row">
          Ice cream sandwich
        </th>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">37</td>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
          4.33333333333
        </td>
        <td class="mdc-data-table__cell">I like ice cream more</td>
      </tr>
      <tr class="mdc-data-table__row">
        <th class="mdc-data-table__cell" scope="row">
          Eclair
        </th>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">24</td>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">6.0</td>
        <td class="mdc-data-table__cell">New filing flavor</td>
      </tr>
      <tr class="mdc-data-table__row">
        <th class="mdc-data-table__cell" scope="row">
          Frozen yogurt
        </th>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">24</td>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">4.0</td>
        <td class="mdc-data-table__cell">Super tasty</td>
      </tr>
      <tr class="mdc-data-table__row">
        <th class="mdc-data-table__cell" scope="row">
          Ice cream sandwich
        </th>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">37</td>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
          4.33333333333
        </td>
        <td class="mdc-data-table__cell">I like ice cream more</td>
      </tr>
      <tr
        hx-get={shouldShowMore ? `/table-data?page=${page + 1}` : undefined}
        hx-trigger={shouldShowMore ? "revealed" : undefined}
        hx-swap={shouldShowMore ? "afterend" : undefined}
        class="mdc-data-table__row"
      >
        <th class="mdc-data-table__cell" scope="row">
          Eclair
        </th>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">24</td>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">6.0</td>
        <td class="mdc-data-table__cell">New filing flavor</td>
      </tr>
    </>
  );
}

export default TableData;
