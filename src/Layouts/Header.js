import { render } from "@testing-library/react";
import react from "react";

function Header()
{
return(
<ul>
    <li>
        <a href="">
            Dashboard
        </a>
        
        <a href="">
            LiveStock
        </a>
        
        <a href="">
            Labours
        </a>
        
        <a href="">
            Store
        </a>
        <a href="">
            Plants
        </a>
    </li>
</ul>

)
}

export default Header;