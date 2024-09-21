import { useState } from "react";
import styles from "./CalorieRecordEdit.module.css";

function CalorieRecordEdit(props) {
  // const onsubmitHandler = (event) => {
  //   event.preventDefault();
  //   console.log({
  //     date: event.target[0].value,
  //     meal: event.target[1].value,
  //     content: event.target[2].value,
  //     calories: event.target[3].value,
  //   });
  // };
  // const [dateValue, setdateValue] = useState();
  // const [mealValue, setmealValue] = useState();
  // const [contentValue, setcontentValue] = useState();
  // const [calorieValue, setcalorieValue] = useState();
  // const [maxCalories, setMaxCaloreies] = useState(0);
  // const [clickcounter, setclickcounter] = useState(0);

  const DEFAULT_COMPONENT = {
    date: "",
    meal: "Select",
    content: "",
    calorieCount: "",
  };
  const [mealRecord, setmealRecord] = useState(DEFAULT_COMPONENT);
  const onChangeDateHandler = (event) => {
    setmealRecord({ ...mealRecord, date: event.target.value });
  };
  const onChangeMealHandler = (event) => {
    setmealRecord({ ...mealRecord, meal: event.target.value });
  };
  const onChangeContentHandler = (event) => {
    setmealRecord({ ...mealRecord, content: event.target.value });
  };
  const onChangeCaloriesHandler = (event) => {
    setmealRecord({ ...mealRecord, calorieCount: event.target.value });
    // if (event.target.value > maxCalories) {
    //   setMaxCaloreies(event.target.value);
    // }
  };
  const onsubmitHandler = (event) => {
    event.preventDefault();
    props.onFormSubmit(mealRecord);
    setmealRecord(DEFAULT_COMPONENT);
  };

  return (
    <form className={styles.form} onSubmit={onsubmitHandler}>
      {/* <div>
        <label>button clicked {clickcounter} times</label>
      </div>
      <label>Max Caloreies = {maxCalories}</label> */}
      <label htmlFor="date">Date</label>
      <input
        type="date"
        id="date"
        name="date"
        value={mealRecord.date}
        onChange={onChangeDateHandler}
      />
      <label htmlFor="meal">Meal</label>
      <select
        id="meal"
        name="meal"
        value={mealRecord.meal}
        onChange={onChangeMealHandler}
      >
        <option value="select" disabled>
          Select
        </option>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Snacks">Snacks</option>
      </select>
      <label htmlFor="content">Content</label>
      <input
        type="text"
        id="content"
        name="content"
        value={mealRecord.content}
        onChange={onChangeContentHandler}
      />
      <label htmlFor="calories">Calories</label>
      <input
        type="number"
        id="calories"
        name="calories"
        value={mealRecord.calorieCount}
        onChange={onChangeCaloriesHandler}
        className={`${styles.caloriesstyle} ${
          mealRecord.calorieCount < 0 ? styles.error : ""
        }`}
        // style={
        //   mealRecord.calorieCount < 0
        //     ? { backgroundColor: "white", color: "red" }
        //     : {}
        // }
      />
      <div className={styles.footer}>
        <button>Add Record</button>
        {/* <ClickCounter
          clickcounter={clickcounter}
          setclickcounter={setclickcounter}
        ></ClickCounter> */}
        <button onClick={props.handleCloseModal}>Cancel</button>
      </div>
    </form>
  );
}
export default CalorieRecordEdit;
