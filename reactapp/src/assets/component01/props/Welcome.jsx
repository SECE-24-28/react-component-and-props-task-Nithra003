// function Welcome(props){
function Welcome({name,course,duration}){
    // return <>
    // <h1>{props.name}</h1>
    // <h2>{props.course}</h2>
    // </>

     return <>
    <h1>{name}</h1>
    <h1>{course}</h1>
    <h1>{duration}</h1>
    </>

}

export default Welcome;