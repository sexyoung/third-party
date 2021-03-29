export const No = ({ no, street, handleNo }) => {
  if (street === "東湖路113巷") {
    return (
      <select name="no" onChange={(e) => handleNo(+e.target.value)} value={no} required>
        <option value="">請選擇</option>
        <option value="106">106號</option>
        {/* <option value="106號之1">106號之1</option> */}
      </select>
    );
  }

  if (street === "康樂街136巷29弄") {
    return (
      <select name="no" onChange={(e) => handleNo(+e.target.value)} value={no} required>
        <option value="">請選擇</option>
        <option value="2">2號</option>
        <option value="6">6號</option>
        {/* <option value="6號之1">6號之1</option> */}
        <option value="8">8號</option>
        {/* <option value="8號之1">8號之1</option>
                <option value="8號之2">8號之2</option> */}
      </select>
    );
  }

  return (
    <select name="no" onChange={(e) => handleNo(+e.target.value)} value={no} required>
      <option value="">請選擇</option>
      <option value="1">1號</option> {/** 7F */}
      <option value="3">3號</option> {/** 7F */}
      <option value="5">5號</option> {/** 15F */}
      <option value="7">7號</option> {/** 15F */}
      <option value="9">9號</option> {/** 15F */}
      <option value="11">11號</option> {/** 15F */}
      <option value="13">13號</option> {/** 15F */}
      <option value="15">15號</option> {/** 7F */}
      <option value="17">17號</option> {/** 7F */}
    </select>
  );
};
