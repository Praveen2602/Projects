function getNumber(){
    const myNums = [10,5,3,1,11,6,8,21,7];
    const num =myNums[Math.floor(Math.random() * myNums.length)];
    return num;
}
class RandomNum extends React.Component{
    render(){
    let num = getNumber();
    let msg = null;
    if(num==6){
        msg = (
            <p>
                <h3>Congratulation ! You Won</h3>
                 <img src="img1.jpeg" alt ="hurray!"/>          
            </p>
        );

    } else{
        msg = <small> Sorry ! Better luck next Time</small>
    }
    return (
        <div>
        <p>You Got the number{num}</p>
        {msg}
        </div>
    );
}
}