import CalorieRecord from "./calorierecord";
import styles from "./RecordList.module.css";
function RecordList(props) {
  // const List = styled.ul`
  //   list-style: none;
  //   padding: 5px;
  //   border: 1px solid #ccc;
  //   border-radius: 10px;

  //   width: 100%;
  //   & li {
  //     margin: 10px;
  //   }
  // `;
  return props.records?.length ? (
    <ul className={styles.list}>
      {props.records.map(
        (record) =>
          record.calorieCount >= 0 && (
            <li className={styles.listItem} key={record.id}>
              <CalorieRecord
                date={record.date}
                content={record.content}
                meal={record.meal}
                calories={record.calorieCount}
              />
            </li>
          )
      )}
    </ul>
  ) : (
    <div className={styles.placeHolder}>There Is No Record In That Date</div>
  );
}
export default RecordList;
