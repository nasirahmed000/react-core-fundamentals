// import Gallery, { Card as Image, Profile } from "./components/Gallery" ; //default import
// import Test from "./components/Test";

// import Avatar from "./components/Avatar";
// import PackingList from "./components/PackingList";

// function App() {

//   return (
//    <div>
//      <Profile />
//     <Gallery />
//     <Profile />
//     <Image/>
//     <Test/>

//    </div>

//   )
// }

// export default App

// const today = new Date();

// function formatDate(date) {
//   return new Intl.DateTimeFormat(
//     'en-US',
//     { weekday: 'long' }
//   ).format(date);
// }

// export default function TodoList() {
//   return (
//     <h1>To Do List for {formatDate(today)}</h1>
//   );
// }

// export default function TodoList() {
//   return (
//     <ul style={{
//       backgroundColor: 'black',
//       color: 'pink'
//     }}>
//       <li>Improve the videophone</li>
//       <li>Prepare aeronautics lectures</li>
//       <li>Work on the alcohol-fuelled engine</li>
//     </ul>
//   );
// }

// const person = {
//   name: 'Gregorio Y. Zara',
//   theme: {
//     backgroundColor: 'black',
//     color: 'pink'
//   }
// };

// export default function TodoList() {
//   return (
//     <div style={person.theme}>
//       <h1>{person.name}'s Todos</h1>
//       <img
//         className="avatar"
//         src="https://i.imgur.com/7vQD0fPs.jpg"
//         alt="Gregorio Y. Zara"
//       />
//       <ul>
//         <li>Improve the videophone</li>
//         <li>Prepare aeronautics lectures</li>
//         <li>Work on the alcohol-fuelled engine</li>
//       </ul>
//     </div>
//   );
// }
// person: {
//     name: 'Lin Lanying',
//     imageId: '1bX5QH6'
//   },
//   size: 100
// });

// export default function App() {
//   return (
//     <Avatar
//       person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
//       size={100}
//     />
//   );
// }
// const people = [{
//   id: 0,
//   name: 'Creola Katherine Johnson',
//   profession: 'mathematician',
// }, {
//   id: 1,
//   name: 'Mario José Molina-Pasquel Henríquez',
//   profession: 'chemist',
// }, {
//   id: 2,
//   name: 'Mohammad Abdus Salam',
//   profession: 'physicist',
// }, {
//   id: 3,
//   name: 'Percy Lavon Julian',
//   profession: 'chemist',
// }, {
//   id: 4,
//   name: 'Subrahmanyan Chandrasekhar',
//   profession: 'astrophysicist',
// }];

//  export default function App(){
//   const chemists = people.filter(person => person.profession === 'chemist');

//   const listItems = chemists.map((chemists)=> <li key={chemists.id}>{chemists.name}</li>)

//      return (
//        <div>
//         <div>
//           {listItems}
//         </div>
//        </div>
//      );
//  }

//   export default function App() {
//     function handleClick (){
//       console.log("button clicked")
//     }
//   return (
//     <button onClick={handleClick}> I don't do anything  </button>
//   );
// }

// function AlertButton({ message, children }) {
//   return (
//     <button onClick={() => alert(message)}>
//       {children}
//     </button>
//   );
// }

// export default function Toolbar() {
//   return (
//     <div>
//       <AlertButton message="Playing!">
//         Play Movie
//       </AlertButton>
//       <AlertButton message="Uploading!">
//         Upload Image
//       </AlertButton>
//     </div>
//   );
// }

// function Button({ onSmash, children }) {
//   return (
//     <button onClick={onSmash}>
//       {children}
//     </button>
//   );
// }

// export default function App() {
//   return (
//     <div>
//       <Button onSmash={() => alert('Playing!')}>
//         Play Movie
//       </Button>
//       <Button onSmash={() => alert('Uploading!')}>
//         Upload Image
//       </Button>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <Toolbar
//       onPlayMovie={() => alert('Playing!')}
//       onUploadImage={() => alert('Uploading!')}
//     />
//   );
// }

// function Toolbar({ onPlayMovie, onUploadImage }) {
//   return (
//     <div>
//       <Button onClick={onPlayMovie}>
//         Play Movie
//       </Button>
//       <Button onClick={onUploadImage}>
//         Upload Image
//       </Button>
//     </div>
//   );
// }

