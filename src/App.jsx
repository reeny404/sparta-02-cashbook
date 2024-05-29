import { RouterProvider } from "react-router-dom";
import styled from "styled-components";
import RecordsProvider from "./contexts/records.context";
import "./reset.css";
import router from "./routes/router";

const BodyWeek2 = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #8aa6a3;
  padding: 1rem;
  box-sizing: border-box;
`;

export default function App() {
  return (
    <BodyWeek2 id="Week2">
      <RecordsProvider>
        <RouterProvider router={router} />
      </RecordsProvider>
    </BodyWeek2>
  );
}
