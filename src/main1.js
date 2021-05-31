document.querySelector("#submit").addEventListener(
  "click",
  () => {
    let obj = {};
    const api =
      "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=" +
      district.value +
      "&date=31-05-2021";
    fetch(api)
      .then((response) => response.json())
      .then((json) => {
        this.obj = json;
        console.log(this.obj.sessions);
        if (this.obj.sessions.length) {
          for (let i = 1; i <= this.obj.sessions.length; i++) {
            const display = this.obj.sessions
              .map((item) => {
                return `<table>
                      <tr><td>${item.name}</td>
                      <td>${item.vaccine}</td>
                      <td>${item.min_age_limit.toString()}</td>
                      <td>${item.available_capacity_dose1.toString()}<td>
                      <td>${item.available_capacity_dose2.toString()}<td>
                      </tr>
                      </table>`;
              })
              .join("");
            document.querySelector("#table").innerHTML = display;
          }
        }
      });
  },
  false
);
