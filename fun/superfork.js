exports.handler = async ()=>{
console.log('Funtion Ran')
const data ={
    name:'Sam',
    age:25,
    job:'Software Engineer',
}
return {
    statusCode:200,
    body:JSON.stringify(data)
}
}