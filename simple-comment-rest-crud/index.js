var express = require('express');
var app = express();

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  'dialect' : 'sqlite',
  'storage'  : "database.sqllite"
});

const Comments = sequelize.define('Comments', {
  content : {
    type : DataTypes.STRING,
    allowNull : false
  }
}, {
  // Other model options go here
});

(async() => {
  await Comments.sync();
})();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.json());

app.get('/', async function(req, res) {
  const comments = await Comments.findAll();
  res.json({'comments' : comments});
});

app.post('/', async function(req, res){
  const { content } = req.body;
  const comment = await Comments.create({content : content});
  res.json({'success' : comment});
});

app.put("/:id", async function(req, res){
  const id = req.params.id;
  const { content } = req.body;

  const result = await Comments.update({content : content},{
    where : {
      id : id
    }
  })

  const comment = await Comments.findOne({where : {id : id}});

  res.json({'result' : comment});
});

app.delete('/:id', async function(req, res){
  const id = req.params.id;

  const result = await Comments.destroy({
    where : {
      id : id
    }
  });

  res.json({'result' : (result == 1) ? "success" : "fail"});
});


app.listen(3000);
console.log('Server is listening on port 3000');