
export const FetchData = (word, setWordMeaning,setLoading) =>{
  
    // Call the Dictionary API with a dynamic URL based on the current input value
     fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
     .then(data=>data.json())
     .then((data)=>{
        setLoading(false);
     if(data?.title == "No Definitions Found"){
       
        setWordMeaning("No Definitions Found")
     }
           setWordMeaning(data[0]["meanings"][0]["definitions"][0]["definition"]);
            
        
     })
     .catch((err)=> console.log(err))
    

  
    // Extract the suggestions from the API response
   
}


// if (data.title === "No Definitions Found"){
//     setWordMeaning("No Definitions Found")
// }