import { RouterProvider } from "react-router-dom";
import styled from "styled-components";
import "./reset.css";
import router from "./routes/router";
import RecordsProvider from "./contexts/records.context";

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
    <RecordsProvider>
      <BodyWeek2 id="Week2">
        <RouterProvider router={router} />
      </BodyWeek2>
    </RecordsProvider>
  );
}
