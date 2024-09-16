import { useEffect, useState } from "react";
import { generateRandomUsers } from "./libs/generateRandomUsers";
import { mapEmployees } from "./libs/mapEmployees";

const PAGE_SIZE = 7;
function App() {
    const [employees, setEmployees] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        /*
                Imitating backend loading data process
             */
        (function () {
            setIsLoading(true);
            const timeout = setTimeout(() => {
                setEmployees((prevState) => [
                    ...prevState,
                    ...mapEmployees(generateRandomUsers(7, currentPage * PAGE_SIZE)),
                ]);
                setIsLoading(false);
                clearTimeout(timeout);
            }, 2000);
        })();
    }, [currentPage]);

    const onIncreaseCurrentPage = () => {
        setCurrentPage((prevState) => ++prevState);
    };

    return (
        <div>
            <ul>
                {employees.length > 0 ? (
                    employees.map(({ name, id }) => {
                        return <li key={id}>{name}</li>;
                    })
                ) : (
                    <div>No data available</div>
                )}
            </ul>
            <button disabled={isLoading} onClick={onIncreaseCurrentPage}>
                {isLoading ? "Loading..." : "Load More"}
            </button>
        </div>
    );
}

export default App;
