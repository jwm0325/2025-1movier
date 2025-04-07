let MovieObject = {
    init : function(){
        alert("init함수가 불려짐")
    },

     getall: function(){
        alert("getall 함수가 불려짐")
        $.ajax({
            type: "GET",
            url: "http://localhost:8000/all",
        }).done(function(response){
            console.log(response)
            movielist = response.result

//            topdiv = document.createElement("div")
//            topdiv.style = "column-count:5"
//            document.body.appendChild(topdiv)
            topdiv = document.getElementById("alldiv")

            movielist.forEach(movie =>{
                cmovie = document.createElement('div')
                cmovie.className = "card"

                mimg = document.createElement("img")
                mimg.className = "card-img-top"
                mimg.src = movie.poster_path
                mimg.onclick = function(){
//                    window.location.href = movie.url
                    window.open(movie.url)
                }
                mimg.onmouseover = function(){

                }
                mimg.style.cursor = "pointer"
                cmovie.appendChild(mimg)
                topdiv.appendChild(cmovie)
            });

        }).fail(function(response){
            console.log(error)
        });
     },
     getgenres: function(){
        genre = document.getElementById("sgenre").value
        $.ajax({
            type: "GET",
            url: "http://localhost:8000/genresbest/"+genre,
        }).done(function(response){
            console.log(response)
            movielist = response.result

            topdiv = document.getElementById("genrediv")
//            topdiv.innerHTML = "" //기본영화내용을 없애는 방법1
            //방법2
            while(topdiv.firstChild){
                topdiv.removeChild(topdiv.firstChild)
            }

            movielist.forEach(movie =>{
                cmovie = document.createElement('div')
                cmovie.className = "card"

                mimg = document.createElement("img")
                mimg.className = "card-img-top"
                mimg.src = movie.poster_path
                mimg.onclick = function(){
//                    window.location.href = movie.url
                    window.open(movie.url)
                }
                mimg.onmouseover = function(){

                }
                mimg.style.cursor = "pointer"
                cmovie.appendChild(mimg)
                topdiv.appendChild(cmovie)
            });
        }).fail(function(response){
            console.log(error)
        });
     }
}
MovieObject.init();
MovieObject.getall();
