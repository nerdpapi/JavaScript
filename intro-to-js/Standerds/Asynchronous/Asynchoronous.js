function asyncFunction(){
    console.log('starting the async function');

    function middleFunction(){
    setTimeout(()=>{
        console.log('Execute immediately');
    },2000);
}
middleFunction()
console.log ('Ending the async operator')
}
asyncFunction()