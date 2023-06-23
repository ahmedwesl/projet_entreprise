import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import "../Components/PagesSelection.scss"
import {PagesSelection} from "../Components/PagesSelection";
import "./PageSelector.scss"

function ShowPages() {
    return (
        <div>
            <PagesSelection
                elems={[
                    {
                        id: "Page1",
                        label: <p>NOUVEAU <br /> PROJET</p>,
                        element: <Page1 />,
                    },
                    {
                        id: "Page2",
                        label: <p> OUVRIR<br /> UN PROJET</p>,
                        element: <Page2 />,
                    },
                    {
                        id: "Page3",
                        label: <p>ETUDIER<br />UN POINT DE VENTE</p>,
                        element: <Page3 />,
                    },
                    {
                        id: "Page4",
                        label: <p>EDITER <br />LE PARC</p>,
                        element: <Page4 />,
                    },
                ]}
            ></PagesSelection>
        </div>
    );
}
export default ShowPages;





// /*
//   const [selectedOption, setSelectedOption] = useState("");
//
//   const buttons = [
//       { optionId: "Page1", element: <Page1 />},
//       { optionId: "Page2", element: <Page2 />},
//       { optionId: "Page3", element: <Page3 />},
//       { optionId: "Page4", element: <Page4 />}
//   ];
// */



// function Toto() {
//     const [selectedPage, setSelectedPage] = useState(null);
//
//     const handleButtonClick = (page) => {
//         setSelectedPage(page);
//     };
//
//     const renderPage = () => {
//         switch (selectedPage) {
//             case "Page1":
//                 return <Page1 />;
//             case "Page2":
//                 return <Page2 />;
//             case "Page3":
//                 return <Page3 />;
//             case "Page4":
//                 return <Page4 />;
//             default:
//                 return null;
//         }
//     };
//
//     return (
//         <div>
//             {selectedPage ? (
//                 <div>{renderPage()}</div>
//             ) : (
//                 <div>
//                     <button onClick={() => handleButtonClick("Page1")}>Page 1</button>
//                     <button onClick={() => handleButtonClick("Page2")}>Page 2</button>
//                     <button onClick={() => handleButtonClick("Page3")}>Page 3</button>
//                     <button onClick={() => handleButtonClick("Page4")}>Page 4</button>
//                 </div>
//             )}
//         </div>
//     );
// }

