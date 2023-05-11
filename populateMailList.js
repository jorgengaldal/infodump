const table = document.getElementById("mailtablebody");

fetch("util/kommuneliste/kommuner.json")
.then(response => response.json())
.then(result => {
    result.forEach(kommune => {
        let row = document.createElement("tr")
        let navn = document.createElement("td")
        let mailadresse = document.createElement("td")
        let nettside = document.createElement("td")
        
        navn.textContent = kommune.navn
        nettside.textContent = kommune.url
        if (kommune.mail == "Placeholder") {
            mailadresse.textContent = "Har ikke epostadresse"
        } else {
            mailadresse.textContent = kommune.mail
        }
        row.appendChild(navn)
        row.appendChild(mailadresse)
        row.appendChild(nettside)

        table.appendChild(row)
        
    });
})