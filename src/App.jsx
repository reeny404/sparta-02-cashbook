import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import InitialRecords from "./InitialRecords";
import { DetailPage } from "./pages/DetailPage";
import { HomePage } from "./pages/HomePage";
import "./reset.css";

const BodyWeek2 = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #8aa6a3;
  padding: 1rem;
  box-sizing: border-box;
`;

export default function App() {
  const [records, setRecords] = useState(InitialRecords);

  const addRecord = (record) => {
    setRecords([...records, record]);
  };

  const updateRecord = (newRecord) => {
    setRecords([
      ...records.map((record) =>
        record.id === newRecord.id ? newRecord : record
      ),
    ]);
  };

  const deleteRecord = (recordId) => {
    setRecords([...records.filter((v) => v.id !== recordId)]);
  };

  return (
    <BodyWeek2 id="Week2">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<HomePage records={records} addRecord={addRecord} />}
          />
          <Route
            path="/detail/:recordId"
            element={
              <DetailPage
                records={records}
                updateRecord={updateRecord}
                deleteRecord={deleteRecord}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </BodyWeek2>
  );
}
