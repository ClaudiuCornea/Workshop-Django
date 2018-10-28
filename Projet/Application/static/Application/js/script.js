let blockQuote = document.getElementsByClassName('quote');
let ctaQuote = document.getElementById('eventQuote');
let quotePar = document.createElement('p');
quotePar.className='quote__sentence';
let quoterPar = document.createElement('h3');
quoterPar.className ='quote__quoter';

const json = {
    "quotes":[
        {
            "quote":"He's a looney. Just like his tunes.",
            "name" : "Bats"
        },
        {
            "quote":"Retarded means slow. Was he slow?",
            "name" : "Doc"
        },
        {
            "quote":"Don't feed me any more lines from 'Monsters, Inc.' It pisses me off!",
            "name" : "Doc"
        },
        {
            "quote":"Buddy, Bats, Darling, they're all code names, nicknames. Monikers.",
            "name": "Buddy"
        },
        {
            "quote":"One more job and we're straight. Now I don't think I need to give you the speech about what would happen if you say no, how I could break your legs and kill everyone you love because you already know that, don't you?",
            "name": "Doc"
        },
        {
            "quote":"The moment you catch feelings is the moment you catch a bullet.",
            "name": "Bats"
        },
        {
            "quote":"Wait, wait, wait! I got to start the song over.",
            "name": "Baby"
        },
        {
            "quote":"The target is an armored truck at Perimeter Trust in Dunwoody, 10 a.m. sharp. The switch car’s ready, but you want me to hit the long state parking structure and get a heist vehicle to the states colder longer. It needs to be ready for an 8:30 start.",
            "name": "Baby"
        }
    ]
}





let jsonResponse = json;
randomQuote(jsonResponse)

function randomQuote(json){
  let quotes =json['quotes'];
  let length = quotes.length;
  let randomIndex = Math.floor(Math.random()*length);
  let quote = quotes[randomIndex];
  quotePar.textContent = quote['quote'];
  quoterPar.textContent = quote['name'];
  blockQuote[0].appendChild(quotePar);
  blockQuote[0].appendChild(quoterPar);
}