// fetch(
//         "https://perenual.com/api/species-list?page=1&key=sk-6iV8645263d901b63737"
//       )
//         .then((response) => {
//           return response.json();
//         })
//         .then((responseData) => {
//           console.log(responseData);
//           const { data } = responseData;

//           const plantData = data.map(item => {
//             return {
//               commonName: item.common_name,
//               image: item.image,
//               sunlight: item.sunlight,
//               watering: item.watering
//             }
//           });

//           console.log(plantData);

//           const plantList = plantData.map((item) => {
//             return `<li>${item.commonName} - ${item.image} - ${item.sunlight} - ${item.watering} </li>`;
//           });
//           document.querySelector("ul").innerHTML = plantList.join("");
//         })
//         .catch((error) => console.log(error));