const url = "http://127.0.0.1:8000"

async function get_experiences()
{
    return await (await fetch(url + "/experiences")).json();
}

async function envoyer_experience()
{
    let titre = document.getElementById('recipient-title').value;
    let contenu = document.getElementById('contenu-text').value;
    let data = {
        'titre': titre,
        'contenu': contenu
    };
    let response = await fetch(url + "/experience", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (response.status == 201) {
        afficher_experiences(true);
    }
}

async function afficher_experiences(reload = false)
{

    if (reload) {
        const element = document.getElementById('liste-experiences');
        element.remove();
    }
    let expes = await get_experiences();
    listContainer = document.createElement('div')
    listContainer.id = "liste-experiences";

    document.getElementsByTagName('main')[0].appendChild(listContainer);
    for (i = 0; i < 5; ++i) {
        let div_expes = document.createElement('div');
        div_expes.className = "experience";
        titre = document.createElement('h2');
        titre.innerHTML = expes[i].titre;
        contenu = document.createElement('p');
        contenu.innerHTML = expes[i].contenu;
        div_expes.appendChild(titre);
        div_expes.appendChild(contenu);
        listContainer.appendChild(div_expes);
    }





}