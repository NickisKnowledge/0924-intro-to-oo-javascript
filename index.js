// code createUser() fn here 

// using plain JS object

function createUser(){
  let user1 = {
    username: "Henry", 
    age: 22, 
    hobby: 'play instruments'
  }

  let list = document.getElementById('list');
  list.innerHTML = `
    <tr>
      <td>${user1.username}</td>
      <td>${user1.age}</td>
      <td>${user1.hobby}</td>
    </tr>
  `

}