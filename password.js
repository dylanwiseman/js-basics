const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Yo, welcome to the password validator tool.")

reader.question("Please enter your password: ", function(answer) {
    if (answer.length < 10) {
        console.log("You have failed. Your password needs to be longer.")
    } else if (answer.includes('password') === true) {
        console.log("No. Your password can't include the word 'password'. You're better than that!")
    } else if (answer.startsWith('0') === true) {
        console.log("Sorry, you can't start your password with 0.")
    } else {
        console.log(`
        
                                                                                                                                                                                  
                                                                                                                    bbbbbbbb                                         dddddddd        
        OOOOOOOOO     kkkkkkkk                                                                   tttt               b::::::b                                         d::::::d        
      OO:::::::::OO   k::::::k                                                                ttt:::t               b::::::b                                         d::::::d        
    OO:::::::::::::OO k::::::k                                                                t:::::t               b::::::b                                         d::::::d        
   O:::::::OOO:::::::Ok::::::k                                                                t:::::t                b:::::b                                         d:::::d         
   O::::::O   O::::::O k:::::k    kkkkkkk            nnnn  nnnnnnnn       ooooooooooo   ttttttt:::::ttttttt          b:::::bbbbbbbbb      aaaaaaaaaaaaa      ddddddddd:::::d         
   O:::::O     O:::::O k:::::k   k:::::k             n:::nn::::::::nn   oo:::::::::::oo t:::::::::::::::::t          b::::::::::::::bb    a::::::::::::a   dd::::::::::::::d         
   O:::::O     O:::::O k:::::k  k:::::k              n::::::::::::::nn o:::::::::::::::ot:::::::::::::::::t          b::::::::::::::::b   aaaaaaaaa:::::a d::::::::::::::::d         
   O:::::O     O:::::O k:::::k k:::::k               nn:::::::::::::::no:::::ooooo:::::otttttt:::::::tttttt          b:::::bbbbb:::::::b           a::::ad:::::::ddddd:::::d         
   O:::::O     O:::::O k::::::k:::::k                  n:::::nnnn:::::no::::o     o::::o      t:::::t                b:::::b    b::::::b    aaaaaaa:::::ad::::::d    d:::::d         
   O:::::O     O:::::O k:::::::::::k                   n::::n    n::::no::::o     o::::o      t:::::t                b:::::b     b:::::b  aa::::::::::::ad:::::d     d:::::d         
   O:::::O     O:::::O k:::::::::::k                   n::::n    n::::no::::o     o::::o      t:::::t                b:::::b     b:::::b a::::aaaa::::::ad:::::d     d:::::d         
   O::::::O   O::::::O k::::::k:::::k                  n::::n    n::::no::::o     o::::o      t:::::t    tttttt      b:::::b     b:::::ba::::a    a:::::ad:::::d     d:::::d         
   O:::::::OOO:::::::Ok::::::k k:::::k    ,,,,,,       n::::n    n::::no:::::ooooo:::::o      t::::::tttt:::::t      b:::::bbbbbb::::::ba::::a    a:::::ad::::::ddddd::::::dd        
    OO:::::::::::::OO k::::::k  k:::::k   ,::::,       n::::n    n::::no:::::::::::::::o      tt::::::::::::::t      b::::::::::::::::b a:::::aaaa::::::a d:::::::::::::::::d ...... 
      OO:::::::::OO   k::::::k   k:::::k  ,::::,       n::::n    n::::n oo:::::::::::oo         tt:::::::::::tt      b:::::::::::::::b   a::::::::::aa:::a d:::::::::ddd::::d .::::. 
        OOOOOOOOO     kkkkkkkk    kkkkkkk ,:::,,       nnnnnn    nnnnnn   ooooooooooo             ttttttttttt        bbbbbbbbbbbbbbbb     aaaaaaaaaa  aaaa  ddddddddd   ddddd ...... 
                                         ,:::,                                                                                                                                       
                                         ,,,,                                                                                                                                                
                                                                                                                                                                           
        `)
    }
  });