// function Button({ onClick, children }) {
//   return (
//     <button onClick={onClick}>
//       {children}
//     </button>
//   );
// }

// export default function Toolbar() {
//   return (
//     <div className="Toolbar" onClick={() => {
//       alert('You clicked on the toolbar!');
//     }}>
//       <button onClick={() => alert('Playing!')}>
//         Play Movie
//       </button>
//       <button onClick={() => alert('Uploading!')}>
//         Upload Image
//       </button>
//     </div>
//   );
// }

// function Button({ onClick, children }) {
//   return (
//     <button onClick={e => {
//       e.stopPropagation();
//       onClick();
//     }}>
//       {children}
//     </button>
//   );
// }

// export default function Toolbar() {
//   return (
//     <div className="Toolbar" onClick={() => {
//       alert('You clicked on the toolbar!');
//     }}>
//       <Button onClick={() => alert('Playing!')}>
//         Play Movie
//       </Button>
//       <Button onClick={() => alert('Uploading!')}>
//         Upload Image
//       </Button>
//     </div>
//   );
// }

// export default function Signup() {
//   return (
//     <form onSubmit={(e) => alert('Submitting!')}>
//       <input />
//       <button>Send</button>
//     </form>
//   );
// }

// export default function Signup() {
//   return (
//     <form onSubmit={e => {
//       e.preventDefault();
//       alert('Submitting!');
//     }}>
//       <input />
//       <button>Send</button>
//     </form>
//   );
// }

// import { sculptureList } from './data.js';

// import { useState } from 'react';

// export default function Gallery() {

//  const [index, setIndex] = useState(0);

//   function handleClick() {
//     setIndex (index +1);
//   }

//   let sculpture = sculptureList[index];
//   return (
//     <>
//       <button onClick={handleClick}>
//         Next
//       </button>
//       <h2>
//         <i>{sculpture.name} </i>
//         by {sculpture.artist}
//       </h2>
//       <h3>
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <img
//         src={sculpture.url}
//         alt={sculpture.alt}
//       />
//       <p>
//         {sculpture.description}
//       </p>
//     </>
//   );
// }

// import { useState } from 'react';
// import { sculptureList } from './data.js';

// export default function Gallery() {
//   const [index, setIndex] = useState(0);
//   const [showMore, setShowMore] = useState(false);

//   function handleNextClick() {
//     setIndex(index + 1);
//   }

//   function handleMoreClick() {
//     setShowMore(!showMore);
//   }

//   let sculpture = sculptureList[index];
//   return (
//     <>
//       <button onClick={handleNextClick}>
//         Next
//       </button>
//       <h2>
//         <i>{sculpture.name} </i>
//         by {sculpture.artist}
//       </h2>
//       <h3>
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <button onClick={handleMoreClick}>
//         {showMore ? 'Hide' : 'Show'} details
//       </button>
//       {showMore && <p>{sculpture.description}</p>}
//       <img
//         src={sculpture.url}
//         alt={sculpture.alt}
//       />
//     </>
//   );
// }

// import { useState } from 'react';

// export default function MovingDot() {
//   const [position, setPosition] = useState({
//     x: 0,
//     y: 0
//   });
//   return (
//     <div
//       onPointerMove={e => {
//         setPosition({
//           x: e.clientX,
//           y: e.clientY
//         });
//       }}
//       style={{
//         position: 'relative',
//         width: '100vw',
//         height: '100vh',
//       }}>
//       <div style={{
//         position: 'absolute',
//         backgroundColor: 'red',
//         borderRadius: '50%',
//         transform: `translate(${position.x}px, ${position.y}px)`,
//         left: -10,
//         top: -10,
//         width: 20,
//         height: 20,
//       }} />
//     </div>
//   );
// }

// import { useState } from 'react';
// export default function Form() {
//   const [person, setPerson] = useState({
//     firstName: 'Barbara',
//     lastName: 'Hepworth',
//     email: 'bhepworth@sculpture.com'
//   });

//   function handleFirstNameChange(e) {
//     setPerson({
//       ...person,
//       firstName: e.target.value
//     });
//   }

