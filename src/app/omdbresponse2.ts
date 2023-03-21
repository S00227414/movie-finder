export interface IOMDBResponse2{
    Search: movieDetails[];
    totalResults:number;
}

interface movieDetails{
    Title:string;
    Year:string;
    ImdbID:string;
    Poster:string;
    Type:string;
    Error:string;
}