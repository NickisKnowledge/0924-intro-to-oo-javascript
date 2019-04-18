// code createUser() fn here 

// using Function syntax

function User(username, age, hobby) {
  this.username = username;
  this.age = age;
  this.hobby = hobby;
}

User.prototype.description = function() {
  // console.log(`User ${this.username} is ${this.age} and likes to ${this.hobby}`)
  return `User ${this.username} is ${this.age} and likes to ${this.hobby}`
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

  let list = document.getElementById('list');
  list.innerHTML = `
    <tr>
      <td>${user1.description()}</td>
  
    </tr>
  `

}