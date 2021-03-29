export interface Book
{
    numFound : number;
    start : number;
    docs : Docs []    
}

export interface Docs 
{
    key : string;
    type : string;
    title : string;   
}