//   function handleLastNameChange(e) {
//     setPerson({
//       ...person,
//       lastName: e.target.value
//     });
//   }

//   function handleEmailChange(e) {
//     setPerson({
//       ...person,
//       email: e.target.value
//     });
//   }

//   return (
//     <>
//       <label>
//         First name:
//         <input
//           value={person.firstName}
//           onChange={handleFirstNameChange}
//         />
//       </label>
//       <label>
//         Last name:
//         <input
//           value={person.lastName}
//           onChange={handleLastNameChange}
//         />
//       </label>
//       <label>
//         Email:
//         <input
//           value={person.email}
//           onChange={handleEmailChange}
//         />
//       </label>
//       <p>
//         {person.firstName}{' '}
//         {person.lastName}{' '}
//         ({person.email})
//       </p>
//     </>
//   );
// }

// import { useState } from 'react';

// export default function Form() {
//   const [person, setPerson] = useState({
//     name: 'Niki de Saint Phalle',
//     artwork: {
//       title: 'Blue Nana',
//       city: 'Hamburg',
//       image: 'https://i.imgur.com/Sd1AgUOm.jpg',
//     }
//   });

//   function handleNameChange(e) {
//     setPerson({
//       ...person,
//       name: e.target.value
//     });
//   }

//   function handleTitleChange(e) {
//     setPerson({
//       ...person,
//       artwork: {
//         ...person.artwork,
//         title: e.target.value
//       }
//     });
//   }

//   function handleCityChange(e) {
//     setPerson({
//       ...person,
//       artwork: {
//         ...person.artwork,
//         city: e.target.value
//       }
//     });
//   }

//   function handleImageChange(e) {
//     setPerson({
//       ...person,
//       artwork: {
//         ...person.artwork,
//         image: e.target.value
//       }
//     });
//   }

//   return (
//     <>
//       <label>
//         Name:
//         <input
//           value={person.name}
//           onChange={handleNameChange}
//         />
//       </label>
//       <label>
//         Title:
//         <input
//           value={person.artwork.title}
//           onChange={handleTitleChange}
//         />
//       </label>
//       <label>
//         City:
//         <input
//           value={person.artwork.city}
//           onChange={handleCityChange}
//         />
//       </label>
//       <label>
//         Image:
//         <input
//           value={person.artwork.image}
//           onChange={handleImageChange}
//         />
//       </label>
//       <p>
//         <i>{person.artwork.title}</i>
//         {' by '}
//         {person.name}
//         <br />
//         (located in {person.artwork.city})
//       </p>
//       <img
//         src={person.artwork.image}
//         alt={person.artwork.title}
//       />
//     </>
//   );
// }
// import { useState } from 'react';

// let nextId = 0;

// export default function List() {
//   const [name, setName] = useState('');
//   const [artists, setArtists] = useState([]);

//   return (
//     <>
//       <h1>Inspiring sculptors:</h1>
//       <input
//         value={name}
//         onChange={e => setName(e.target.value)}
//       />
//       <button onClick={() => {
//         setArtists([
//           ...artists,
//           { id: nextId++, name: name }
//         ]);
//       }}>Add</button>
//       <ul>
//         {artists.map(artist => (
//           <li key={artist.id}>{artist.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }
// import { useState } from 'react';

// let initialArtists = [
//   { id: 0, name: 'Marta Colvin Andrade' },
//   { id: 1, name: 'Lamidi Olonade Fakeye'},
//   { id: 2, name: 'Louise Nevelson'},
// ];

// export default function List() {
//   const [artists, setArtists] = useState(
//     initialArtists
//   );

//   return (
//     <>
//       <h1>Inspiring sculptors:</h1>
//       <ul>
//         {artists.map(artist => (
//           <li key={artist.id}>
//             {artist.name}{' '}
//             <button onClick={() => {
//               setArtists(
//                 artists.filter(a =>
//                   a.id !== artist.id
//                 )
//               );
//             }}>
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// import { useState } from 'react';

// let initialShapes = [
//   { id: 0, type: 'circle', x: 50, y: 100 },
//   { id: 1, type: 'square', x: 150, y: 100 },
//   { id: 2, type: 'circle', x: 250, y: 100 },
// ];

