let cl = console.log;

document.title = `Movies Gallary Task`

const addMoviebtn = document.getElementById('addMoviebtn');
const dropForm = document.getElementById('dropForm');
const dropBg = document.getElementById('dropBg');
const closedMovie = [...document.querySelectorAll('.closedMovie')]
const movieForm = document.getElementById('movieForm');
const title = document.getElementById('title');
const imgUrl = document.getElementById('imgUrl');
const rating = document.getElementById('rating');
const moviesContainer = document.getElementById('moviesContainer')

let dropDwonArr = [
    {
        Movie_title : 'Stand up',
        Movie_imageUrl :'data:image/jpeg;base64,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',
        Movie_rating : 5
    }
]
cl(dropDwonArr)
const DropTemp = (arr) => {
    let result = '';
    arr.forEach(drop => {
        result +=
            `
            <div class="col-md-4 col-sm-6 mb-20">
                <div class="card-group">
                    <div class="card border-0">
                        <div class="card-header bg-primary text-white">
                            <h2>${drop.Movie_title}</h2>
                        </div>
                        <div class="card-body">
                            <img class="img" src="${drop.Movie_imageUrl}"
                                class="card-img-top" alt="logo">
                        </div>
                        <div class="card-footer">
                            <p>${drop.Movie_rating}/5</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    })
    moviesContainer.innerHTML = result
}



const OnHideShowHandler = () => {
    dropForm.classList.toggle('visible');
    dropBg.classList.toggle('visible');
    
}

DropTemp(dropDwonArr)
const OnSubmitHandler = (e) => {
    e.preventDefault()
    let dropDwonObj = { Movie_title: title.value, Movie_imageUrl: imgUrl.value, Movie_rating: rating.value };
    dropDwonArr.unshift(dropDwonObj)
    DropTemp(dropDwonArr)
    e.target.reset()
    dropForm.classList.toggle('visible');
    dropBg.classList.toggle('visible');
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Successfully Movie Added',
        showConfirmButton: false,
        timer: 2000
    })
}


addMoviebtn.addEventListener('click', OnHideShowHandler);
closedMovie.forEach(ele => ele.addEventListener('click', OnHideShowHandler))
movieForm.addEventListener('submit', OnSubmitHandler)