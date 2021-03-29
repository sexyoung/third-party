export const Floor = ({ no, setFloor }) => {
  const topFloor = [1, 3, 15, 17].includes(no) ? 7 : 15;
  return (
    <select name="floor" onChange={(e) => setFloor(+e.target.value)} required>
      <option value="">請選擇</option>
      {[...Array(topFloor).keys()].map((index) => (
        <option key={index} value={index + 1}>
          {index + 1}樓
        </option>
      ))}
    </select>
  );
};
