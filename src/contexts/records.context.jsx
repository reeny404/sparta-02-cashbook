// 1.만든다. 2. 사용한다. 3. 범위를 지정해 전달한다.

import { createContext, useContext, useState } from "react";
import InitialRecords from "../InitialRecords";

const recordsContext = createContext(InitialRecords);

export const useRecordsContext = () => useContext(recordsContext);

export default function RecordsProvider({ children }) {
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
    <recordsContext.Provider
      values={{ records, addRecord, updateRecord, deleteRecord }}
    >
      {children}
    </recordsContext.Provider>
  );
}
