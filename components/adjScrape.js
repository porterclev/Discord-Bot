const cheerio = require("cheerio");
const axios = require("axios");

const url ="https://randomword.com/adjective";

async function getAdjective(){
    try{

        //Requests a resource from the server
        const response = await axios.get(url);

        //Loads HTML data
        const $=cheerio.load(response.data);

        //Specifies what data to pull
        const adjective = $("div#random_word").text();
        
        //Capitalizes first letter
        const randomAdjective = (adjective.charAt(0).toUpperCase() + adjective.slice(1));
        
    }
    catch(error){
        console.error(error);
    }
}

getAdjective();