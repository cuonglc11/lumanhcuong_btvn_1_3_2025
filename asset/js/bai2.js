const columns = ["name", "email", "phone", "age", "gender", "hobbies"];
const listUser = [];
document.getElementById("fromUser").addEventListener("submit", function (e) {
  e.preventDefault();
  const from = new FormData(e.target);
  const data = [];
  columns.forEach((item) => {
    data[item] = from.get(item);
  });
  listUser.push(data);
  load();
  document.getElementById("fromUser").reset();
});
function load() {
  document.getElementById("listUser").innerHTML = "";
  listUser.forEach((item) => {
    let hobbie = "";
    switch (Number(item.hobbies)) {
      case 1:
        hobbie = "Nghe nhạc";
        break;
      case 2:
        hobbie = "ăn uống";
        break;
      default:
        break;
    }
    document.getElementById("listUser").innerHTML += `
        <tr>
        ${columns
          .map((column) => {
            if (column == "hobbies") {
              return `<td>${hobbie}</td>`;
            }
            if (column == "gender") {
              return `<td>${item['gender'] == 1 ? 'Nam' : 'Nữ'}</td>`;
            }
            return `<td>${item[column]}</td>`;
          }).join("\n")}
        </tr>`;
  });
}
