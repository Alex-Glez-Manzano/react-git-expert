import { useState } from 'react'
import { GifExpertApp } from '../GifExpertApp';

export const AddCategory = ({onNewCategory}) => {
    //manejar el estado
    const [inputValue, seTinputValue] = useState('');
    const oninputChange = (event)=>{
        seTinputValue(event.target.value)
    }

    const onSubmit = (event)=>{
        event.preventDefault();
    
        if(inputValue.trim().length<=1)return;
        // console.log(inputValue);
        // setCategories((categories => [inputValue, ...categories]));
        onNewCategory(inputValue.trim());
        seTinputValue('');
    }
  return (
    // <form onSubmit={(event)=> onSubmit(event)}>
    <form onSubmit={onSubmit}>
        <input 
        type="text" 
        placeholder="Buscar gifs"  
        value={inputValue} 
        onChange={oninputChange}
    />
    </form>
  )
}
