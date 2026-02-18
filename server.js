let exprss = require('express');
const cors = require('cors');
let app = exprss();
const PORT = 8000;

app.use(cors())

const rappers = {
    '21 savage' :{
    'age' : 29,
    'birthName' : 'jubrish' ,
    'birthLocation': 'London, England',
},
'chance the rapper' : {
    'age': 29,
    'birthName': 'Chancelor Bennett',
    'birthLocaiton': 'Chicago, Illinois'
},
'unknow':{
    'age': 0,
    'birthName': 'unkown',
    'birthLocation': 'unkown'
}
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
});

app.get('/api/:name', (request, response) => {
   const rapperName = request.params.name.toLocaleLowerCase();
   
   if(rappers[rapperName]){
     response.json(rappers[rapperName]);
   }
   else{
    response.json(rappers['unknow'])
   }
    
})

app.listen(PORT, ()=>{
    console.log(`The server is now running on the port ${PORT}! Better Go Catch It!`);
});