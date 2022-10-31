/*function Greet(){
    return <h1>Hello Murali!!</h1>
}
export default Greet;*/

//rewriting above fn using arrow functions.
export const Greet = (props) => {
  return (
    <div>
      <h2>Hello {props.name} also know as {props.heroName}</h2>
      {props.children}
    </div>
  )
};
