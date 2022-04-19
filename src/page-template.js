// Generates the main html page, generateCard function is where the card function places the newly developed cards
const generatePage = employee => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
    </head>
    
    <body>
        <header>
            <div class="container bg-danger p-4">
                <h1 class="text-center text-white">My Team</h1>
            </div>
        </header>

        <section class="container p-2">
            <div class="row w-75 flex-wrap justify-content-center mx-auto">
                ${generateCard(employee)}
            </div>
        </section>
    </body>
</html>
    `;
}

const generateCard = data => {
    if (data.length === 1) { // If there is only one object, will always be the manager, it will run this if statement
        return `
        <div class="col p-2" style="min-width: 315px; max-width: 330px">
            <div class="card">
                <div class="card-body bg-primary">
                    <h3 class="card-title text-white">${data[0].getName()}</h3>
                    <h4 class="card-subtitle text-white">${employeeTitle(data[0])}</h4>
                </div>
                <div class="card-body">
                    <div class="border">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${data[0].getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${data[0].getEmail()}">${data[0].getEmail()}</a></li>
                            <li class="list-group-item">${employeeInfo(data[0])}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        `;
    }

    const employeeArr = [];

    data.forEach(employee => { // For any array with multiple objects, will run this forEach function
        const multiCard = `
        <div class="col p-2" style="min-width: 315px; max-width: 330px">
            <div class="card">
                <div class="card-body bg-primary">
                    <h3 class="card-title text-white">${employee.getName()}</h3>
                    <h4 class="card-subtitle text-white">${employeeTitle(employee)}</h4>
                </div>
                <div class="card-body">
                    <div class="border">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${employee.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                            <li class="list-group-item">${employeeInfo(employee)}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        `;
        employeeArr.push(multiCard); // Pushes each card into the array
    })
    return employeeArr.join(''); // Joins all the cards created and removes the comma that is normally in place in an array
}

// Function to place the correct role for each employee with their respective icon
const employeeTitle = data => {
    switch(data.getRole()) {
        case 'Manager':
            return `<i class="bi bi-cup"></i> Manager`;
        case 'Engineer':
            return `<i class="bi bi-eyeglasses"></i> Engineer`;
        case 'Intern':
            return `<i class="bi bi-mortarboard"></i> Intern`;
        default:
            return 'N/A'
    }
}

// Function to include unique information for each type of employee
const employeeInfo = data => {
    switch(data.getRole()) {
        case 'Manager':
            return `Office Number: ${data.getOfficeNumber()}`;
        case 'Engineer':
            return `GitHub: <a href="https://github.com/${data.getGithub()}" target="_blank">${data.getGithub()}</a>`;
        case 'Intern':
            return `School: ${data.getSchool()}`;
    }
}

module.exports = generatePage;