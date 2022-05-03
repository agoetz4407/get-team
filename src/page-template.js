const renderListItem = function(member) {
    switch(member.getRole()) {
        case 'Manager':
            return `Office Number: ${member.officeNumber}`
        case 'Engineer':
            return `Github: <a href="https://github.com/${member.github}">${member.github}</a>`
        case 'Intern':
            return `School: ${member.school}`
    }
}

const renderMemberRole = function(role) {
    switch(role) {
        case 'Manager':
            return `<i class="fa-solid fa-people-roof"></i>Manager`
        case 'Engineer':
            return `<i class="fa-solid fa-gears"></i>Engineer`
        case 'Intern':
            return `<i class="fa-solid fa-people-roof"></i>Intern`
    }
}

const renderTeam = function(team) {
    const teamHtmlArr = []
    team.forEach(member => {
        teamHtmlArr.push(`
        <div class="card">
            <div class="card-header">
                <h2>${member.name}</h2>
                <h3>${renderMemberRole(member.getRole())}</h3>
            </div>
            <div class="card-body">
                <ul class="card-list">
                  <li>ID: ${member.id}</li>
                  <li>Email: <a href="mailto:${member.email}">${member.email}</a></li>
                  <li>${renderListItem(member)}</li>
                </ul>    
            </div>
        </div>
        `)
    })
    return teamHtmlArr.join('\n')
}


const generatePage = function(team) {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>

        <header>
            <h1>My Team</h1>
        </header>

        <section class="container">
            ${renderTeam(team)}
        </section>

    </body>
    </html>
    `
}

module.exports = generatePage