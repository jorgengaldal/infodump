const table = document.getElementById("mailtablebody");

fetch("util/kommuneliste/kommuner.json")
.then(response => response.json())
.then(result => {
    result.forEach(kommune => {
        let row = document.createElement("tr")
        let navn = document.createElement("td")
        let mailadresse = document.createElement("td")
        let nettsidecell = document.createElement("td")
        let nettside = document.createElement("a")
        nettsidecell.appendChild(nettside)
        
        navn.textContent = kommune.navn
        row.appendChild(navn)

        if (kommune.mail == "Placeholder") {
            mailadresse.textContent = "Har ikke postboks"
        } else {
            mailadresse.textContent = kommune.mail
        }
        row.appendChild(mailadresse)

        nettside.textContent = kommune.url
        nettside.href = kommune.url
        nettside.target = "_blank"
        row.appendChild(nettsidecell)

        table.appendChild(row)
        
    });
})