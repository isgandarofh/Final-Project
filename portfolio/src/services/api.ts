export async function getPortfolioCategory(){
    try{
        const response = await fetch("/data/category.json");
        return await response.json();
    }catch(err){
        console.log(err);
    }
}

export async function getPortfolioContent(){
    try{
        const response = await fetch ("/data/portfolio.json");
        return await response.json()
    }catch(err){
        console.log(err);
    }
}

export async function getServicesContent(){
    try{
        const response = await fetch ("/data/services.json");
        return await response.json()
    }catch(err){
        console.log(err);
        
    }
}