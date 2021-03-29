export const Of = ({ street, no, floor, of, setOf }) => {
  if (street === "東湖路113巷") {
    return (
      <select name="of" value={of} onChange={e => setOf(+e.target.value)} required>
        <option value="">請選擇</option>
        <option value="0">本號</option>
        <option value="1">之1</option>
      </select>
    );
  }

  if (street === "康樂街136巷29弄") {
    return (
      <select name="of" value={of} onChange={e => setOf(+e.target.value)} required>
        <option value="">請選擇</option>
        <option value="0">本號</option>
        {no >= 6 && <option value="1">之1</option>}
        {no === 8 && <option value="2">之2</option>}
      </select>
    );
  }

  return (
    <select name="of" value={of} onChange={e => setOf(+e.target.value)} required>
      <option value="">請選擇</option>
      <option value="0">本號</option>
      <option value="1">之1</option>
      {![1, 3, 15, 17].includes(no) && (
        <>
          <option value="2">之2</option>
          <option value="3">之3</option>
        </>
      )}
    </select>
  );
};
