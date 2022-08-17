import { useState } from "react";
import { AddCategory, GiftGrid } from "./components";//cuando tienes un index solo haces referencia a una carpeta
export const GifExpertApp = () => {
    // Si tengo informacion que va cambiar debo usar hook que mantiene el estado
    const [categories, setCategories] = useState(['One Punch']);
    console.log(categories)
     const onAddCategory=(newCategory)=>{
        if(categories.includes (newCategory))return;
        //agregar uno nuevo
        // console.log(newCategory);
        // categories.push(newCategory);
        setCategories([newCategory, ...categories]);

     }
    return (
    <>
    {/* titulo */}
        <div>GifExpertApp</div>
        
    {/* input  */}
    <AddCategory 
    // setCategories={setCategories}
        onNewCategory = {(value) => onAddCategory(value)}
    />


    {/* Lista de gift  */}
    {/* <button onClick={onAddCategory}>Agregar</button> */}
   
    {
        categories.map((category) => {
            return(<GiftGrid 
            key={category} 
            category={category}/>)
        })
    }
        {/* giftItem */}
    </>
  )
}