const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  for (let developer of data) {
      console.log(developer);
  }
}

// 2. Add Data
function addData() {
  let name = prompt("Enter name:");
  let age = prompt("Enter age:");
  let profession = prompt("Enter profession:");
  
  let newData = { name: name, age: parseInt(age), profession: profession };
  data.push(newData);
}

// 3. Remove Admins
function removeAdmin() {
  let admins = data.filter(dev => dev.profession.toLowerCase() === 'admin');
  data = data.filter(dev => dev.profession.toLowerCase() !== 'admin');
  console.log("Removed Admins:", admins);
}

// 4. Concatenate Array
function concatenateArray() {
  let dummyArray = [
      { name: "dummy1", age: 30, profession: "designer" },
      { name: "dummy2", age: 25, profession: "developer" },
  ];

  let resultArray = data.concat(dummyArray);
  console.log("Concatenated Array:", resultArray);
}

// 5. Average Age
function averageAge() {
  let sum = data.reduce((acc, dev) => acc + dev.age, 0);
  let average = sum / data.length;
  console.log("Average Age:", average.toFixed(2));
}

// 6. Age Check
function checkAgeAbove25() {
  let isAbove25 = data.some(dev => dev.age > 25);
  console.log("At least one person is above 25:", isAbove25);
}

// 7. Unique Professions
function uniqueProfessions() {
  let professionsSet = new Set(data.map(dev => dev.profession));
  console.log("Unique Professions:", [...professionsSet]);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);
  console.log("Sorted by Age:", data);
}

// 9. Update Profession
function updateJohnsProfession() {
  let john = data.find(dev => dev.name.toLowerCase() === 'john');
  if (john) {
      john.profession = 'manager';
      console.log("John's profession updated to 'manager'");
  }
}

// 10. Profession Count
function getTotalProfessions() {
  let developers = data.filter(dev => dev.profession.toLowerCase() === 'developer');
  let admins = data.filter(dev => dev.profession.toLowerCase() === 'admin');
  console.log(`Total Developers: ${developers.length}, Total Admins: ${admins.length}`);
}
