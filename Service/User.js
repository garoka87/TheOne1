module.export.getData = async()=>{
    try{
        const pp={
         hostname : os.hostname(),
        platfore : os.platforme(),
        type : os.type(),
        release :os.release()
}
      console.log(pp)
        return pp;

    }catch(error){
        throw new Error("erreur");
    }
}