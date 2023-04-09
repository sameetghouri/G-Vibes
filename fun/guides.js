exports.handler = async (event,context)=>{
    const guides = [
        {title:'Tom Rider Playing Guid',author:'Jani'},
        {title:'Battlefield Playing Guid',author:'Jani'},
        {title:'COD Playing Guid',author:'Ash'},
    ]

    if(context.clientContext.user){
    return {
        statusCode:200,
        body:JSON.stringify(guides)}
    }
    return{
        statusCode:400,
        body:JSON.stringify({mssg:'Unauthorized Na Na'})
    }
}