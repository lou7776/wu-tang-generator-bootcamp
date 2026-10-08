
document.querySelector('#clickMe').addEventListener('click', showuTangName)

function showuTangName(){

 //the questions 
const questionNames = ['quest_1', 'quest_2', 'quest_3', 'quest_4', 'quest_5']

//storing the results 
const resultsEl = document.querySelector('#result'); 

//turning the questions into selected values
const answers = questionNames.map(function(question){

    //instead of index use the names. find the slelcted radio buttons based on how they are grouped 
    const picked = document.querySelector('input[name ="' + question + '"]:checked');

    // return its value, or an empty array with nothing inside 
    return picked ? picked.value: ''; 



})

  


// / build a query-string and match each index with answer un the array
if(answers.includes('')){

resultsEl.innerText = 'Please answer every question'

return
}

  const query = questionNames
.map(function(q, index){
  return q + '=' + answers[index]

})

// join the pieces with & so the server can read them 
.join('&');


fetch('/api?' + query)
.then(function(response){

  return response.json(); 
})

.then(function(data){
  document.querySelector('#result').innerText = 'Your Name is ' + data.name

})

.catch(function(error){

  resultsEl.innerText = 'something is wrong, check the code'


  console.error(error);

})

}


