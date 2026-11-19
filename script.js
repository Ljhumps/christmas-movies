
            document.addEventListener('DOMContentLoaded', () => {
                const movies = [

    // THE UNTOUCHABLES 🏆
    {
        title: "Die Hard (1988),",
        title1: "IMDB rating: 8.2,",
        title2: "Action. The Greatest Christmas Story Ever Told!",
        url: "https://www.imdb.com/title/tt0095016/"
    },
    {
        title: "Home Alone (1990),",
        title1: "IMDB rating: 7.7,",
        title2: "Christmas starts once this film begins. Essential!",
        url: "https://www.imdb.com/title/tt0099785/"
    },
    {
        title: "Home Alone 2: Lost in New York (1992),",
        title1: "IMDB rating: 6.9,",
        title2: "Exactly the same plot as the first film, but in New York - Enjoy!",
        url: "https://www.imdb.com/title/tt0104431/"
    },
    {
        title: "Elf (2003),",
        title1: "IMDB rating: 7.1,",
        title2: "Bye Buddy, hope you find your dad! Essential viewing!",
        url: "https://www.imdb.com/title/tt0319343/"
    },
    {
        title: "It's a Wonderful Life (1946),",
        title1: "IMDB rating: 8.6,",
        title2: "A story about capitalism, socialism, and suicide. Absolute classic!",
        url: "https://www.imdb.com/title/tt0038650/"
    },

    // NEW THIS YEAR 🎁
    {
        title: "The Man with the Bag (2026),",
        title1: "IMDB rating: Not rated yet! ",
        title2: "Arnie is Santa. That is all!",
        url: "https://www.imdb.com/title/tt16995302/"
    },
    {
        title: "Ebenezer (2026),",
        title1: "IMDB rating: 7.2 ",
        title2: "Johnny Depp is now so old he is playing Scrooge!",
        url: "https://www.imdb.com/title/tt38773219/"
    },
    {
        title: "A Dog's Perfect Christmas (2026),",
        title1: "IMDB rating: 6.5!",
        title2: "Christmas, family drama and dogs. Basically engineered to make you cry into the Quality Street!",
        url: "https://www.imdb.com/title/tt38515310/"
    },
    {
        title: "Guarding Stars (2026),",
        title1: "IMDB rating: 6.3 this will get lower!",
        title2: "A bodyguard meets a movie star at Christmas.",
        url: "https://www.imdb.com/title/tt6611324/"
    },
    {
        title: "Violent Night 2 (2026),",
        title1: "IMDB rating: Not rated yet! ",
        title2: "Santa is back and apparently still solving Christmas problems using extreme violence!",
        url: "https://www.imdb.com/title/tt27685647/"
    },

    // CLASSICS 🏛️
    {
        title: "Miracle on 34th Street (1947),",
        title1: "IMDB rating: 7.9,",
        title2: "Classic. The original, not the one with the annoying girl from Matilda!",
        url: "https://www.imdb.com/title/tt0039628/"
    },
    {
        title: "A Christmas Story (1983),",
        title1: "IMDB rating: 7.9,",
        title2: "This is a belter! Sometimes Christmas is about getting what you want!",
        url: "https://www.imdb.com/title/tt0085334/"
    },
    {
        title: "Scrooged (1988),",
        title1: "IMDB rating: 6.9,",
        title2: "Classic! A moody, sarcastic Bill Murray!",
        url: "https://www.imdb.com/title/tt0096061/"
    },
    {
        title: "White Christmas (1954),",
        title1: "IMDB rating: 7.6,",
        title2: "Classic. Have a dance with Bing Crosby!",
        url: "https://www.imdb.com/title/tt0047673/"
    },
    {
        title: "The Snowman (1982),",
        title1: "IMDB rating: 8.2,",
        title2: "A boy is kidnapped by a snowman. A Classic!",
        url: "https://www.imdb.com/title/tt0084701/"
    },

    // COMEDIES 😂
    {
        title: "Bad Santa (2003),",
        title1: "IMDB rating: 7.0,",
        title2: "A drunken, foul mouthed Christmas classic!",
        url: "https://www.imdb.com/title/tt0307987/"
    },
    {
        title: "National Lampoon's Christmas Vacation (1989),",
        title1: "IMDB rating: 7.5,",
        title2: "Comedy. Spend some time with the Griswold family!",
        url: "https://www.imdb.com/title/tt0097958/"
    },
    {
        title: "The Night Before (2015),",
        title1: "IMDB rating: 6.4,",
        title2: "A group of mates trying to re-capture their youth. I can relate.",
        url: "https://www.imdb.com/title/tt3530002/"
    },
    {
        title: "The Santa Clause (1994),",
        title1: "IMDB rating: 6.6,",
        title2: "Comedy. Underrated Christmas film!",
        url: "https://www.imdb.com/title/tt0111070/"
    },
    {
        title: "8-Bit Christmas (2021),",
        title1: "IMDB rating: 6.7,",
        title2: "Great film. An 80s nostalgia fest!",
        url: "https://www.imdb.com/title/tt11540284/"
    },

    // FAMILY 👨‍👩‍👧‍👦
    {
        title: "The Christmas Chronicles (2018),",
        title1: "IMDB rating: 7.0,",
        title2: "Kurt Russell as Santa Claus! Count me in!",
        url: "https://www.imdb.com/title/tt2990140/"
    },
    {
        title: "Spirited (2022),",
        title1: "IMDB rating: 6.6,",
        title2: "A Christmas musical with Ryan Reynolds and Will Ferrell!",
        url: "https://www.imdb.com/title/tt10999120/"
    },
    {
        title: "Jingle Jangle: A Christmas Journey (2020),",
        title1: "IMDB rating: 6.4,",
        title2: "A story about the importance of patents and copyright law!",
        url: "https://www.imdb.com/title/tt7736496/"
    },
    {
        title: "The Muppet Christmas Carol (1992),",
        title1: "IMDB rating: 7.8,",
        title2: "The best version of the Christmas Carol!",
        url: "https://www.imdb.com/title/tt0104940/"
    },
    {
        title: "A Boy Called Christmas (2021),",
        title1: "IMDB rating: 6.7,",
        title2: "A good one for the kids. A Santa origin story!",
        url: "https://www.imdb.com/title/tt10187208/"
    },

    // ANIMATED ✏️
    {
        title: "Klaus (2019),",
        title1: "IMDB rating: 8.2,",
        title2: "This film is fantastic! Best animated Christmas film! Close to making it on the 'Untouchables' list.",
        url: "https://www.imdb.com/title/tt4729430/"
    },
    {
        title: "Arthur Christmas (2011),",
        title1: "IMDB rating: 7.1,",
        title2: "Great film, except James McAvoy's really annoying voice!",
        url: "https://www.imdb.com/title/tt1430607/"
    },
    {
        title: "A Charlie Brown Christmas (1965),",
        title1: "IMDB rating: 8.3,",
        title2: "A brilliantly depressing cartoon. Highly recommend!",
        url: "https://www.imdb.com/title/tt0059026/"
    },
    {
        title: "Merry Little Batman (2023),",
        title1: "IMDB rating: 6.4,",
        title2: "Really weird drawings, but still a fun Batman cartoon!",
        url: "https://www.imdb.com/title/tt15352516/"
    },
    {
        title: "Stick Man (2015),",
        title1: "IMDB rating: 7.1,",
        title2: "A great short film. Stick bloke tries to get home for Christmas!",
        url: "https://www.imdb.com/title/tt5095510/"
    },

    // ROMANTIC 🥰
    {
        title: "Love Actually (2003),",
        title1: "IMDB rating: 7.6,",
        title2: "Romance. Hugh Grant for Prime Minister!",
        url: "https://www.imdb.com/title/tt0314331/"
    },
    {
        title: "The Holiday (2006),",
        title1: "IMDB rating: 7.0,",
        title2: "Romance. Jack Black trying to pull Kate Winslet!",
        url: "https://www.imdb.com/title/tt0457939/"
    },
    {
        title: "While You Were Sleeping (1995),",
        title1: "IMDB rating: 6.8,",
        title2: "Romance. Sandra Bullock trying to pull a man in a coma. Come on Sandy, you're better than that!",
        url: "https://www.imdb.com/title/tt0114924/"
    },
    {
        title: "Serendipity (2001),",
        title1: "IMDB rating: 6.8,",
        title2: "Romance. A harmless bit of nonsense.",
        url: "https://www.imdb.com/title/tt0240890/"
    },
    {
        title: "The Family Stone (2005),",
        title1: "IMDB rating: 6.3,",
        title2: "Romance. A family of unlikeable people meet for Christmas.",
        url: "https://www.imdb.com/title/tt0356680/"
    },

    // BRITISH CHRISTMAS 🫖
    {
        title: "Nativity! (2009),",
        title1: "IMDB rating: 6.5",
        title2: "A Coventry primary school takes on Hollywood via the medium of a chaotic school nativity. Peak British Christmas!",
        url: "https://www.imdb.com/title/tt1242447/"
    },
    {
        title: "The Man Who Invented Christmas (2017),",
        title1: "IMDB rating: 7.1",
        title2: "Charles Dickens has writer's block and accidentally invents modern Christmas!",
        url: "https://www.imdb.com/title/tt6225520/"
    },
    {
        title: "Get Santa (2014),",
        title1: "IMDB rating: 6.3",
        title2: "Santa gets arrested and sent to prison. Only in a British Christmas film would saving Christmas involve a custodial sentence!",
        url: "https://www.imdb.com/title/tt1935940/"
    },
    {
        title: "A Christmas Carol (1999),",
        title1: "IMDB rating: 7.4",
        title2: "Patrick Stewart as Scrooge. RIP Patrick!",
        url: "https://www.imdb.com/title/tt0216621/"
    },
    {
        title: "Last Christmas (2019),",
        title1: "IMDB rating: 6.5",
        title2: "Daenerys works in London as an elf. Christmas is coming!!",
        url: "https://www.imdb.com/title/tt8623904/"
    },

    // INTERNATIONAL 🌎
    {
        title: "Tokyo Godfathers (2003),",
        title1: "IMDB rating: 7.8,",
        title2: "Awesome manga Christmas movie! (Japanese)",
        url: "https://www.imdb.com/title/tt0388473/"
    },
    {
        title: "Rare Exports: A Christmas Tale (2010),",
        title1: "IMDB rating: 6.6,",
        title2: "A Finnish Christmas Horror where archaeologists dig up an evil Santa!",
        url: "https://www.imdb.com/title/tt1401143/"
    },
    {
        title: "A Christmas Tale (2008),",
        title1: "IMDB rating: 7.0,",
        title2: "Estranged family get together for Christmas! (French)",
        url: "https://www.imdb.com/title/tt0993789/"
    },
    {
        title: "8 Women (2002),",
        title1: "IMDB rating: 7.0,",
        title2: "Agatha Christie style Christmas murder mystery! (French)",
        url: "https://www.imdb.com/title/tt0283832/"
    },
    {
        title: "Just Another Christmas (2020),",
        title1: "IMDB rating: 6.7,",
        title2: "A Christmas time loop where it's Christmas forever! (Brazilian)",
        url: "https://www.imdb.com/title/tt13354204/"
    },

    // ALTERNATIVE 🙃
    {
        title: "Trading Places (1983),",
        title1: "IMDB rating: 7.5",
        title2: "Eddie Murphy + Dan Aykroyd = peak 80s!",
        url: "https://www.imdb.com/title/tt0086465/"
    },
    {
        title: "The Holdovers (2023),",
        title1: "IMDB rating: 7.9,",
        title2: "This is a great film that you should watch anyway.",
        url: "https://www.imdb.com/title/tt14849194/"
    },
    {
        title: "Violent Night (2022),",
        title1: "IMDB rating: 6.7,",
        title2: "Definitely worth a watch. The story is essentially Die Hard, but John McClane is Santa!",
        url: "https://www.imdb.com/title/tt12003946/"
    },
    {
        title: "Krampus (2015),",
        title1: "IMDB rating: 6.2,",
        title2: "A decent horror. Boy summons a festive demon intent on punishing non-believers!",
        url: "https://www.imdb.com/title/tt3850590/"
    },
    {
        title: "Gremlins (1984),",
        title1: "IMDB rating: 7.3,",
        title2: "Don't get them wet and don't feed them after midnight. How hard can it be!?",
        url: "https://www.imdb.com/title/tt0087363/"
    },

    // AWFUL 💩
    {
        title: "Santa with Muscles (1996),",
        title1: "IMDB rating: 2.6,",
        title2: "Hulkamania has arrived! This movie is absolutely terrible!",
        url: "https://www.imdb.com/title/tt0117550/"
    },
    {
        title: "Jingle All The Way (1996),",
        title1: "IMDB rating: 5.7,",
        title2: "A film about the true meaning of Christmas - parents fighting over grossly understocked presents for their kids!",
        url: "https://www.imdb.com/title/tt0116705/"
    },
    {
        title: "Deck the Halls (2006),",
        title1: "IMDB rating: 5.1,",
        title2: "A movie about people decorating their houses!",
        url: "https://www.imdb.com/title/tt0790604/"
    },
    {
        title: "Falling for Christmas (2022),",
        title1: "IMDB rating: 5.2,",
        title2: "It's got Lindsay Lohan in it. So, it's not going to be good!",
        url: "https://www.imdb.com/title/tt14715170/"
    },
    {
        title: "Saving Christmas (2014),",
        title1: "IMDB rating: 1.3,",
        title2: "Unlucky! This could be in the running for the worst film ever (not just Christmas). You're in for a treat!",
        url: "https://www.imdb.com/title/tt4009460/"
    },

    // NOT ACTUALLY CHRISTMAS 📺
    {
        title: "The Great Escape (1963),",
        title1: "IMDB rating: 8.2",
        title2: "Nothing says Christmas like Steve McQueen trying to jump a barbed-wire fence on a motorbike. Apparently.",
        url: "https://www.imdb.com/title/tt0057115/"
    },
    {
        title: "Escape to Victory (1981),",
        title1: "IMDB rating: 6.7",
        title2: "Michael Caine, Pelé and Sylvester Stallone play football against the Nazis. Not remotely festive, but somehow essential Christmas television. Spoiler alert: Pelé scores a bicycle kick!",
        url: "https://www.imdb.com/title/tt0083284/"
    },
    {
        title: "Harry Potter and the Philosopher's Stone (2001),",
        title1: "IMDB rating: 7.7",
        title2: "Two and a half hours of watching a useless wizard boy in a school with no safeguarding!",
        url: "https://www.imdb.com/title/tt0241527/"
    },
    {
        title: "The Lord of the Rings: The Fellowship of the Ring (2001),",
        title1: "IMDB rating: 8.9",
        title2: "A group of blokes walk towards a volcano for three hours. Perfect Boxing Day viewing!",
        url: "https://www.imdb.com/title/tt0120737/"
    },
    {
        title: "Indiana Jones and the Last Crusade (1989),",
        title1: "IMDB rating: 8.2",
        title2: "Indiana Jones, Sean Connery, Nazis and the Holy Grail. Absolutely no Christmas whatsoever. You have chosen... wisely.",
        url: "https://www.imdb.com/title/tt0097576/"
    }

];
            
                const randomMovieButton = document.getElementById('randomMovieButton');
                const randomMovieDisplay = document.getElementById('randomMovieDisplay');
            
                randomMovieButton.addEventListener('click', () => {
                    const randomIndex = Math.floor(Math.random() * movies.length);
                    const randomMovie = movies[randomIndex];
                    randomMovieDisplay.innerHTML = `I recommend you watch: ${randomMovie.title} <a href="${randomMovie.url}" target="_blank"> ${randomMovie.title1} </a> ${randomMovie.title2} `;
                    randomMovieDisplay.classList.add('random-movie');
                });
            });

  
