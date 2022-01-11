// const url = "http://localhost:3000/componentstatus"; 

// window.onload = function () {  
//   console.log("started the application >>>");
//   getComponentStatus(url);
// };

// let array = [];
// let filterarray =[];
// let newstring;
// const getComponentStatus = (url) => {    
// fetch(url)
//     .then((response) => {
//       return response.text();
//     })   
//     .then((data) => {
//       //console.log(data);      
//       viewstatus(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// const viewstatus = (data) =>{ 
//     array = data.split("\n");
//     //newstring = array.join('');
//     //filterarray = array.split(',');
//     document.getElementById('BasicFR56').value = array[3];
//     document.getElementById('Collation56').value = array[2];
//     document.getElementById('BasicFR1').value = array[1];
//     document.getElementById('Collation').value = array[0];
//     document.getElementById('Conveyer').value = array[4];
//     console.log(array);

// }

