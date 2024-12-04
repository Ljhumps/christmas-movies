
            document.addEventListener('DOMContentLoaded', () => {
                const movies = [
                    { title: "It's a Wonderful Life (1946),",title1: "IMDB rating: 8.6,", title2: "A story about capitalism, socialism, and suicide. Absolute classic!", url: "https://www.imdb.com/title/tt0038650/"},
                    { title: "Miracle on 34th Street (1947),", title1: "IMDB rating: 7.9", title2: "Classic. The original, not the one with the annoying girl from Matilda!", url: "https://www.imdb.com/title/tt0039628/" },
                    { title: "White Christmas (1954),", title1: "IMDB rating: 7.6", title2: "Classic. Have a dance with Bing Crosby!", url: "https://www.imdb.com/title/tt0047673/" },
                    { title: "National Lampoon's Christmas Vacation (1989),", title1: "IMDB rating: 7.5,", title2: "Comedy. Spend some time with the Griswold family!", url: "https://www.imdb.com/title/tt0097958/" },
                    { title: "Home Alone (1990),", title1: "IMDB rating: 7.7,", title2: "Christmas starts once this films begins. Essential!", url: "https://www.imdb.com/title/tt0099785/" },
                    { title: "Home Alone 2: Lost in New York (1990),", title1:"IMDB rating: 6.9,", title2: "Exactly the same plot as the first film, but in New York - Enjoy!", url: "https://www.imdb.com/title/tt0104431/" },
                    { title: "Elf (2003),", title1: "IMDB rating: 7.1, ", title2: "Bye Buddy, hope you find your dad! Essential viewing!", url: "https://www.imdb.com/title/tt0319343/" },
                    { title: "The Santa Clause (1994),", title1: "IMDB rating: 6.6,", title2: "Comedy. Underrated Christmas film!", url: "https://www.imdb.com/title/tt0111070/" },
                    { title: "Scrooged (1988),", title1: "IMDB rating: 6.9,", title2: "Classic! A moody, sarcastic Bill Murray!", url: "https://www.imdb.com/title/tt0096061/" },
                    { title: "The Muppet Christmas Carol (1992),", title1: "IMDB rating: 7.8,", title2: "The best version of the Christmas Carol! ", url: "https://www.imdb.com/title/tt0104940/" },
                    { title: "Arthur Christmas (2011),", title1: "IMDB rating: 7.1,", title2: "Great film, except James McAvoy's really annoying voice! ", url: "https://www.imdb.com/title/tt1430607/" },
                    { title: "A Charlie Brown Christmas (1965),", title1: "IMDB rating: 8.3,", title2: "A brilliantly depressing cartoon. Highly recommend!   ", url: "https://www.imdb.com/title/tt0059026/" },
                    { title: "Love Actually (2003),", title1: "IMDB rating: 7.6,", title2: "Romance. Hugh Grant for Prime Minister!", url: "https://www.imdb.com/title/tt0314331/" },
                    { title: "The Holiday (2006),", title1: "IMDB rating: 7.0,", title2: "Romance. Jack Black trying to pull Kate Winslet!", url: "https://www.imdb.com/title/tt0457939/" },
                    { title: "While You Were Sleeping (1995),", title1: "IMDB rating: 6.8,", title2: "Romance. Sandra Bullock trying to pull a man in a coma. Come on Sandy, you're better than that!", url: "https://www.imdb.com/title/tt0114924/" },
                    { title: "Serendipity (2001),", title1: "IMDB rating: 6.8,", title2: "Romance. A harmless bit of nonsense", url: "https://www.imdb.com/title/tt0240890/" },
                    { title: "The Family Stone (2005),", title1:"IMDB rating: 6.3,", title2: "Romance. A family of unlikeable people meet for Christmas.", url: "https://www.imdb.com/title/tt0356680/" },
                    { title: "Spirited (2022)", title1: "IMDB rating: 6.6,", title2: "A Christmas musical with Ryan Reynolds and Will Ferrell!", url: "https://www.imdb.com/title/tt2085059/" },
                    { title: "Falling for Christmas (2022),", title1: "IMDB rating: 5.2,", title2: "It's got Lindsay Lohan in it. So, it's not going to be good!", url: "https://www.imdb.com/title/tt21106646/" },
                    { title: "Die Hard (1988),", title1:"IMDB rating: 8.2,", title2: "Action. The Greatest Christmas Story Ever Told!", url: "https://www.imdb.com/title/tt0095016/" },
                    { title: "Gremlins (1984),", title1: "IMDB rating: 7.3,", title2: "Don't get them wet and don't feed them after midnight. How hard can it be!?", url: "https://www.imdb.com/title/tt0087363/" },
                    { title: "Rare Exports: A Christmas Tale (2010)", title1: "IMDB rating: 6.6,", title2: "A Finnish Christmas Horror where archaeologists dig up an evil Santa!", url: "https://www.imdb.com/title/tt1401143/?ref_=nv_sr_srsg_0_tt_6_nm_2_in_0_q_rare%2520e" },
                    { title: "The Christmas Chronicles (2018)", title1: "IMDB rating: 7.0,", title2: "Kurt Russell as Santa Claus! Count me in!", url: "https://www.imdb.com/title/tt2990140/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_christmas%2520chronicls" },
                    { title: "The Holdovers (1988),", title1:"IMDB rating: 7.9,", title2: "This is a great film that you should watch anyway.", url: "https://www.imdb.com/title/tt14849194/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_the%2520holdovers" },
                    { title: "Violent Night (2022),", title1:"IMDB rating: 6.7,", title2: "Definately worth a watch. The story is essentially Die Hard, but John McClane is Santa!", url: "https://www.imdb.com/title/tt0095016/" },
                    { title: "Klaus (2019),", title1:"IMDB rating: 8.2,", title2: "This film is fantastic! Best animated Christmas film! Close to making it on the 'Untouchables' list", url: "https://www.imdb.com/title/tt4729430/" },
                    { title: "Merry Little Batman (2023),", title1:"IMDB rating: 6.4,", title2: "Really weird drawings, but still a fun Batman cartoon!", url: "https://www.imdb.com/title/tt0095016/" },
                    { title: "Bad Santa (2003),", title1:"IMDB rating: 7.0,", title2: "A drunken, foul mouthed Christmas classic!", url: "https://www.imdb.com/title/tt4729430/" },
                    { title: "Santa with Muscles (1996),", title1:"IMDB rating: 2.6,", title2: "Hulkamania has arrived! This movie is absolutely terrible!", url: "https://www.imdb.com/title/tt4729430/" },
                    { title: "Jingle All The Way (1996),", title1:"IMDB rating: 5.7,", title2: "A film about the true meaning of Christmas - parents fighting over grossly understocked presents for their kids!", url: "https://www.imdb.com/title/tt0116705/?ref_=ls_t_21" },
                    { title: "Saving Christmas (2014),", title1:"IMDB rating: 1.3,", title2: "Unlucky! This could be in the running for the worst film ever (not just Christmas). You're in for a treat!", url: "https://www.imdb.com/title/tt4009460/?ref_=ls_t_1" },
                    { title: "Deck the Halls (2006),", title1:"IMDB rating: 5.1,", title2: "A movie about people decorating their houses!", url: "https://www.imdb.com/title/tt0790604/?ref_=ls_t_11" },
                    { title: "Just Another Christmas (2020),", title1:"IMDB rating: 6.7,", title2: "A christmas time loop where it's Christmas forever! (Brazilian)", url: "https://www.imdb.com/title/tt13354204/" },
                    { title: "8 Women (2002),", title1:"IMDB rating: 7.0,", title2: "Agatha Christie style Christmas murder mystery! (French)", url: "https://www.imdb.com/title/tt0283832/" },
                    { title: "A Christmas Tale (2008),", title1:"IMDB rating: 7.0,", title2: "Estranged family get together for Christmas! (French)", url: "https://www.imdb.com/title/tt0993789/" },
                    { title: "Tokyo Christmas (2008),", title1:"IMDB rating: 7.8,", title2: "Awesome manga Christmas movie! (Japanese)", url: "https://www.imdb.com/title/tt0388473/" },
                    { title: "Krampus (2015),", title1:"IMDB rating: 6.2,", title2: "A decent horror. Boy summons a festive demon intent on punishing non-believers!", url: "https://www.imdb.com/title/tt3850590/" },
                    { title: "Stick Man (2015),", title1:"IMDB rating: 7.1,", title2: "A great short film. Stick bloke tries to get home for Christmas!", url: "https://www.imdb.com/title/tt3850590/" },
                    { title: "A Boy Called Christmas (2021),", title1:"IMDB rating: 6.7,", title2: "A good one for the kids. A Santa origin story!", url: "https://www.imdb.com/title/tt10187208/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_a%2520boy%2520called%2520christmas" },
                    { title: "Jingle Jangle: A Christmas Journey (2020),", title1:"IMDB rating: 6.4,", title2: "A story about the importance of patents and copyright law!", url: "https://www.imdb.com/title/tt7736496/" },
                    { title: "8-Bit Christmas (2021),", title1:"IMDB rating: 6.7,", title2: "Great film. An 80s nostagia fest!", url: "https://www.imdb.com/title/tt11540284/" },
                    { title: "The Night Before (2015),", title1:"IMDB rating: 6.4,", title2: "A group of mates trying to re capture their youth. I can relate.", url: "https://www.imdb.com/title/tt3530002/?ref_=nv_sr_srsg_1_tt_8_nm_0_in_0_q_the%2520nightbe" },
                    { title: "The Ref (1994),", title1:"IMDB rating: 6.9,", title2: "Also called 'Hostile Hostages'. Denis Leary is class!", url: "https://www.imdb.com/title/tt0110955/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_the%2520ref" },
                    { title: "The Snowman (1982),", title1:"IMDB rating: 8.2,", title2: "A boy is kidnapped by a snowman. A Classic!", url: "https://www.imdb.com/title/tt0084701/" },
                    { title: "A Christmas Story (1983),", title1:"IMDB rating: 7.9,", title2: "This is a belter! Sometimes Christmas is about getting what you want!", url: "https://www.imdb.com/title/tt0085334/taglines/?ref_=tt_stry_tg" },
                    { title: "Terrifier 3 (2024),", title1:"IMDB rating 6.5,", title2: "New release! Horror. Not for the faint hearted. Expect a crap ton of gore!", url: "https://www.imdb.com/title/tt27911000/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_the%2520terrifier" },
                    { title: "An Almost Christmas Story (2024),", title1:"IMDB rating: 7.1,", title2: "New Release! A short film. A lost owl and lost girl embark on an adventure in New York!", url: "https://www.imdb.com/title/tt33395815/" },
                    { title: "A Sudden Case of Christmas (2024),", title1:"IMDB rating: 6.6,", title2: "New Release! Another Danny Devito! Looks terrible.", url: "https://www.imdb.com/title/tt0084701/" },
                    { title: "That Christmas (2024),", title1:"IMDB rating: 6.6,", title2: "New Release! Animated film. This one could be a good one!", url: "https://www.imdb.com/title/tt14855468/" },
                    { title: "Red One (2024),", title1:"IMDB rating: 6.6,", title2: "New Release (in Cinemas)! Action. A great cast for an action packed Christmas movie. JK Simmons as Santa, sign me up!", url: "https://www.imdb.com/title/tt14948432/?ref_=ls_t_1" },
                    

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

  