// export default function ShapeEditor() {
//   const [shapes, setShapes] = useState(
//     initialShapes
//   );

//   function handleClick() {
//     const nextShapes = shapes.map(shape => {
//       if (shape.type === 'square') {
//         // No change
//         return shape;
//       } else {
//         // Return a new circle 50px below
//         return {
//           ...shape,
//           y: shape.y + 50,
//         };
//       }
//     });
//     // Re-render with the new array
//     setShapes(nextShapes);
//   }

//   return (
//     <>
//       <button onClick={handleClick}>
//         Move circles down!
//       </button>
//       {shapes.map(shape => (
//         <div
//           key={shape.id}
//           style={{
//           background: 'purple',
//           position: 'absolute',
//           left: shape.x,
//           top: shape.y,
//           borderRadius:
//             shape.type === 'circle'
//               ? '50%' : '',
//           width: 20,
//           height: 20,
//         }} />
//       ))}
//     </>
//   );
// }
// import { useState } from 'react';

// let initialCounters = [
//   0, 0, 0
// ];

// export default function CounterList() {
//   const [counters, setCounters] = useState(
//     initialCounters
//   );

//   function handleIncrementClick(index) {
//     const nextCounters = counters.map((c, i) => {
//       if (i === index) {
//         // Increment the clicked counter
//         return c + 1;
//       } else {
//         // The rest haven't changed
//         return c;
//       }
//     });
//     setCounters(nextCounters);
//   }

//   return (
//     <ul>
//       {counters.map((counter, i) => (
//         <li key={i}>
//           {counter}
//           <button onClick={() => {
//             handleIncrementClick(i);
//           }}>+1</button>
//         </li>
//       ))}
//     </ul>
//   );
// }

// import { useState } from 'react';

// let nextId = 3;
// const initialArtists = [
//   { id: 0, name: 'Marta Colvin Andrade' },
//   { id: 1, name: 'Lamidi Olonade Fakeye'},
//   { id: 2, name: 'Louise Nevelson'},
// ];

// export default function List() {
//   const [name, setName] = useState('');
//   const [artists, setArtists] = useState(
//     initialArtists
//   );

//   function handleClick() {
//     const insertAt = 1; // Could be any index
//     const nextArtists = [
//       // Items before the insertion point:
//       ...artists.slice(0, insertAt),
//       // New item:
//       { id: nextId++, name: name },
//       // Items after the insertion point:
//       ...artists.slice(insertAt)
//     ];
//     setArtists(nextArtists);
//     setName('');
//   }

//   return (
//     <>
//       <h1>Inspiring sculptors:</h1>
//       <input
//         value={name}
//         onChange={e => setName(e.target.value)}
//       />
//       <button onClick={handleClick}>
//         Insert
//       </button>
//       <ul>
//         {artists.map(artist => (
//           <li key={artist.id}>{artist.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// import { useState } from 'react';

// let nextId = 3;
// const initialList = [
//   { id: 0, title: 'Big Bellies', seen: false },
//   { id: 1, title: 'Lunar Landscape', seen: false },
//   { id: 2, title: 'Terracotta Army', seen: true },
// ];

// export default function BucketList() {
//   const [myList, setMyList] = useState(initialList);
//   const [yourList, setYourList] = useState(
//     initialList
//   );

//   function handleToggleMyList(artworkId, nextSeen) {
//     const myNextList = [...myList];
//     const artwork = myNextList.find(
//       a => a.id === artworkId
//     );
//     artwork.seen = nextSeen;
//     setMyList(myNextList);
//   }

//   function handleToggleYourList(artworkId, nextSeen) {
//     const yourNextList = [...yourList];
//     const artwork = yourNextList.find(
//       a => a.id === artworkId
//     );
//     artwork.seen = nextSeen;
//     setYourList(yourNextList);
//   }

//   return (
//     <>
//       <h1>Art Bucket List</h1>
//       <h2>My list of art to see:</h2>
//       <ItemList
//         artworks={myList}
//         onToggle={handleToggleMyList} />
//       <h2>Your list of art to see:</h2>
//       <ItemList
//         artworks={yourList}
//         onToggle={handleToggleYourList} />
//     </>
//   );
// }

