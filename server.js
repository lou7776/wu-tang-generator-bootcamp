// 
const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')


const names = {
  a:{

    First:[
      'Supreme', 'Grand', 'Silent', 'Velvet', 'Iron'],

    Last:[
      'Overlord', 'Chestmaster', 'Legend', 'cruz ', 'younblood']
    

  }, 

b:{

    First:[
      'Raging', 'savage', 'Thunder', 'Atomic', 'Chance'],

    Last:[
      'the superhero', 'bolt', 'Jacker', 'Juggernaut', 'Smasher']
    

  }, 


  c:{

    First:[
      'Mr.', 'Neon', 'skip', 'lancey', 'canadian'],

    Last:[
      'Jester', 'Viper', 'gardner', 'black', 'arena']

    

  }, 
}


function randomizeList(list){
  return list[Math.floor(Math.random() * list.length)];
}

//counting to find which name are thety are going to get
function optionsPicked(answer){
  const counts = {
    a: 0,
    b:0,
    c:0

  }



answer.forEach(function(answer){
  if(counts[answer] != undefined){
    counts[answer] += 1

  }


})

 let winner = 'a'
 if(counts.b >  counts[winner]) winner = 'b';
 if(counts.c >  counts[winner]) winner = 'c';
 return winner

}




const server = http.createServer(function (req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  
// game logic 

}else if (page == '/api') {
    const answer = [params.quest_1, params.quest_2, params.quest_3, params.quest_4,params.quest_5]
    
    const winningGroupLetter = optionsPicked(answer)

    const group = names[winningGroupLetter]

    const name = randomizeList(group.First) + ' ' +randomizeList (group.Last)

       

    const objToJson = {
      name: name
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(objToJson));

    

 } else if (page == '/css/style.css') {
    fs.readFile('css/style.css', function (err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == '/js/main.js') {
    fs.readFile('js/main.js', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  } else {
    figlet('404!!', function (err, data) {
      if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
      }
      res.write(data);
      res.end();
     });
    }
  });

server.listen(8000);






