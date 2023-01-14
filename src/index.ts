/* PRÁTICA GUIADA - Parte 1
Crie um sistema de cadastro de usuários que contenha:

1. Type Alias para uma pessoa (Person) com as propriedades id, name, email, password e role;
2. Type Aliases de conta, com as propriedades account e permission: 
  a. AdminAccount 
  b. NormalAccount
*/

type Person = {
  id:string,
  name:string,
  email:string,
  password:string,
  role:"ADMIN"|"NORMAL"
}

type AdminAccount = {
  account:string,
  permission:boolean
}

type NormalAccount = {
  account:string,
  permission:boolean
}

enum Role {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}

type NormalUser = Person & NormalAccount
type AdminUser = Person & AdminAccount


const normalAcountArray:NormalUser[] | AdminUser[] =[]

const cliente1:NormalUser = {
  id:"7d89ass8",
  name:"Ricardo",
  email:"ricardo@gmail.com",
  password: "8sd8s88s8",
  account:"Anna",
  role:Role.NORMAL,
  permission:false
}

const admin1:AdminUser = {
  id:"70sd88",
  name:"Maria",
  email:"maria@gmail.com",
  password: "iadydyad",
  account:"Administrer",
  role:Role.ADMIN,
  permission:true
}

const cliente2:Person = {
  id:"aiioddy",
  name:"Caramelo",
  email:"caramelo@gmail.com",
  password: "09duadud",
  role:Role.NORMAL,
}

normalAcountArray.push(cliente1)
normalAcountArray.push(admin1)

console.table(normalAcountArray)








/* PRÁTICA GUIADA - Parte 2
Vamos continuar nosso sistema de cadastro de usuários criando:

1. Enum com valores ADMIN e NORMAL;
2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);
3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;
4. Crie duas pessoas, uma com permissão normal e a outra admin;
5. Guarde essas pessoas no array de usuários.

*/ 