function generateHTML (data) {
    let markDown = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
            <title>Team Profile</title>
        </head>
        <body>
            <header>My Team</header>
            <div class= "container">
            <div class="row">
                ${generateCards(data)}
                   
                </div>
            </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

        </body>
        </html>`
        return markDown
}

function createCards(teamProf) {
    let card = `
        
        <div class="text-center card"> 
            <div class="card-header">${teamProf.getRole()}
        </div>
       
        <div class="card-body">
            <h5 class="card-title">${teamProf.name}</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${teamProf.id}</li>
            <li class="list-group-item">${teamProf.email}</li>
            <li class="list-group-item">${teamProf.extra}</li>
        </ul>
        </div>`
        return card
}
module.exports - {generateHTML, createCards}