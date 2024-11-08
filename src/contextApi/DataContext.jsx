import { createContext, useEffect, useState } from "react";


export const DataContext = createContext();

export const DataProvider =({children}) =>{


   const [cardId, setCardId] = useState([]);


const handleDetails =(id)=>{
     console.log("hello",id);
     setCardId(id)

}




   useEffect (()=>{

     




   },[])







return (
    <DataContext.Provider value={{handleDetails,cardId}}>
        {children}
    </DataContext.Provider>
)
};


