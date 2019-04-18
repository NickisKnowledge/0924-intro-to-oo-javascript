// code createUser() fn here 

// using ES6

class User {
  static all = []

  constructor(username, age, hobby) {
    this.username = username;
    this.age = age; 
    this.hobby = hobby;

    User.all.push(this);
  }

  description () {
  //   return `
  //   <tr>
  //     <td>User ${this.username} is ${this.age} and likes to ${this.hobby}</td>
  
  //   </tr>
  // `;

  return `
  <tr>
    <td>${this.username} </td>
    <td>${this.age} </td>
    <td>${this.hobby}</td>
  </tr>
`;
  }

  static list() {
    let list = document.getElementById('list');
    list.innerHTML = '';
    this.all.forEach(el => {
      list.innerHTML+= el.description();
    })
  }
}


function createUser(){
  // let user1 = {
  //   username: "Henry", 
  //   age: 22, 
  //   hobby: 'play instruments'
  // }

  // grab data from form
  let name = document.getElementById('username').value;
  let lifeNumber = document.getElementById('age').value;
  let interest = document.getElementById('hobby').value;

  // create user object
  let user1 = new User(name, lifeNumber, interest)
  // let user2 = new User('JS Love', 21, 'coding in JavaScript')

  // clear form
  document.getElementById('username').value = '';
  document.getElementById('age').value = '';
  document.getElementById('hobby').value = '';

  User.list();

}