export async function getPortfolio(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        return await response.json();
    }catch(err){
        console.log(err);
    }
}