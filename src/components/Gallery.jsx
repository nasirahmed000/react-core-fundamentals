export function Profile(){ //named export
    return(
         <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
    )
}



export function Card (){ //named export
    return(
         <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
    )
}
export default function Gallery() {

    return(
        <section> 
            <h1>Amazing Scientist </h1>
            <Profile />
            <Profile />
            <Card/>
        </section>
    )
} 

