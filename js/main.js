fetch('./../data/moovies.json')
    .then(function(response){
        return response.json()
    })
    .then(function(data) {
        console.log('Response json : ',  data)

        let div = document.querySelector('.moovies')

        data.forEach(moovies => {
            console.log(moovies)
            div.innerHTML +=` <div class="card mb-4 border border-white border-5" style="max-width: 800px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src=${moovies.Poster} class="border border-white border-3 w-100 ">
      </div>
      <div class="col-md-8">
        <div class="card-body d-flex flex-column justify-content-between h-100">
          <h1 class="card-title">${moovies.Title}</h1>
          <p class="résumé">${moovies.Plot}</p>
          <div class="d-flex w-100 card-img-content justify-content-between">
            <img src=${moovies.Images[0]} class= "h-100 rounded-pill">
            <img src=${moovies.Images[1]} class= "h-100 rounded-pill">
            <img src=${moovies.Images[2]} class= "h-100 rounded-pill">
          </div>
          <p class="notation">${moovies.imdbRating}</p>
        </div>
      </div>
    </div>
  </div>
        `

    })

})