import React from 'react';
import { Link, NavLink, Outlet} from 'react-router-dom';


function getClassName({isActive}) //mettre l'accent sur la Page active dans le menu
      { if (isActive) 
        { return "active";} // CSS class 
          
       /* else 
          { return ""; } */
         
        
       } 
       //utiliser NavLink pour passer comme valeur  à la prop className une définition de fonction
      
function App() {
 
 
    return (
   <>
      <nav>
        <ul>
           <li>
                <NavLink to="/Accueil" className={getClassName}>Accueil</NavLink>
            </li>
            <li>
                <Link to="/Presentation">Présentation</Link>
                  
            </li>
           
            <li>
                <Link to="/Articles">Articles</Link>
            </li>
            
        </ul>
    </nav>
      <Outlet />
    
      </>

);
}
//Outlet : destiné à afficher les composants enfants d'une route

/* exact : Cela signifie que cette route ne correspondra que si le chemin est exactement /. Si tu as d'autres routes comme /about, cette route ne sera pas activée pour elles.*/

export default App;
