// function fetchData()
// fetch('https://watchbase.com/')
// .then(response => {
//   return response.json();
// })
// .then(data => {
//   console.log(data);
// })
// body: JSON.stringify()
const input = document.getElementById("inputValue")



// element.addEventListener("click",fetchData);
// const form= document.getElementById('form-submit')


// function fetchWatch(event) {
//   event.preventDefault();
  
//   const search = input.value;

//   console.log(search)
const search = document.getElementById('search');
const matchList = document.getElementById('match-list')
const searchButton = document.getElementById('form')
searchButton.addEventListener("submit",(e)=>{
  e.preventDefault()
  if(e.target.name.value === "Marywood University"){
    let card = document.createElement("h3")
    card.setAttribute("class","details","country")
    card.textContent = "http://www.marywood.edu","United States"
    matchList.appendChild(card)
  }
})
    // fetch(`http://universities.hipolabs.com/search?country=${search}`)
    fetch(`http://universities.hipolabs.com/search?name=${search}`)
    .then(res => res.json())
    .then(data => {
    //   console.log(data)
    //   var universities = Object.values(data)
    //   universities.map((university =>{
    //     console.log(university[1].name)
      // console.log(data[0].domains)
    //   })
    //   )
    })
    
    

// const even = document.querySelector('data')
// console.log(even)
// form.addEventListener('submit', fetchWatch)