//import { checkForName } from './nameChecker'

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if (Client.checkForName(formText)) {
        console.log("::: Form Submitted :::")
        fetch(`http://localhost:8081/summarize?url=${formText}`)
        .then(res => res.json())
        .then(function(res) {
            document.getElementById('results').innerHTML = `<h3>Summarize text:</h3>\n ${res.sentences}; </br></br><h3>Original Text:</h3>\n ${res.text} \n\n `
        })
        .catch(function (reason) {
            document.getElementById('results').innerHTML = reason;
        })
    }
    else {
        alert("Url not valid");
    }
}

export { handleSubmit }
