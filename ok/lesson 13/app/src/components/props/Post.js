
const Post =(props)=>{
    return(
        <div>
            <img src={props.image} alt= {props.name} />
            <h3>{props.name}</h3>
            <p>{props.job}</p>
        </div>
    )
}

export default Post