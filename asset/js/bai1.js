const listApp = [];
const columns = ["title", "startDate", "endDate", "category"];
document.getElementById("fromJob").addEventListener("submit", function (e) {
  e.preventDefault();
  const from = new FormData(e.target);
  const data = {};
  columns.forEach((item) => {
    data[item] = from.get(item);
  })
  listApp.push(data);
  load();
  document.getElementById("fromJob").reset();
});
function load() {
  document.getElementById("listJob").innerHTML = "";
  listApp.forEach((item) => {
    document.getElementById("listJob").innerHTML += `
            <tr>
                <td>${item.title}</td>
                <td>${item.startDate} -> ${item.endDate}</td>
                <td>${item.category}</td>
            </tr>
        `;
  });
}
