import express from 'express' ;
import cors from 'cors' ;
import Connection from './database/db.js';
import Routes from './routes/route.js'

const PORT = 8000 ;

const app = express() ;

app.use(cors()) ;

app.use(express.json()) ;
app.use(express.urlencoded({extended: true})) ;

Connection() ;


//localhost:8000/routes
app.use('/' , Routes) ;  


app.listen(PORT , (req , res) => {
    console.log(`Your server is running succesfully on port ${PORT}..`) ;
})