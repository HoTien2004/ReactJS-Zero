import './style.css';

const MyComponent = () => {
    const name = "TIENHO";
    const age = 20;
    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const person = {
        name: "TIENHO",
        age: 25
    }
    return (
        // Fragment
        <>
            <div className="abc"
                style={
                    {
                        borderRadius: "10px",
                        backgroundColor: "yellow",
                        color: "blue",
                        padding: "20px",
                        fontSize: "20px"
                    }
                }
            >My Name: {person.name}, age: {age}, number: {JSON.stringify(number)}</div>
            <div className='child'>MyComponent</div>
            <div>{console.log("Hello world")}</div>
        </>
    );
}

export default MyComponent;