
fetch("/meals")
 .then(res => res.json())
 .then(val => {

   console.log(val);
 })


const Meals = () => {
    return (
        <ul id="meals">
            { 
                // list of meals
            }
        </ul>
    )
}

export default Meals;