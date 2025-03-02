const listApp = [];
const columns = ["title", "startDate", "endDate", "category"];
document.getElementById("formJob").addEventListener("submit", function (e) {
  e.preventDefault();
  const from = new FormData(e.target);
  const data = {};
  columns.forEach((item) => {
    data[item] = from.get(item);
  })
  listApp.push(data);
  load();
  document.getElementById("formJob").reset();
});
function load() {
  document.getElementById("listJob").innerHTML = "";
  listApp.forEach((item) => {
    document.getElementById("listJob").innerHTML += `
            <tr>
            ${columns.map((column) => {
              if(column == 'startDate') {
                return `<td>${item.startDate} -> ${item.endDate}</td>`;
              }
              if( column == 'endDate') {
                return ''
              }
              return `<td>${item[column]}</td>`;
            }).join("\n")}
            </tr>
        `;
  });
}
           