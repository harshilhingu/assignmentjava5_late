/*
    Assignment 05
*/

$(document).ready(function () {
    class ContentItem{
        id = 0;
        country = "Country";
        capital = "Captial";
        continent = "Continent";
        constructor(id, country, capital, continent){
            this.id = id;
            this.country = country;
            this.capital = capital;
            this.continent = continent;
        }
        get id(){
            return this.id;
        }
        set id(value){
            this.id = value;
        }
        get country(){
            return this.country;
        }
        set country(value){
            this.country = country;
        }
        get capital(){
            return this.capital;
        }
        set capital(value){
            this.capital = capital;
        }
        get continent(){
            return this.continent;
        }
        set continent(value){
            this.continent = continent;
        }
        updateContentItem(country, capital, continent){
            if(country != null && capital != null && continent != null){
             this.country = country;
             this.capital = capital;
             this.continent = continent;   
            }
        }

        toString(){
            return `<div id ="content-${this.id}"><h2>${this.country}</h2><p>Captial of the country is <b>${this.capital}</b></p><div>Continent of the country is <b>${this.continent}</b></div></div>`;
        }
    }

    let ContentItems = [
        {
            id:0,
            country:"India", 
            capital:"New Delhi", 
            continent: "Asia"
        },
        { 
            id:1, 
            country:"Canada", 
            capital:"Ottawa", 
            continent: "North America"
        },
        {
            id:2, 
            country:"Bulgaria", 
            capital:"Sofia", 
            continent: "Africa"
        },
        {
            id:3, 
            country:"France", 
            capital:"Paris", 
            continent: "Europe"
        },
        {
            id:4, 
            country:"Australia", 
            capital:"Canberra", 
            continent: "Australia"
        },
        {
            id:5, 
            country:"Brazil", 
            capital:"Brasilia", 
            continent: "South America"
        }
    ];

    let  countryarr = [];
    for(i=0; i< ContentItems.length; i++){
        countryarr[i] = new ContentItem(ContentItems[i].id,ContentItems[i].country,ContentItems[i].capital,ContentItems[i].continent);
    }
    for(i=0; i<countryarr.length; i++){
        $('#content-item-list').append(""+ countryarr[i]);
        $(`#content-${i}`).addClass('content-item-wrapper');
    }

});


