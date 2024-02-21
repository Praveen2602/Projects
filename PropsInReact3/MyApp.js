class MyApp extends React.Component {
    render(){
        return (
        <div>
            <h2>Emoji Picker!</h2>
            <Emoji e1="😁" e2="😒" e3 = "😍"/>
            <Emoji e1="😂" e2="😂" e3 = "😂"/>
            <Emoji e1="😒" e2="😒" e3 = "😁"/>
        </div>
        )
    }
}
let myDiv  = document.querySelector("#root");
let root = ReactDOM.createRoot(myDiv);
root.render(<MyApp/>);