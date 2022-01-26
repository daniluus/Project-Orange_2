
const requisicao = fetch("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=PTfWDFqsFUSuNAGd7bdBcwoVu6HDnXQ9")
    .then(response =>  response.json())
    .then(jsonBody => {

        document.querySelector("#app").innerHTML = jsonBody.response.docs[2].lead_paragraph
        
    })
   


