import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useRecordsContext } from "../contexts/records.context";
import { DetailPageWrapper } from "./DetailPage.styled";

export function DetailPage() {
  const param = useParams();
  const recordId = param.recordId;
  const { records, updateRecord, deleteRecord } = useRecordsContext();
  const record = records.find((data) => data.id === recordId) ?? {};

  const [date, setDate] = useState(record.date);
  const [item, setItem] = useState(record.item);
  const [amount, setAmount] = useState(record.amount);
  const [description, setDescription] = useState(record.description);
  const navigate = useNavigate();

  if (!record) {
    return <div>조회할 수 없는 데이터입니다. ({recordId}).</div>;
  }

  return (
    <DetailPageWrapper>
      <Input label="날짜" value={date} setValue={setDate} type="date" />
      <Input label="항목" value={item} setValue={setItem} />
      <Input label="금액" value={amount} setValue={setAmount} type="number" />
      <Input label="내용" value={description} setValue={setDescription} />
      <div>
        <Button
          text="수정"
          handleClick={() => {
            updateRecord({
              ...record,
              date,
              item,
              amount,
              description,
            });
            navigate("/");
          }}
        />
        <Button
          text="삭제"
          handleClick={() => {
            deleteRecord(recordId);
            navigate("/");
          }}
        />
        <Button text="뒤로가기" handleClick={() => history.back()} />
      </div>
    </DetailPageWrapper>
  );
}
