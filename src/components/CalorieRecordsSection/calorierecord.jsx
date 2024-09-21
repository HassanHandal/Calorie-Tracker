import styles from "./calorierecord.module.css";
import CalorieRecordDate from "./CalorieRecordDate";
import StyledRecordCell from "../common/StyledRecordCell";

function CalorieRecord(props) {
  // let recordContent = (
  //   <>
  //     <li>{props.meal}</li>
  //     <li>{props.content}</li>
  //   </>
  // );
  // if (props.calories < 0) {
  //   recordContent = <>Invalid Records</>;
  // }
  // -------------------------
  // if (props.calories < 0) {
  //   return null;
  // }
  return (
    <ul className={styles.record}>
      <li>
        <CalorieRecordDate date={props.date} />
      </li>
      {/* {recordContent} */}
      <li>{props.meal}</li>
      <li>{props.content}</li>
      <li className={styles["record-calories"]}>
        <StyledRecordCell> {props.calories} </StyledRecordCell>
      </li>
      {/* {props.calories < 0 ? InvalidContent : validContent} */}
    </ul>
  );
}
export default CalorieRecord;
