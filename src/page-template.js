const generateCard = data => {
    return `
    <section class="card">
    ${data.map(({ name, email, id }) => {
        return `
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <h6 class="card-subtitle mb-2">Manager</h6>
                <p>ID: ${id}</p>
                <p>Email: ${email}</p>
            </div>
        </section>
        `;
    })
    .join('')}
    `;
};

module.exports = (manager, engineer, intern) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    </head>
    
    <body>
        <header>
            <div class="container flex-row justify-space-between align-center py-3">
                <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
            </div>
        </header>

        <main class="container my-5">
            ${generateCard(manager)}
            ${generateCard(engineer)}
            ${generateCard(intern)}
        </main>
    </body>

    </html>
    `;
}