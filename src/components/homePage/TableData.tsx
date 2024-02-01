import * as Html from "@kitajs/html";
import { users } from "@/data/users";

export function TableData({
  page = 0,
  size = 30,
  search = "",
}: {
  page?: number;
  size?: number;
  search?: string;
}) {
  const supposedStartIdx = page * size;
  const supposedEndIdx = supposedStartIdx + size;

  const nextPageQueryParams = [`page=${page + 1}`, `size=${size}`];

  if (search) {
    nextPageQueryParams.push(`search=${search}`);
  }

  return (
    <>
      {users
        .filter(
          (user) =>
            !search ||
            user.fullName.toLowerCase().includes(search.toLowerCase())
        )
        .slice(supposedStartIdx, supposedEndIdx)
        .map((user, sliceIdx) => {
          const shouldRequestNextPage =
            supposedStartIdx + sliceIdx === supposedEndIdx - 1 && // is last in page
            users.length > supposedEndIdx; // is not the very last one
          return (
            <tr
              hx-get={
                shouldRequestNextPage &&
                `/table-data?${nextPageQueryParams.join("&")}`
              }
              hx-trigger={shouldRequestNextPage && "intersect once"}
              hx-swap={shouldRequestNextPage && "afterend"}
              class="mdc-data-table__row"
            >
              <th class="mdc-data-table__cell" scope="row">
                {user.fullName}
              </th>
              <td class="mdc-data-table__cell">{user.email}</td>
              <td class="mdc-data-table__cell">{user.city}</td>
              <td class="mdc-data-table__cell">{user.department}</td>
            </tr>
          );
        })}
    </>
  );
}

export default TableData;
