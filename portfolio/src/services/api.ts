export async function getPortfolioCategory(){
    try{
        const response = await fetch("../../public/data/category.json");
        return await response.json();
    }catch(err){
        console.log(err);
    }
}

export async function getPortfolioContent(){
    try{
        const response = await fetch ("../../public/data/portfolio.json");
        return await response.json()
    }catch(err){
        console.log(err);
        
    }
}