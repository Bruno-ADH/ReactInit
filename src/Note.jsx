//Le jsx

// const title = "Bonjour les gens"
// const style = {
//   color: 'white',
//   textAlign: 'center',
//   backgroundColor: 'red'
// }

// const todos = [
//   'Présenter react',
//   'Présenter le JSX',
//   'Créer des composants'
// ]

// function App() {

//   return <>
//     <Title color="whitesmoke" backgroundColor="darkOrange">De Moscou</Title>
//     <p>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit praesentium dicta necessitatibus laboriosam non, repellat incidunt saepe, officiis hic vero architecto obcaecati expedita magnam, neque accusantium quis voluptates officia quam!
//     </p>
//     <ul>
//       {
//         todos.map(todo => <li key={todo}>{todo}</li>)
//       }
//     </ul>
//   </>
// }

// function Title({color: color, backgroundColor: backgroundColor ,...props}) {
//   if(props.hidden){
//     return null
//   }

//   const prop = {
//     id:'ionid',
//   }
//   return <h1 className="title " style={{color,backgroundColor, textAlign: 'center'}} {...prop} {...props}/>
// }

//Le hook usetatate
// import { useState } from "react"

// const stylediv = {
//   display: 'grid',
//   placeItems: 'center',
//   height: '100vh',
// }

// const style = {
//   color: 'whitesmoke',
//   backgroundColor: 'darkorange',
//   padding: '.7rem',
//   border: 'none',
//   borderRadius: '4px',
//   cursor: 'pointer',
// }

// function App() {
//   const [person, setPerson] = useState({
//     firtName: 'John',
//     lastName: 'Doe',
//     age: 18,
//   })
//   // let count = 0

//   const incrementAge = (e) => {
//     setPerson({...person, age: person.age + 1})
//     // e.target.previousSibling.innerHTML = `Compteur : ${count}`
//   }

//   const [count, setCount] = useState(0)
//   const incrementCount = () => {
//     setCount(count + 1)
//   }

//   return <div style={stylediv}>
//     <span>{person.lastName} : {person.age}</span>
//     <button onClick={incrementAge} style={style}>Gagner une année</button>
//     <button onClick={incrementCount} style={{...style, fontWeight: 'bolder'}}>Incrementer : {count}</button>
//   </div>
// }

// export default App

//les formulaires
// import { useState } from "react"
// import './css/bootstrap.css'

// function App() {

//   const [value, setValue] = useState('')

//   const handleChange = (e) => {
//     setValue(e.target.value)
//   }

//   const [checked, setChecked] = useState(true)
//   const toggleChange = (e) => {
//     setChecked(!checked)
//   }

//   console.log('azea :>> ', checked);

//   return <div className="container mt-3">
//     <form>
//       <div className="mb-3">
//         <label htmlFor="firstname" className="form-label">Name</label>
//         <input onChange={handleChange} type="text" className="form-control" name="firstname" id="firstname" placeholder="firstname" value={value}/>
//       </div>
//       <div className="mb-3">
//         <label htmlFor="" className="form-label"></label>
//         <textarea onChange={handleChange} className="form-control" name="" id="" rows="3" value={value}/>
//       </div>
//       <div className="form-check">
//         <input className="form-check-input" type="checkbox" name="check" id="check" checked={checked} onChange={toggleChange}/>
//         <label className="form-check-label" htmlFor="check">
//           Checked checkbox
//         </label>
//       </div>
//       <button onClick={e => e.preventDefault()} type="submit" disabled={!checked} className="btn btn-light">Primary</button>
//     </form>
//   </div>
// }

// export default App

//Le flux de donnée
// import { useState } from "react"
// import './css/bootstrap.css'

// function App() {
//   const [isTermAccept, setisTermAccept] = useState(false)
//   console.log('isTermAccept :>> ', isTermAccept);

