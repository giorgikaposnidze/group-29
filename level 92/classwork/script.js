// N1
function returnPromise(){
    return new Promise((resolve, reject) =>
    
    {
        const random = Math.random();
        
        if (random < 0.5) {
            reject("Rejected: random < 0.5");
        }else{
            resolve("Resolved: random >= 0.5")
        }

    });

    }


// N2
async function asyncFunc(){
    try{
        const result = await returnPromise();
        console.log(result);
    }catch (error) {
        console.log(error);
    }
}