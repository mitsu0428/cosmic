import React from "react";
import styled from "styled-components";

function index() {
  const [value, setValue] = React.useState(1);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(Number(e.target.value));
  };
  const handleClickMint = () => {
    const alert_text = "\n Wallet Conected!!!! \n";
    const selected_number = value;
    alert(alert_text + "You selected " + selected_number + " of the work.");
  };

  return (
    <Container>
      <SelectContainer value={value} onChange={handleChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </SelectContainer>
      <p>{value}の作品</p>
      <MintButton onClick={handleClickMint}>
        Conect Wallet for {value}
      </MintButton>
    </Container>
  );
}

export default index;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  color: #fff;
  background-color: #000;
`;

const MintButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #000;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  margin: 1rem;
  margin-top: 5rem;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

const SelectContainer = styled.select`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #000;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  margin: 1rem;
  margin-top: 5rem;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: #000;
  }
`;