// function ItemList({ artworks, onToggle }) {
//   return (
//     <ul>
//       {artworks.map(artwork => (
//         <li key={artwork.id}>
//           <label>
//             <input
//               type="checkbox"
//               checked={artwork.seen}
//               onChange={e => {
//                 onToggle(
//                   artwork.id,
//                   e.target.checked
//                 );
//               }}
//             />
//             {artwork.title}
//           </label>
//         </li>
//       ))}
//     </ul>
//   );
// }

// import { useState } from "react";

// let nextId = 3;
// const initialList = [
//   { id: 0, title: "Big Bellies", seen: false },
//   { id: 1, title: "Lunar Landscape", seen: false },
//   { id: 2, title: "Terracotta Army", seen: true },
// ];

// export default function BucketList() {
//   const [myList, setMyList] = useState(initialList);
//   const [yourList, setYourList] = useState(initialList);

//   function handleToggleMyList(artworkId, nextSeen) {
//     setMyList(
//       myList.map((artwork) => {
//         if (artwork.id === artworkId) {
//           // Create a *new* object with changes
//           return { ...artwork, seen: nextSeen };
//         } else {
//           // No changes
//           return artwork;
//         }
//       })
//     );
//   }

//   function handleToggleYourList(artworkId, nextSeen) {
//     setYourList(
//       yourList.map((artwork) => {
//         if (artwork.id === artworkId) {
//           // Create a *new* object with changes
//           return { ...artwork, seen: nextSeen };
//         } else {
//           // No changes
//           return artwork;
//         }
//       })
//     );
//   }

//   return (
//     <>
//       <h1>Art Bucket List</h1>
//       <h2>My list of art to see:</h2>
//       <ItemList artworks={myList} onToggle={handleToggleMyList} />
//       <h2>Your list of art to see:</h2>
//       <ItemList artworks={yourList} onToggle={handleToggleYourList} />
//     </>
//   );
// }

// function ItemList({ artworks, onToggle }) {
//   return (
//     <ul>
//       {artworks.map((artwork) => (
//         <li key={artwork.id}>
//           <label>
//             <input
//               type="checkbox"
//               checked={artwork.seen}
//               onChange={(e) => {
//                 onToggle(artwork.id, e.target.checked);
//               }}
//             />
//             {artwork.title}
//           </label>
//         </li>
//       ))}
//     </ul>
//   );
// }

// import Form from "./components/Form";
// import "./styles.css";

// const statuses = ["empty", "typing", "submitting", "success", "error"];

// function App() {
//   return (
//     <div>
//       {statuses.map((status) => (
//         <Form key={status} status={status} />
//       ))}
//     </div>
//   );
// }

// export default App;
// import Form from "./components/Form";
// import "./components/Styles.css";
// function App() {
//   return (
//     <div>
//       <Form />
//     </div>
//   );
// }

// export default App;
// ==========================================================================================================
// // import { useState } from "react";
// // export default function InputExample() {
// //   const [text, setText] = useState("");
// //   const handleChange = (e) => {
// //     setText(e.target.value);
// //   };
// //   return (
// //     <div style={{ textAlign: "center", marginTop: "30px" }}>
// //       <input
// //         type="text"
// //         placeholder="Type something..."
// //         value={text}
// //         onChange={handleChange}
// //         style={{ padding: "8px", fontSize: "16px" }}
// //       />
// //       <p>You typed: {text}</p>
// //     </div>
// //   );
// // }

// // import TravelPlan from "./components/TravelPlan";

// // function App() {
// //     return <TravelPlan />;
// // }

// // export default App;

// // sharing between components

// //  import { useState } from 'react';

// // function Panel({ title, children }) {
// //   const [isActive, setIsActive] = useState(false);
// //   return (
// //     <section className="panel">
// //       <h3>{title}</h3>
// //       {isActive ? (
// //         <p>{children}</p>
// //       ) : (
// //         <button onClick={() => setIsActive(true)}>
// //           Show
// //         </button>
// //       )}
// //     </section>
// //   );
// // }

