const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function question(prompt) {
  return new Promise(resolve => rl.question(prompt, answer => resolve(answer)));
}

const employees = [
  { name: 'Alice', id: 'E101' },
  { name: 'Bob', id: 'E102' },
  { name: 'Charlie', id: 'E103' }
];

function showMenu() {
  console.log('\nEmployee Management System');
  console.log('1. Add Employee');
  console.log('2. List Employees');
  console.log('3. Remove Employee');
  console.log('4. Exit\n');
}

function listEmployees() {
  if (employees.length === 0) {
    console.log('\nNo employees found.');
    return;
  }
  console.log('\nEmployee List:');
  employees.forEach((emp, idx) => {
    console.log(`${idx + 1}. Name: ${emp.name}, ID: ${emp.id}`);
  });
}

async function addEmployee() {
  const name = (await question('Enter employee name: ')).trim();
  const id = (await question('Enter employee ID: ')).trim();
  employees.push({ name, id });
  console.log(`Employee ${name} (ID: ${id}) added successfully.`);
}

async function removeEmployee() {
  const id = (await question('Enter employee ID to remove: ')).trim();
  const index = employees.findIndex(emp => emp.id === id);
  if (index === -1) {
    console.log('Employee not found.');
  } else {
    const removed = employees.splice(index, 1)[0];
    console.log(`Employee ${removed.name} (ID: ${removed.id}) removed successfully.`);
  }
}

async function main() {
  while (true) {
    showMenu();
    const choice = await question('Enter your choice: ');

    if (choice === '1') await addEmployee();
    else if (choice === '2') listEmployees();
    else if (choice === '3') await removeEmployee();
    else if (choice === '4') {
      console.log('Goodbye!');
      rl.close();
      break;
    } else {
      console.log('Invalid choice. Try again.');
    }
  }
}

main();
