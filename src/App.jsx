import { createBrowserRouter, Link, NavLink, Outlet, RouterProvider, useRouteError } from 'react-router-dom';
import './css/bootstrap.css';
import './css/style.css'
import { Single } from './pages/Single';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <PageError />,
        children: [
            {
                path: 'blog',
                element: <Single />
            },
            {
                path: 'contact',
                element: <div className="container my-1">Contact</div>
            },
        ]
    }
])

function PageError() {
    const error = useRouteError()
    console.log('error :>> ', error);

    return <div className="d-flex justify-content-center align-items-center bg-light vh-100">
        <div className="bounceAnime">
            <h3 className='h3 text-muted text-uppercase'>Une erreur est survenue</h3>
            <p>
                {error?.error?.toString() ?? error?.toString()}
            </p>
        </div>
    </div>
}

function Root() {
    return <>
        <header>
            <nav
                className="nav justify-content-center  "
            >
                <NavLink to="/" className="nav-link"
                >Accueil</NavLink>
                <NavLink to="/blog" className="nav-link" >Blog</NavLink>
                <NavLink to="/contact" className="nav-link" >Contact</NavLink>
            </nav>
        </header>
        <div className="container my-4">
            <Outlet />
        </div>
    </>
}

function App() {
    return <RouterProvider router={router} />
}

export default App;