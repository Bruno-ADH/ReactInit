import { createBrowserRouter, defer, Link, NavLink, Outlet, RouterProvider, useNavigate, useNavigation, useRouteError } from 'react-router-dom';
import './css/bootstrap.css';
import './css/style.css'
import { Single } from './pages/Single';
import { Data } from '../post';
import { Blog } from './pages/Blog';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <PageError />,
        children: [
            {
                path: 'blog',
                element: <div className="row">
                    <aside className='col-3'>
                        <h2>Sidebar</h2>
                    </aside>
                    <main className='col-9'>
                        <Outlet/>
                    </main>
                </div>,
                children: [
                    {
                        path: '',
                        element: <Blog/>,
                        loader: () => {
                            const data = Data()
                           return defer({data})
                        }
                    },
                    {
                        path: ':id',
                        element: <Single/>
                    }
                ]
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
    const {state} = useNavigation()
    console.log('state :>> ', state);
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
            {state === 'loading' && <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            }
            <Outlet />
        </div>
    </>
}

function App() {
    return <RouterProvider router={router} />
}

export default App;