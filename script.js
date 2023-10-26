/*var takeJokes = fetch('https://official-joke-api.appspot.com/jokes/programming/random');
takeJokes.then((data)=>data.json()).then((data1)=>{
    console.log(data1[0].setup);
    console.log(data1[0].punchline);
    var div = document.createElement("div");
    div.innerHTML =`
    <div class="container">
    <div class="row">
    <div class="col">
    <p>${data1.setup}</p>
    <p>${data1.punchline}</p>
    </div>
    </div>
    </div>
    `;
    document.body.append(p);
})
*/

function fetchdata(url){
    return new Promise((resolve,reject)=>{
        //fetching
        fetch(url)
        .then((response) => {
          if (!response.ok) {
            // If the response is not ok, reject the promise with an error
            reject(
              new Error(`Failed to fetch data (${response.status} ${response.statusText})`)
            );
          }
          // Parse the response as JSON
          return response.json();
        })
        .then((data) => {
          // Resolve the promise with the data
          resolve(data);
        })
        .catch((error) => {
          // Catch any errors and reject the promise
          reject(error);
        });
    });
  }

const url = 'https://official-joke-api.appspot.com/jokes/programming/random';

const button_tag = document.getElementById("button");

async function fetchingdata() {
    try {
      const response = await fetchdata(url);
      display_joke(response);
  
      // Use an arrow function to handle the click event and call next_joke with response
      button_tag.addEventListener("click", next_joke);
    } catch (error) {
      console.log("An error occurred while fetching joke data:", error);
    }
  }

function display_joke(response){
    const joke_tag = document.getElementById('joke');
    joke_tag.classList.add('show');
    setTimeout(function(){
        joke_tag.innerHTML=`<h2>Joke of the day</h2><br/>${response[0].setup}
        <br/><br><br><i>--${response[0].punchline}</i>`;
        }, 100);
}

async function next_joke(){
    const newResponse = await fetchdata(url);
    display_joke(newResponse);
    }
    
    
    fetchingdata();
