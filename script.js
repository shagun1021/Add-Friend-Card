let add=document.getElementById('add');
let remove=document.getElementById('remove');
let flag=0;


add.addEventListener('click',function(){
      if(flag==0){
      add.innerText="send";
      add.style.color="red";
      flag=1;
      }
      else{
            alert("Request Has Been Already Send...");  
      }
})

remove.addEventListener('click',function(){
      if(flag==0){
            alert("Not In Your Friend List...");
      }
      else{
            add.innerText="Add";
            add.style.color="black";
            flag=0;
      }

})