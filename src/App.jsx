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
const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',  
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
}];


 export default function App(){
  const chemists = people.filter(person => person.profession === 'chemist');

  const listItems = chemists.map((chemists)=> <li key={chemists.id}>{chemists.name}</li>)


     return (
       <div>
        <div>
          {listItems}
        </div>
       </div>
     );
 }

