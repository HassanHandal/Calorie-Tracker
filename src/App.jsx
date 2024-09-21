import { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CalorieRecordEdit from "./components/edit/CalorieRecordEdit";
import ListingSection from "./components/CalorieRecordsSection/ListingSection";
import Modal from "react-modal";
import styles from "./components/edit/CalorieRecordEdit.module.css";

// Initialize records
const INITIAL_RECORDS = [
  {
    id: 1,
    date: new Date(2023, 5, 3),
    meal: "Breakfast",
    content: "egg",
    calorieCount: -200,
  },
  {
    id: 2,
    date: new Date(2024, 5, 6),
    meal: "Lunch",
    content: "meat",
    calorieCount: 250,
  },
  {
    id: 3,
    date: new Date(2026, 7, 6),
    meal: "Dinner",
    content: "cheese",
    calorieCount: 300,
  },
  {
    id: 4,
    date: new Date(2028, 5, 5),
    meal: "Snacks",
    content: "chocolate",
    calorieCount: 500,
  },
];

function App() {
  const [records, setRecords] = useState(INITIAL_RECORDS);
  const [nextId, setNextId] = useState(5);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "none",
      padding: "0px",
      borderRadius: "var(--theme-border-radius-smooth)",
    },
    overlay: {
      background: "rgba(0,0,0,.5)",
    },
  };

  const formSubmitHandler = (record) => {
    const formattedRecord = {
      ...record,
      date: new Date(record.date),
      id: nextId,
    };
    setNextId((prevId) => prevId + 1);
    setRecords((prevRecords) => [formattedRecord, ...prevRecords]);
    handleCloseModal();
  };

  return (
    <Router>
      <div>
        <h1>Track Your Daily Calories</h1>
      </div>

      <Modal
        onRequestClose={handleCloseModal}
        isOpen={isModalOpen}
        contentLabel="Modal"
        style={modalStyles}
      >
        <CalorieRecordEdit
          onCancelClick={handleCloseModal}
          onFormSubmit={formSubmitHandler}
        />
      </Modal>

      <Routes>
        <Route path="/" element={<ListingSection allRecords={records} />} />
        {/* Add more routes here as needed */}
      </Routes>

      <button className={styles.modalButton} onClick={handleOpenModal}>
        Track food
      </button>
    </Router>
  );
}

export default App;
