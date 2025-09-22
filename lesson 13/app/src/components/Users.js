const Users =()=>{
    let x = 3
    return(
        <div>
            <div>
                <h2>Car Name</h2>
                {
                    x > 5 ? <p style = {{color: "blue"}}>Car Desc</p> : <p style = {{color: "red"}}>Car Desc</p>
                }
            </div>
        </div>
    )
}

export default Users