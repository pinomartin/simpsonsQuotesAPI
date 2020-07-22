const quoteDOM = document.getElementById('quote');
const characterDOM = document.getElementById('character');
const imgDOM = document.getElementById('img');
const buttonDOM = document.getElementById('button');
const url = 'https://thesimpsonsquoteapi.glitch.me/quotes'

const fetchApi = async ()  => {
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        const {image, character, quote } = data[0]
        
        imgDOM.setAttribute('src',image)
        characterDOM.innerText = character;
        quoteDOM.innerText = quote;
        
    }

    catch (error){
        console.log(error)
    }
}

buttonDOM.addEventListener('click', fetchApi)
