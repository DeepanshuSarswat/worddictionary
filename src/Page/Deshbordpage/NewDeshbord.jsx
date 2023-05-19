
// return (
//     <DeshbordPage>
//         {
         

//             <div class="container" >
//             <input type="text" id="inputbar" name="inputbar"
//             placeholder="Search for files, contacts or actions"
//             onChange={handleChange}
//             />
//             <div className="indication">
//                 <div className="left">
//                     <span>⌘</span>
//                     <span>+</span>
//                     <span>F</span>
//                     <p>to open search</p>
//                 </div>
//                 <div className="right">
//                     <span>ESC</span>
//                     <p>to close</p>
//                 </div>
//             </div>
//             {
//                 suggestions != "No Definitions Found" && suggestions.length>0 ?
//                 <div className="output">
//                 {suggestions?.map((data,key)=>{
//                             return(
//                                 <SuggestionsOfWords  key={key}
//                                 onClick={()=>clickOnWord(data)}
//                                 >{data}</SuggestionsOfWords>
//                             )
//                         })
//                 }
//                </div>
//                : inputValue === "" ? <div className="output">
//                <div className="notification">
//                <p>Please enter at least 4 characters to begin search</p>
//                </div>
//               </div>
// :
// <div class="output">
// <div className="notification">
// <p>No Definitions Found</p>
// </div>

// </div>
               


//             }
                
            
//             </div>
//         }
      

      
//     </DeshbordPage>

// );
// }