// // export default function Accordion() {
// //   return (
// //     <>
// //       <h2>Almaty, Kazakhstan</h2>
// //       <Panel title="About">
// //         With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
// //       </Panel>
// //       <Panel title="Etymology">
// //         The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
// //       </Panel>
// //     </>
// //   );
// // }

// // lifting state up example
// // ==================================================================================================

// import { useState } from 'react';

// export default function Accordion() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   return (
//     <>
//       <h2>Almaty, Kazakhstan</h2>
//       <Panel
//         title="About"
//         isActive={activeIndex === 0}
//         onShow={() => setActiveIndex(0)}
//       >
//         With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
//       </Panel>
//       <Panel
//         title="Etymology"
//         isActive={activeIndex === 1}
//         onShow={() => setActiveIndex(1)}
//       >
//         The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
//       </Panel>
//     </>
//   );
// }

// function Panel({
//   title,
//   children,
//   isActive,
//   onShow
// }) {
//   return (
//     <section className="panel">
//       <h3>{title}</h3>
//       {isActive ? (
//         <p>{children}</p>
//       ) : (
//         <button onClick={onShow}>
//           Show
//         </button>
//       )}
//     </section>
//   );
// }
// // ==================================================================================================

// import { useState } from 'react';

// export default function App() {
//   const [isPaused, setIsPaused] = useState(false);
//   return (
//     <div>
//       {isPaused ? (
//         <p>See you later!</p>
//       ) : (
//         <Counter />
//       )}
//       <label>
//         <input
//           type="checkbox"
//           checked={isPaused}
//           onChange={e => {
//             setIsPaused(e.target.checked)
//           }}
//         />
//         Take a break
//       </label>
//     </div>
//   );
// }

// function Counter() {
//   const [score, setScore] = useState(0);
//   const [hover, setHover] = useState(false);

//   let className = 'counter';
//   if (hover) {
//     className += ' hover';
//   }

//   return (
//     <div
//       className={className}
//       onPointerEnter={() => setHover(true)}
//       onPointerLeave={() => setHover(false)}
//     >
//       <h1>{score}</h1>
//       <button onClick={() => setScore(score + 1)}>
//         Add one
//       </button>
//     </div>
//   );
// }

// ==================================================================================================

// import { useState } from "react";
// import AddTask from "./components/AddTask";
// import TaskList from "./components/TaskList";
// import { initialTasks } from "./components/Task";
// // import { initialTasks } from "./data/tasks";

// export default function App() {
//   const [tasks, setTasks] = useState(initialTasks);

//   const getNextId = (data) => {
//     const maxId = data.reduce(
//       (prev, current) => (prev && prev > current.id ? prev : current.id),
//       0
//     );

//     return maxId + 1;
//   };

//   // handlers
//   const handleAddTask = (text) => {
//     setTasks([
//       ...tasks,
//       {
//         id: getNextId(tasks),
//         text: text,
//         done: false,
//       },
//     ]);
//   };

//   const handleChangeTask = (task) => {
//     const nextTasks = tasks.map((t) => {
//       if (t.id === task.id) {
//         return task;
//       } else {
//         return t;
//       }
//     });

//     setTasks(nextTasks);
//   };

//   const handleDeleteTask = (taskId) => {
//     setTasks(tasks.filter((t) => t.id !== taskId));
//   };

//   return (
//     <>
//       <h1>Prague itinerary</h1>

//       <AddTask onAdd={handleAddTask} />

//       <TaskList
//         tasks={tasks}
//         onChangeTask={handleChangeTask}
//         onDeleteTask={handleDeleteTask}
//       />
//     </>
//   );
// }

import { useState } from "react";

export default function NameInputExample() {
  // state তৈরি করা হলো
  const [name, setName] = useState("");

  // ইনপুট পরিবর্তন হলে এই ফাংশন চলবে
  const handleChange = (e) => {
    setName(e.target.value); // ইনপুটের মান state এ সেট করা হচ্ছে
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Type Your Name 👇</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
        style={{
          padding: "10px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          outline: "none",
        }}
      />
      <h3 style={{ marginTop: "20px" }}>
        {name ? `Hello, ${name}! 👋` : "Your name will appear here..."}
      </h3>
    </div>
  );
}

// ==================================================================================================
