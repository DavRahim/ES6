document.getElementById('apply-bg').addEventListener('click', function(){
  const friends = document.getElementsByClassName('firend');

  for(const friend of friends){
   friend.style.backgroundColor = 'yellow';
  }
})

document.getElementById('center').addEventListener('click', function(){
  
  const third = document.getElementById('center-th');
  third.style.textAlign = 'center';
})
document.getElementById('add-new').addEventListener('click', function(){
   const friendsAdd = document.getElementById('friemds');
   
   const div = document.createElement('div');
     div.classList = 'firend';
   div.innerHTML = `
       <h3 class="friend-name">Friend-6</h3>
        <p>Minima qui possimus ab ipsa!</p>
   `
   friendsAdd.appendChild(div)

})