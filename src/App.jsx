


import './css/bootstrap.css';
import { Input } from './components/forms/Input.jsx';
import { Checkbox } from './components/forms/Checkbox';
import { ProductRow } from './components/products/ProductRow.jsx';
import { ProductCategoryRow } from './components/products/ProductCategroryRow.jsx';
import { useEffect, useState } from 'react';
import { Range } from './components/forms/range.jsx';
import { ErrorBoundary } from 'react-error-boundary';
// import { ErrorBoundary } from './components/ErrorBoundary.jsx';

const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];


function App() {
    const [showStockedOnly, setshowStockedOnly] = useState(false)
    const [range, setrange] = useState(0)
    const [search, setsearch] = useState('')

    const visibleProducts = PRODUCTS.filter((product) => {
        if (showStockedOnly && !product.stocked) {
            return false
        }

        if (range && !product.price.includes(range)) {
            return false
        }

        if (search && !product.name.toLocaleUpperCase().includes(search.toLocaleUpperCase())) {
            return false
        }
        return true
    })
    console.log('range :>> ', range);

    return <div className="container my-3 g-2">
        <SearchBar search={search} onsearch={setsearch} showStockedOnly={showStockedOnly} onshowStockedOnlyChange={setshowStockedOnly} range={range} onrange={setrange} />

        <ErrorBoundary
            FallbackComponent={AlertError}
            onReset={() => console.log('object :>> ')}
        >
            <ProductTable products={visibleProducts} />
        </ErrorBoundary>
    </div>
}

function AlertError ({error, resetErrorBoundary}) {
    return <div className='alert alert-danger mt-3' role="alert">    
        {error.toString()}
        <button type='reset' className="btn btn-secondary ms-3" onClick={resetErrorBoundary}>Reset</button>
    </div>
}

function SearchBar({ showStockedOnly, onshowStockedOnlyChange, search, onsearch, range, onrange }) {
    return <div className="">
        <Input value={search} onChange={onsearch} placeholder="Rechercher..." />
        <Range value={range} onChange={onrange} />
        <Checkbox id="stocked"
            checked={showStockedOnly}
            onCheck={onshowStockedOnlyChange}
            label="N'afficher que les produits en stock" />
    </div>
}

function ProductTable({ products }) {
    const rows = []
    let lastCategory = null

    products.forEach(product => {
        if (product.category !== lastCategory) {
            rows.push(<ProductCategoryRow key={product.category} name={product.category} />)
        }
        lastCategory = product.category
        rows.push(<ProductRow product={product} key={product.name} />)
    });

    return <div
        className="table-responsive mt-4"
    >
        <table
            className="table table-light"
        >
            <thead>
                <tr>
                    <th scope="col">Nom</th>
                    <th scope="col">Prix</th>
                </tr>
            </thead>
            <tbody>
                {(rows.length < 1) ?
                    <tr>
                        <td colSpan={2} className="fw-semibold fs-3 text-center text-success">vide</td>
                    </tr>
                    :
                    rows}
            </tbody>
        </table>
    </div>
}

export default App;


// import { useContext, useState } from 'react';
// import './css/bootstrap.css';
// import { ThemedButton } from './components/forms/ThemedButton';
// import { ThemeContextProvider, useTheme } from './hooks/useTheme';

// function App() {

//     return (
//         <div className="container mt-5">
//                 <ThemeSwicther/>
//                 <Toolbar />
//         </div>
//     );
// }

// function Toolbar() {
//     return (
//         <div>
//             <ThemedButton />
//         </div>
//     );
// }

// function ThemeSwicther() {
//     const {toggleTheme} = useTheme() 
//     return  <button type="button" className="btn btn-primary" onClick={toggleTheme}>Changer de thème</button>
// }

// export default App;