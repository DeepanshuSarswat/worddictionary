import { useNavigate } from "react-router";
import { useEffect,useState } from "react";
import styled from "styled-components";
// import { FetchData, FetchOnClickWorld } from "../../Utils/FetchData";
// import { FetchData } from "../../Utils/FecthData/FetchData
import { FetchData } from "../../Utils/FetchData";
import englishWords from "../../Utils/AllEnglishWords";
import SearchIcon from '@mui/icons-material/Search';
import SubdirectoryArrowLeftIcon from '@mui/icons-material/SubdirectoryArrowLeft';
import LinearProgress from '@mui/material/LinearProgress';
const Deshbord = () => {

    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [clickOnWordData, setClickOnWordData] = useState();
    const [WordMeaning, setWordMeaning] = useState("");
    const [Loading, setLoading] = useState(false);
    const handleChange = (event) =>{
            if(inputValue.length ===0){
                console.log("happy birthday");
                setWordMeaning("");
                setSuggestions([]);
            }
       
        setWordMeaning("")
        setInputValue(event.target.value);
        console.log(event.target.value, `setSuggestions`);
        if(event.target.value !== ""){
        const filteredArray = englishWords.filter(word => word.includes(`${event.target.value}`) && word.startsWith(`${event.target.value}`));
        // const filteredArray =  (englishWords.filter((element) => element.startsWith(`${event.target.value}`))).slice(0,5)
        
        setSuggestions(filteredArray.slice(0,5))
         }

    }

    const clickOnWord = (word) =>{
        setInputValue(word)
        setWordMeaning("");
        setLoading(true);
         FetchData(word, setWordMeaning,setLoading)   
         setClickOnWordData(word);
         
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(inputValue !== ""){
            setClickOnWordData("");
            setLoading(true);
            FetchData(inputValue, setWordMeaning,setLoading);
           
        }
    }

//  console.log(suggestions,"suggestions");

useEffect(()=>{
    if(!localStorage.getItem("userData")){
        navigate("/")
    }
    else{
        navigate("/Deshbord")
    }
})

useEffect(()=>{
    console.log(inputValue,"inputValue", inputValue.length);
    if(!inputValue){
        console.log("happy birthday");
        setWordMeaning("");
        setSuggestions([]);
    }
},[inputValue])

console.log(suggestions,"suggestions");
return (
    
    <DeshbordPage inputValue = {inputValue} suggestions = {suggestions}>
        <ParentContainer inputValue = {inputValue}>
        <div className ="container">
            <div className ="container-left">
              <SearchIcon className ="Icon" />
          <form onSubmit={handleSubmit}>
          <input type="text" 
          Placeholder="Deepanshu Sarswat"
          value = {inputValue}
        onChange={handleChange}
        />
          </form>
            </div>
            <div className ="container-right">
                <SubdirectoryArrowLeftIcon className ="Icon" />
                <p> to search </p>
            </div>
        </div>
    
    <div>
    {Loading &&   <LinearProgress color="inherit" />}
    </div>

    {
        WordMeaning &&   
        <Message>
      
        
        <span> Meaning of {clickOnWordData ?clickOnWordData: inputValue }</span> is :  {WordMeaning}
  
</Message>
    }
  

            <SuggestionBox suggestions = {suggestions} inputValue = {inputValue}>
            
                
                {
                suggestions?.map((data,key)=>{
                    return(
                        <SuggestionsOfWords  key={key}
                        onClick={()=>clickOnWord(data)}
                        >{data}</SuggestionsOfWords>
                    )
}
                )
}
{suggestions.length == 0 && inputValue.length>0 && <Message>No such word in the dictionary</Message>}
      
            
           </SuggestionBox>
     
       
        </ParentContainer>
    </DeshbordPage>
)

}

export default Deshbord;

const DeshbordPage = styled.div`
color:#57534e;
height:100vh;
background:black;
display: flex;
align-items: center;
justify-content: center;


// .parent-container{
//     border-radius:8px;
//     height:${({inputValue,suggestions})=> (inputValue !== "" && suggestions.length !== 0) ? "400px" : "0"};
//     transition: height 0.5s ease-in-out 0s;
//     background:rgb(37, 39, 44);
// }

.container {
position: relative;
width:800px;
background:rgb(37, 39, 44);
border-radius:8px;
display: flex;
align-items: center;
justify-content: space-between;
padding:16px;
border-bottom:1px solid #52525b;

}

.container-left, .container-right{
    display: flex;
    align-items: center;
    justify-content: center;

    input{
        font-size:1.2rem;
        padding:12px;
        width:600px;
        background:rgb(37, 39, 44);
        color:#6b7280;
        outline:0;
        border:0;
        font-weight:600;
    }
}

.Icon{
    width:40px;
    height:40px;
    margin-right:12px;
}

 `
  

const SuggestionsOfWords = styled.p`
padding:24px;
transition:  0.4s ease;
// width:100%;
&:hover{
    color:#a3a3a3;
    background:#334155;
}
`






const ParentContainer  = styled.div`
border-radius:8px;
// height:${({inputValue})=> inputValue !== "" ? "350px" : "0"};
transition: height 0.5s ease-in-out 0s;
background:rgb(37, 39, 44);
`


const SuggestionBox = styled.div`
border-radius:8px;
height:${({inputValue,suggestions})=> (inputValue !== "" && suggestions.length !== 0) ? "350px" : "0"};
transition: height 0.5s ease-in-out 0s;
background:rgb(37, 39, 44);
color:#9ca3af;
`

const Message = styled.div`
padding: 16px;
color: rgb(156, 163, 175);
font-size: 16px;
width: 800px;
word-spacing:4px;
line-height: 1.6;
`










// clickOnWordData ? 
// <WordDetailPage>
// <p>
//     <span>Word Details</span>
//     <button onClick={handleClose}>X</button>
// </p>
// <WordDetails>
//     <WordBasicInfo>
//         <div>Word: <span>{clickOnWordData?.word}</span></div>
//         <div>phonetic: <span>{clickOnWordData?.phonetic}</span></div>
//     </WordBasicInfo>

//     <WordBasicInfo>
//          <div>License Name: <span>{clickOnWordData?.license?.name}</span></div>
//         <div>License Url: <span>{clickOnWordData?.license?.url}</span></div>
//     </WordBasicInfo>

//     <WordPhoneticsDetails>
//     <div>Phonetics: </div>
//     <div className="border-bottom"></div> 
//         {
//             clickOnWordData?.phonetics?.map((data)=>{
//                 return(
//                     <>
//                     <div>Phonetics Text: <span>{data?.text?data?.text:"--"}</span></div>
//                                 <div>Phonetics Audio: <span>{data?.audio?data?.audio:"--"}</span></div>
//                                 <div>Phonetics SourceUrl: <span>{data?.sourceUrl?data?.sourceUrl:"--"}</span></div> 
//                                 <div className="border-bottom"></div> 
                                     
//                    </>
//                 )
//             })
//         }
     
//     </WordPhoneticsDetails>

    
    
// </WordDetails>
// </WordDetailPage>
// :