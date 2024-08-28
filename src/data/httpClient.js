const API = 'https://api.themoviedb.org/3'
export function get(path){
    return fetch(API+path,{
        headers:{
            Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWQyMTQxZDA2OThlYmQ2YjkzMTViZTQwNDA3NGI4NCIsIm5iZiI6MTcyNDI5NTM5Mi43NjgxNTQsInN1YiI6IjY2YzZhNjNlZTUwMmVlN2MxMzE1ODIwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8GJqV7r2LongvqK-W5VFWpJD9mzFgmh9RU5y3kF7mK0",
            "Content-Type": "application/json;charset-utf-8"
        },
    }).then((result) => result.json());
}