//   return <div className="container mt-3">
//     <form>
//       <CGUCheckbox checked={isTermAccept} onCheck={setisTermAccept}/>
//       <button disabled={!isTermAccept} type="button" className="btn btn-primary">Primary</button>
//     </form>
//   </div>
// }

// function CGUCheckbox({ checked, onCheck }) {
//   return <div className="form-check">
//     <input onChange={(e) => {onCheck(e.target.checked)}} className="form-check-input" type="checkbox" name="check" id="check" checked={checked} />
//     <label className="form-check-label" htmlFor="check">
//       Accepter les conditions d'utilisation
//     </label>
//   </div>
// }

// export default App

//Le hook UseEffect
// useEffect(() => {

//     const handler = (e) => {
//         console.log('scroll');
//         setY(window.scrollY)
//     }

//     window.addEventListener('scroll', handler)

//     return () => {
//         window.removeEventListener('scroll', handler)
//     }
// }, [])
//Encore useEffect
// import './css/bootstrap.css';
// import { Input } from './components/forms/Input.jsx';
// import { useState } from 'react';
// import { Checkbox } from './TpTableFiltre/components/forms/Checkbox.jsx';
// import { useEffect } from 'react';


// function App() {

//     const [showInput, setShowInput] = useState(true)

//     return <div className="container mt-4 g-2">
//         <Checkbox
//             checked={showInput}
//             onCheck={setShowInput}
//             label="Afficher le champs titre"
//             id="titleshow"
//         />
//         {showInput && <EditTitle />}
//         <div style={{ height: '300vh' }} className='bg-success' ></div>
//     </div>

// }

// function EditTitle() {

//     const [title, setTitle] = useState('')
//     const [firstname, setFirstname] = useState('')
//     const [y, setY] = useState(0)

//     useEffect(() => {
//         const originalTitle = document.title
//         return () => {
//             document.title = originalTitle
//         }
//     }, [])

//     useEffect(() => {
//         document.title = title
//     }, [title])

//     return <div className="vstack g-2">
//         <div className="">
//             Scroll: {y}
//         </div>
//         <Input
//             placeholder="Modifier le titre"
//             value={title}
//             onChange={setTitle}
//         />
//         <Input
//             placeholder="Prénom"
//             value={firstname}
//             onChange={setFirstname}
//         />
//     </div>
// }

// export default App
//UseEffectTOUJOURS TP
// import './css/bootstrap.css';
// import { Input } from './components/forms/Input.jsx';
// import { useState } from 'react';
// import { Checkbox } from './TpTableFiltre/components/forms/Checkbox.jsx';
// import { useEffect } from 'react';


// function App() {
//     const [duration, setDuration] = useState(5)
//     const [secondsLeft, setSecondsLeft] = useState(duration)
    
//     console.log('render');

//     const handleChange = ((v) => {
//         setDuration(v)
//         setSecondsLeft(v)
//     })

//     console.log('render');

//     useEffect(()=>{
//         const timer = setInterval(()=>{
//             setSecondsLeft(v => {
//                 if(v <= 1){
//                     clearInterval(timer)
//                     return 0
//                 }
//                 return v - 1
//             })
//         }, 1000)

//         return () => {
//             clearInterval(timer)
//         }
//     },[duration])

//     return <div className="container g-2 mt-4">
//         <Input placeholder="Entrer un nombre" value={duration} onChange={handleChange}/>
//         <Timers>{secondsLeft}</Timers>
//     </div>
// }

// function Timers(value) {
//     const timer = parseInt(value.children)
//     return <div className="text-center">
//        Decompte: {timer}
//     </div>
// }

// export default App

//HOOK USEMEMO ET USEID

// import './css/bootstrap.css';
// import { Input } from './components/forms/Input.jsx';
// import { useState } from 'react';
// import { Checkbox } from './TpTableFiltre/components/forms/Checkbox.jsx';
// import { useMemo } from 'react';
// import { useId } from 'react';

