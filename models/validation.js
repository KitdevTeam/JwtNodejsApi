// validation email

// La validation des e-mails est un point très important lors de la validation d'un formulaire HTML. 

// Dans cette page, nous avons expliqué comment valider un e-mail à l'aide de JavaScript:



// Un e-mail est une chaîne (un sous-ensemble de caractères ASCII) séparée en deux parties par le symbole @. 

// un "personal_info" et un domaine, c'est-à-dire personal_info @ domain. La longueur de la partie personal_info peut comporter jusqu'à

//  64 caractères et le nom de domaine peut comporter jusqu'à 253 caractères.



// Exemple d'identifiant de messagerie valide



// mysite@ourearth.com

// my.ownsite@ourearth.org

// mysite@you.me.net

// Exemple d'identifiant de messagerie non valide



// mysite.ourearth.com [@ n'est pas présent]

// mysite @ .com.my [tld (domaine de premier niveau) ne peut pas commencer par le point "." ]

// @ you.me.net [Aucun caractère avant @]

// mysite123@gmail.b [".b" n'est pas un tld valide]

// mysite @ .org.org [tld ne peut pas commencer par le point "." ]

// .mysite @ mysite.org [un e-mail ne doit pas commencer par "." ]

// mysite () * @ gmail.com [ici l'expression régulière n'autorise que les caractères, les chiffres, les traits de soulignement et les tirets]

// mysite..1234 @ yahoo.com [les doubles points ne sont pas autorisés]



function ValidateEmail(v) 

{

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v))                                                     //w{2,3} lazemha tkoun fila5er .org .com .tn ya3ni . w ba3édha 7aja tetkawén par 2 ou 3 caractéres

  {

    return (true)

  }

    console.log("You have entered an invalid email address!")

    return (false)

}

console.log(ValidateEmail("anis@gmail.com"))

console.log(ValidateEmail("@gmail.com"))

//si vous souhaitez travailler sur un domaine à 4 chiffres, par exemple .info, vous devez changer w {2,3} en w {2,4}

//validation phone

// Le numéro de téléphone de validation est un point important lors de la validation d'un formulaire HTML.

//  Dans cette page, nous avons expliqué comment valider un numéro de téléphone (dans un format différent) à l'aide de JavaScript:



// dans un premier temps, nous validons un numéro de téléphone de 10 chiffres sans virgule, sans espace, sans ponctuation 

// il n'y aura pas de signe + devant le nombre. La validation supprimera simplement tous les non-chiffres 

// et n'autorisera que les numéros de téléphone à 10 chiffres. Voici la fonction.

function phonenumber(number)

{

  var phoneno = /^\d{10}$/; //il faut utiliser un nombre a 10 chiffres sans virgule,ni espace

  if(phoneno.test(number))

  {

      return true

    }

        

      else

        {

        console.log("invalid number");

        return false

        }

}

console.log(phonenumber("457894786"))

console.log(phonenumber(4578947864))

//Pour valider un numéro de téléphone comme

// XXX-XXX-XXXX

// XXX.XXX.XXXX

// XXX XXX XXXX

function phonenumber1(number)

{

  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;//il faut utiliser un nombre a 10 chiffres sans virgule,ni espace

  if(phoneno.test(number))

  {

      return true

    }

        

      else

        {

        console.log("invalid number");

        return false

        }

}

console.log(phonenumber1("444-444-44447"))

console.log(phonenumber1("444.444.4444"))

console.log(phonenumber1("444-444-4444"))

// Si vous souhaitez utiliser un signe + avant le numéro de la manière suivante

// + XX-XXXX-XXXX

// + XX.XXXX.XXXX

// + XX XXXX XXXX,

function phonenumber2(number)

{

  var phoneno = /^\+?([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;//il faut utiliser un nombre a 10 chiffres sans virgule,ni espace

  if(phoneno.test(number))

  {

      return true

    }

        

      else

        {

        console.log("invalid number");

        return false

        }

}

console.log(phonenumber2("+222.4444.4444"))

console.log(phonenumber2("+222.4444.44447"))

//validation password:

// Pour vérifier un mot de passe de 7 à 14 caractères contenant uniquement des caractères, 

// les chiffres numériques , le trait de soulignement et le premier caractère doivent être une lettre

function password1(number)

{

  var phoneno =/^[A-Za-z]\w{7,14}$/;

  if(phoneno.test(number))

  {

      return true

    }

        

      else

        {

        console.log("invalid password");

        return false

        }

}

console.log(password1("a7896"))

console.log(password1("a78967852552522"))

console.log(password1("78967852552522"))

//Pour vérifier un mot de passe de 6 à 20 caractères contenant au moins un chiffre , une majuscule et une minuscule

function password2(number)

{

  var phoneno =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

  if(phoneno.test(number))

  {

      return true

    }

        

      else

        {

        console.log("invalid password");

        return false

        }

}

console.log(password2("7aA47855"))

console.log(password2("7a47855"))

//Pour vérifier un mot de passe de 7 à 15 caractères contenant au moins un chiffre numérique et un caractère spécial



function password3(number)

{

  var phoneno =/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

  if(phoneno.test(number))

  {

      return true

    }

        

      else

        {

        console.log("invalid password");

        return false

        }

}

console.log(password3("45555855a@"))

console.log(password3("45555855a"))

//Pour vérifier un mot de passe de 8 à 15 caractères contenant au moins une lettre minuscule,

//une lettre majuscule, un chiffre numérique et un caractère spécial

function password4(number)

{

  var phoneno =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

  if(phoneno.test(number))

  {

      return true

    }

        

      else

        {

        console.log("invalid password");

        return false

        }

}

console.log(password4("aA4@dgdggdgddgdgd"))

console.log(password4("aA4@dgdggdgd"))





