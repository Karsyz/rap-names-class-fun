document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const rapperName = document.querySelector('input').value
    try{
        const response = await fetch(`https://rap-names-api-karsyz.herokuapp.com/api/${rapperName}`)
        const data = await response.json()

        document.querySelector('#rapName').innerText = data.rapName
        document.querySelector('#age').innerText = data.age
        document.querySelector('#birthName').innerText = data.birthName
        document.querySelector('#birthLocation').innerText = data.birthLocation
        console.log(data)
    }catch(error){
        console.log(error)
    }
}