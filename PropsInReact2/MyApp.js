class MyApp extends React.Component {
    render(){
        return (
        <div>
            <Student name="raju" age={25} />;
        </div>
        )
    }
}
let myDiv  = document.querySelector("#root");
let root = ReactDOM.createRoot(myDiv);
root.render(<MyApp/>);