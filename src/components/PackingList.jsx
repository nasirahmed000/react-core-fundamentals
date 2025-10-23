function Item({ name, isPacked }) {
//   if (isPacked) {
//     return null
//   }
//   return <li className="item">{name}</li>;

  return (
  <li className="item">
    {isPacked ? name + ' ✅' : name}
  </li>
);
}



export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        /> 
        <Item 
          isPacked={true} 
          name="Helm et with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>   
  );
}

// just for memory 

// const lang = 'Javascript1';
 
// const result1 = lang && 'Javascript' //left side trutyh hole right side return korbe otherwisw left side return korbe 
 
// const result2 = lang || 'Javascript' //left side falsy hole right side return korbe otherwisw left side return korbe 
 
// const result3 = lang ?? 'Javascript' // nullish coalesing operrator :    left side nullish or undefined  hole right side return korbe otherwisw left side return korbe 

// console.log(result1); // Javascript
// console.log(result2); // Javascript1
// console.log(result3); // Javascript1

