import { Suspense } from "react";
import { Await, NavLink, useAsyncValue, useLoaderData } from "react-router-dom"

export function Blog() {
    const { data } = useLoaderData()
    const posts = [...data]
    console.log('posts :>> ', posts);
    // const Wait =(()=>{
    //     let i
    //     for(i = 0; i >= 0; i++){
    //         if(i === 3000000000){
    //             break
    //         }
    //     }
    //     return i
    // })()
    return <>

        <h1>Mon Blog</h1>
        <Suspense fallback={<div className="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>}>
            <Await resolve={posts}>
                <PostsList />
            </Await>
        </Suspense>
        {/* <ul>
            {
                posts.map((post) => (

                    <li className="nav" key={post.id}>
                        <NavLink to={post.id} className="nav-link">{post.title}<a href="#" className="badge bg-warning">B</a>
                        </NavLink>
                    </li>
                ))
            }
        </ul> */}
    </>
}

function PostsList() {
    const posts = useAsyncValue()
    console.log('posts :>> ', posts);
    return <ul>
        {
            posts.map((post) => (

                <li className="nav" key={post.id}>
                    <NavLink to={post.id} className="nav-link">{post.title}<a href="#" className="badge bg-warning">B</a>
                    </NavLink>
                </li>
            ))
        }
    </ul>
}