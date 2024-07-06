let container = document.getElementById("container")
let todoAPI  = 'https://jsonplaceholder.typicode.com/todos'


const  fetchData = async (url)=>{

    try{
        let responce = await fetch(url);
        let data = await responce.json();

        ShowData(data)
    }catch(err){
        console.log(err)
    }
}


const ShowData = (URL)=>{

    URL.forEach(element => {

        let card  = document.createElement("div")

        let UserID = document.createElement("p")
        UserID.innerHTML = `<b>id : </b> ${element.id}`

        let title = document.createElement("p");
        title.innerHTML = `<b>Title : </b> ${element.title}`

        let task = document.createElement("p")
        task.innerHTML = `<b>Completed : </b> ${element.completed}`

        card.append(UserID, title , task)

        container.append(card)
        
    });

}

fetchData(todoAPI)



// fetchData(todoAPI);