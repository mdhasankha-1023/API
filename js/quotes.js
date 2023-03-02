const blockQuotes = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuotes(data))
}

const displayQuotes = quote => {
    const uiInterface = document.getElementById('quotes');
    // console.log(quote)
    uiInterface.innerHTML = quote.quote;
}



blockQuotes();