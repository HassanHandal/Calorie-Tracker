import { useState } from "react";
import RecordList from "./RecordList";
import styles from "./ListingSection.module.css";
function ListingSection(props) {
  const [currentDate, SetcurrentDate] = useState(new Date());
  const ondateChange = (event) => {
    SetcurrentDate(new Date(event.target.value));
  };
  const { allRecords } = props;

  const dateFilter = (record) =>
    new Date(record.date).getDate() === currentDate.getDate() &&
    new Date(record.date).getMonth() === currentDate.getMonth() &&
    new Date(record.date).getFullYear() === currentDate.getFullYear();

  return (
    <>
      <label className={styles.filterLabel} htmlFor="date">
        Filter Records By Date
      </label>
      <input
        className={styles.filterInput}
        value={currentDate.toISOString().split("T")[0]}
        id="date"
        type="date"
        onChange={ondateChange}
      />
      <RecordList records={allRecords.filter(dateFilter)} />
    </>
  );
}
export default ListingSection;
