
import { useFetchGifs } from "../hooks/useFetchGifs";
import{GifItem} from "./GifItem";
// import{getGifs} from "../helpers/getgifs";
export const GiftGrid = ({category}) => { 

  const {images, isLoading} =useFetchGifs (category);
  
  return (
    <>
        <h3>{category}</h3>
        {
            isLoading && (<h2>Cargando...</h2>)
        }
        
        <div className="card-grid">
          {
            images.map((img) =>(//map({id, title}) =>(              
              <GifItem 
              key={img.id} 
              {...img}/>
            ))

          }
        </div>
    </>
  )
}
