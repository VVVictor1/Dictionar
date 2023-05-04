let myList = [];

if (localStorage.getItem('myList')){
    myList = JSON.parse(localStorage.getItem('myList'));
}

let buton = document.getElementById('btn');
buton.addEventListener('click', function(){
    let addWord = document.getElementById('newword').value;
    if(!myList.includes(addWord)){
        myList.push(addWord);                
        localStorage.setItem('myList',JSON.stringify(myList));
    }else{
        alert(`The word ${addWord} already exist`)
    }
    document.getElementById('newword').value = '';  
});

let buttonSearch = document.getElementById('btnsearch');
buttonSearch.addEventListener('click', function(){
    let existWord = document.getElementById('findword').value;

    if(myList.includes(existWord)){
        alert(`The word ${existWord} was found in Dictionary`);
    }else{
        alert(`The word ${existWord} does not exist in Dictionary`);
    }
    document.getElementById('findword').value = '';
});
