const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let employees = [];

function showMenu() {
  console.log("\n=== Employee Management System ===");
  console.log("1. Add Employee");
  console.log("2. List Employees");
  console.log("3. Remove Employee");
  console.log("4. Exit");

  rl.question("Choose an option: ", (option) => {
    switch (option) {
      case "1":
        addEmployee();
        break;
      case "2":
        listEmployees();
        break;
      case "3":
        removeEmployee();
        break;
      case "4":
        console.log("Goodbye!");
        rl.close();
        break;
      default:
        console.log("Invalid option");
        showMenu();
    }
  });
}

function addEmployee() {
  rl.question("Enter employee name: ", (name) => {
    rl.question("Enter employee ID: ", (id) => {
      employees.push({ name, id });
      console.log("✅ Employee added!");
      showMenu();
    });
  });
}

function listEmployees() {
  if (employees.length === 0) {
    console.log("No employees found.");
  } else {
    console.log("\nEmployee List:");
    employees.forEach((emp, index) => {
      console.log(`${index + 1}. ${emp.name} (ID: ${emp.id})`);
    });
  }
  showMenu();
}

function removeEmployee() {
  rl.question("Enter employee ID to remove: ", (id) => {
    const index = employees.findIndex((emp) => emp.id === id);
    if (index !== -1) {
      employees.splice(index, 1);
      console.log("🗑️ Employee removed.");
    } else {
      console.log("❌ Employee not found.");
    }
    showMenu();
  });
}

showMenu();
