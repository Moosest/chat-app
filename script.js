//const url = `ENTER YOUR URL HERE`;

async function download() {
    const response = await fetch(url)
    const json = await response.json()
    const element = document.querySelector('.messages')
    element.innerHTML = ''
    for (const item of json) {
        const message = item.message
        const name = item.name
        element.innerHTML += "<p>" + name + ": " + message +"</p>"
    }

}

setInterval(download, 3000)

const userName = prompt('What is your name?')
const element = document.querySelector('input')
element.addEventListener('keydown', function(event) {
    console.log(`Key pressed: ${event.key}`);
    console.log(`User input: ${event.target.value}`)
    if (event.key === 'Enter'){
        const message = {message : event.target.value, name: userName}
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
        })

    }
})