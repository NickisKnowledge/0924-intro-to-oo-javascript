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

  let user1 = new User('Henry', 22, 'play instruments')
  let user2 = new User('JS Love', 21, 'coding in JavaScript')

  let list = document.getElementById('list');
  list.innerHTML = `
    <tr>
      <td>${user1.description()}</td>
  
    </tr>
    <tr>
      <td>${user2.description()}</td>
    </tr>
  `

}