// function App() {
//     const [firstname, setFirstname] = useState('John')
//     const [password, setPassword] = useState('MotDePasse')
//     const security = useMemo(()=>{
//         return passwordSecurity(password)
//     },[password])
//     console.log(useId());

//     const random = useMemo(()=> Math.random(),[])

//     return <div className="container vstack g-2 mt-5">
//         {random}
//         <div>
//             <Input type="text" placeholder="John" value={firstname} onChange={setFirstname} label="Nom d'utilisateur" />
//         </div>
//         <div>
//             <Input type="password" placeholder="MotDePasse" value={password} onChange={setPassword} label="Password" />
//             Sécurité : {security}
//         </div>
//     </div>
// }

// function passwordSecurity(password) {
    
//     //Fausse lenteur
//     let startTime = performance.now();
//     while(performance.now() - startTime < 200){

//     }

//     if(password.length < 3){
//         return 'Faible'
//     } else if(password.length < 6){
//         return 'Moyen'
//     }
//     return 'Fort'
// }

// export default App

//HOOK USEREF

// import './css/bootstrap.css';
// import { Input } from './components/forms/Input.jsx';
// import { useEffect, useMemo, useRef, useState } from 'react';
// function App() {

//     const ref = useRef(null)
//     console.log('ref :>> ', ref);

//     const [prefix, setPrefix] =  useState('')

//    return <div className="container m-3">
//     <Input value={prefix} onChange={setPrefix} ref={ref} label="Prefix" type="text" placeholder="Prefix" />
//     {prefix.length === 0 && <div ref={ref}>hello</div> }
//    </div>
// }

// export default App

//Creer un HOOK Personnalisé
// import { useState } from 'react';
// import './css/bootstrap.css';
// import { useToggle } from './hooks/useToggle';

// function App() {
//     const [checked, toggleChecked] = useToggle()

//     return <div className="container text-center m-3 text-uppercase">
//         <input type="checkbox" className='form-check-input' name="" value={checked} onChange={toggleChecked} id="" />
//         {checked && 'Je suis coché'}
//     </div>
// }
 
// export default App

//ENCORE HOOK PERSO
// import { useEffect, useState } from 'react';
// import './css/bootstrap.css';
// import { useToggle } from './hooks/useToggle';
// import { useIncrement } from './hooks/useIncrement';
// import { useDocumentTitle } from './hooks/useDocumentTitle';
// import { Input } from './components/forms/Input.jsx';

// function App() {
//     const [name, setName] = useState('')
//     const [checked, toggleChecked] = useToggle()
//     const {count, increment, decrement} = useIncrement({
//         base: 0, 
//         max: 15, 
//         min: -12
//     })

//     useDocumentTitle(name ? `Editer ${name}` : null)

//     return <div className="container text-center m-3 text-uppercase">
//         <input type="checkbox" className='form-check-input' name="" value={checked} onChange={toggleChecked} id="" />
//         {checked && 'Je suis coché'}
//         <div className="text-light bg-success p-4">
//             {count}
//         </div>
//         <button onClick={increment} type="button" className="btn m-3 btn-outline-primary">
//            Increment
//         </button>
//         <button onClick={decrement} type="button" className="btn m-3 btn-outline-warning">
//            Decrement
//         </button>
//         <Input type="text" value={name} label="Changer le titre" onChange={setName}/>
//     </div>
// }

// export default App;

//HOOK PERSO SUITE TP
// import { useEffect, useState } from 'react';
// import './css/bootstrap.css';
// import { useToggle } from './hooks/useToggle';
// import { useIncrement } from './hooks/useIncrement';
// import { useDocumentTitle } from './hooks/useDocumentTitle';
// import { Input } from './components/forms/Input.jsx';
// import { useFetch } from './hooks/useFetch.jsx';

// function App() {
//     const { loading, data, errors } = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10&_delay=2008')

