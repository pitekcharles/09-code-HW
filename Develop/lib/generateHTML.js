function generateHTML(employeeArray) {
    const headSection = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Page</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    </head>
    
    <body>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">${employeeArray[0]}</h1>
            </div>
        </div>
        <div class="container">
            <div class="row addCard">`;

    for (var i = 0; i < employeeArray.length; i++) {
        switch (employeeArray[i].getRole()) {
            case "Manager":
                headSection.push(
                    `<div class="col-md">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${employeeArray[i].name}</h5>
                            <h6 class="card-subtitle mb-2">${employeeArray[i].getRole()}</h6>
                            <p class="card-text">ID: ${employeeArray[i].id}</p>
                            <p>Email: <a href="${employeeArray[i].email}" class="card-link">${employeeArray[i].email}</a></p>
                            <p>Office number: ${employeeArray[i].officeNumber}</p>
                        </div>
                    </div>
                </div>`
                );
                break;
            case "Engineer":
                headSection.push(
                    `<div class="col-md">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${employeeArray[i].name}</h5>
                            <h6 class="card-subtitle mb-2">${employeeArray[i].getRole()}</h6>
                            <p class="card-text">ID: ${employeeArray[i].id}</p>
                            <p>Email: <a href="${employeeArray[i].email}" class="card-link">${employeeArray[i].email}</a></p>
                            <p>Email: <a href="github.com/${employeeArray[i].github}" class="card-link">${employeeArray[i].github}</a></p>
                        </div>
                    </div>
                </div>`
                );
                break;
            case "Intern":
                headSection.push(
                    `<div class="col-md">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${employeeArray[i].name}</h5>
                            <h6 class="card-subtitle mb-2">${employeeArray[i].getRole()}</h6>
                            <p class="card-text">ID: ${employeeArray[i].id}</p>
                            <p>Email: <a href="${employeeArray[i].email}" class="card-link">${employeeArray[i].email}</a></p>
                            <p>School: ${employeeArray[i].school}</p>
                        </div>
                    </div>
                </div>`
                );
                break;
        }
        headSection.push(
            `</div>
            </div>
        </body>
        
        </html>`
        );
        return headSection;
    }
}

module.exports = generateHTML;