
const form = document.getElementById("goals")
const submit = document.getElementById('submitButton')
let globalId = 0

const baseURL = `http://localhost:4000/api/form`


      document.getElementById("complimentButton").onclick = function () {
        axios.get("http://localhost:4000/api/compliment/")
            .then(function (response) {
              const data = response.data;
              alert(data);
            });
      };
      document.getElementById("fortuneButton").onclick = () => {
        axios.get("http://localhost:4000/api/fortune/")
          .then((response) => {
            const data = response.data;
            alert(data)
          })
      }
      document.getElementById("suggestions").onclick = () => {
          axios.get("http://localhost:4000/api/suggestion/")
          .then((response) => {
              const data = response.data;
              document.getElementById("printSuggestions").innerHTML = data
                .map(function (suggest){
                    return '<li class="row">' + suggest
                })
                .join("")

          })
      }

    
    //   document.getElementById("goals").onclick =( ) => {
    //       axios.post(baseURL, body)
    //       .then((response) => {
    //           const data = response.data;
    //           document.getElementById("goalsField").innerHTML = data
    //           .map(function (goals){
    //               return '<div>' + goals
    //           })
    //           .join("")
    //       })
    //   }
    
   
    const printForm = () => {
        axios.post(baseURL, body).then((response) =>{
            let data = response.data
            let newForm = []
            document.getElementById("goalsField").innerHTML = data
            .map(function (form){
                return '<div>' + form
            }) 
        })
    }

      form.addEventListener('submit', printForm)
     