//     return <div className="container text-center m-3 text-uppercase">
//         {loading &&
//             <div className="spinner-border text-warning" role="status">
//                 <span className="visually-hidden">Loading...</span>
//             </div>}
//         {errors && <div className="row alert alert-danger align-items-center"> {errors.toString()}</div>}
//         {data && <div className='m-4'>
//             <ul className='list-group'>
//                 {data.map((article) =>
//                 (
//                     <details key={article.id} className="list-group-item text-start">
//                         <summary className='m-2'>{article.title}</summary>
//                         {article.body}
//                     </details>
//                 ))}
//             </ul>
//         </div>}
//     </div>
// }

// export default App;

//LA MEMOISATION
// import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
// import './css/bootstrap.css';
// import { Input } from './components/forms/Input.jsx';

// function App() {
//     console.log('APP', ' render');
//     const [name, setName] = useState('')
//     const nameRef = useRef(name)
//     nameRef.current = name

//     const handleClick = useCallback(() => {
//         console.log(nameRef.current);
//     }, [])

//     return <div className="container vstack m-3 gap-3">
//         <div>
//         <Input label="Prénom" onChange={setName} value={name} />
//         <div>
//             {name.toUpperCase()}
//         </div>
//     </div>
//         <InfoMemo onClick={handleClick}/>
//     </div>
// }

// const waitSync = (duration) => {
//     const start = Date.now()
//     while(Date.now() - start < duration){

//     }
// }

// const InfoMemo = memo(function Info({onClick}) {
//     console.log('info j');
//         waitSync(500)
    
//         return <div onClick={onClick} className="alert alert-info" role="alert">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eum molestias ipsam delectus dignissimos exercitationem repellat quisquam provident, ab iste accusamus voluptates esse quibusdam placeat natus sint consequatur doloribus ipsum?
//         </div>
    
//     }
//     )
// export default App;

//Les PORTAILS

// import './css/bootstrap.css';
// import { Input } from './components/forms/Input.jsx';
// import { createPortal } from 'react-dom';

// function App() {
//     return <div style={{
//         height: 400,
//         overflow: 'scroll',
//         backgroundColor: '#EEE',
//         margin: 20,
//         position: 'relative'
//     }}>
//         <p>
//             Cillum non velit dolor cillum elit voluptate minim do duis ex et Lorem in. Do commodo adipisicing voluptate ullamco. Consequat quis ipsum enim mollit. Ea exercitation elit commodo consequat qui reprehenderit eu aute nisi nostrud. Amet consequat deserunt mollit consectetur nulla exercitation occaecat laborum. Exercitation proident dolore officia dolore dolor culpa id mollit.
//         </p>

//         <p>
//             Cillum non velit dolor cillum elit voluptate minim do duis ex et Lorem in. Do commodo adipisicing voluptate ullamco. Consequat quis ipsum enim mollit. Ea exercitation elit commodo consequat qui reprehenderit eu aute nisi nostrud. Amet consequat deserunt mollit consectetur nulla exercitation occaecat laborum. Exercitation proident dolore officia dolore dolor culpa id mollit.
//         </p>

//         <p>
//             Cillum non velit dolor cillum elit voluptate minim do duis ex et Lorem in. Do commodo adipisicing voluptate ullamco. Consequat quis ipsum enim mollit. Ea exercitation elit commodo consequat qui reprehenderit eu aute nisi nostrud. Amet consequat deserunt mollit consectetur nulla exercitation occaecat laborum. Exercitation proident dolore officia dolore dolor culpa id mollit.
//         </p>
//         <Modal />
//     </div>

// }

// function Modal () {
//     return createPortal(<div style={{
//         position: 'absolute',
//         top: 0,
//         right: 0,
//         padding: 10,
//         border: 'solid 1px grey',
//         background: '#FFF'
//     }}>Je suis un modale</div>, document.body)
// }

// export default App;
