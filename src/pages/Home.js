
import { Items } from "../components/Items"
import { Nav } from "../components/Nav"
import Search from "../components/Search"


export const Home = () => {

    return (
        <div>


            <Nav></Nav>
            <div className="container-general">
                <div className="container sub-container">
                    <Items></Items>
                </div>

            </div>




        </div>

    )

}