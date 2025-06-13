// const heading=React.createElement(
//     "h2",
//     {id:"holaId"},
//     "hello"
// )
const heading=(
    <div>
        <h2>Hello</h2>
        <p>lorem ipsum</p>
    </div>
)

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(
    heading
)
