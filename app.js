const express = require('express');
const routes=require('./routes/cards')
const routesUser=require('./routes/users')
const { PORT = 3000 } = process.env;

const app = express();
app.use('/',routes)
app.use('/',routesUser)




app.listen(PORT, () => {
    // Если всё работает, консоль покажет, какой порт приложение слушает
    console.log(`App listening on port ${PORT}`)
  })

app.use(express.static(__dirname + '/public'));
app.get('/*',(req,res)=> {
    res.status('404').send({ "message": "Запрашиваемый ресурс не найден" });
  });
    





