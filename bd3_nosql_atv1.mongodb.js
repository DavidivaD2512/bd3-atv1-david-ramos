
use('BD3-NoSQL-AtlasMongoDB');

db.getCollection('bd3-nosql-atv1').insertMany([

  {

    "cod_turma": 1,
    "cod_aluno": 1,
    "nome": "David Ramos",
    "cpf": 41143676831,  
    "rg": 391234567,     
    "telefone_aluno": 11992382152,  
    "telefone_responsavel": 11992382152,  
    "email": "daviddivad@gmail.com",  
    "data_nascimento": "25-12-2004" 
  },

  {

    "cod_turma": 1,
    "cod_aluno": 2,
    "nome": "Matheus Ramos",
    "cpf": 41145860682,  
    "rg": 123456789,     
    "telefone_aluno": 11400289221,  
    "telefone_responsavel": 11400289221,  
    "email": "michael10jackisom@gmail.com",  
    "data_nascimento": "16-02-2003" 
  },

  {

    "cod_turma": 1,
    "cod_aluno": 3,
    "nome": "Kauê Almeida",
    "cpf": 12345678901,  
    "rg": 987654321,     
    "telefone_aluno": 11919321945,  
    "telefone_responsavel": 11919321945,  
    "email": "roxas@gmail.com",  
    "data_nascimento": "03-01-2005" 
  },

  {

    "cod_turma": 3,
    "cod_aluno": 4,
    "nome": "Son Goku",
    "cpf": 10203064056,  
    "rg": 102030405,     
    "telefone_aluno": 1300500603,  
    "telefone_responsavel": 1305000603,  
    "email": "kakaroto@sayajin.com",  
    "data_nascimento": "01-01-2001" 
  },

  {

    "cod_turma": 3,
    "cod_aluno": 5,
    "nome": "Vegeta Jr.",
    "cpf": 67954320876,  
    "rg": 875409734,     
    "telefone_aluno": 11987564463,  
    "telefone_responsavel": 11987564463,  
    "email": "principe@sayajin.com",  
    "data_nascimento": "02-02-2002" 
  },

  {

    "cod_turma": 2,
    "cod_aluno": 6,
    "nome": "Scorpion",
    "cpf": 66666666666,  
    "rg": 666666666,     
    "telefone_aluno": 11666666666,  
    "telefone_responsavel": 11666666666,  
    "email": "vingança@gmail.com",  
    "data_nascimento": "66-06-1966" 
  },

  {

    "cod_turma": 2,
    "cod_aluno": 7,
    "nome": "Sub Zero",
    "cpf": 58493045932,  
    "rg": 129340594,     
    "telefone_aluno": 11738492830,  
    "telefone_responsavel": 11738492830,  
    "email": "picole@gmail.com",  
    "data_nascimento": "25-12-1966" 
  },

  {

    "cod_turma": 3,
    "cod_aluno": 8,
    "nome": "Son Gohan",
    "cpf": 27592385042,  
    "rg": 289974463,     
    "telefone_aluno": 1188542663874,  
    "telefone_responsavel": 11885426638,  
    "email": "sayaman@sayajin.com",  
    "data_nascimento": "25-12-2000" 
  },

  {

    "cod_turma": 2,
    "cod_aluno": 9,
    "nome": "Johny Cage",
    "cpf": 88654623451,  
    "rg": 8979902345,     
    "telefone_aluno": 11911007252,  
    "telefone_responsavel": 11911007252,  
    "email": "imitacaoDeNinja@gmail.com",  
    "data_nascimento": "01-04-1980" 
  },

  {

    "cod_turma": 1,
    "cod_aluno": 10,
    "nome": "Karinny",
    "cpf": 10234567890,  
    "rg": 452345679,     
    "telefone_aluno": 987654330,  
    "telefone_responsavel": 123456788,  
    "email": "Kah10@gmail.com",  
    "data_nascimento": "2008-10-12" 
  },

  
  
]);


db.getCollection("bd3-nosql-atv1").find();



db.getCollection("bd3-nosql-atv1").findOne(
    { "cpf": 41143676831 }      
    );

db.getCollection("bd3-nosql-atv1").findOne(
    { "cpf": 41143676831 },   { "cod_aluno": 0 , "cod_turma": 0}      
    );