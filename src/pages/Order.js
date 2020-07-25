import React from "react";
import styled from "styled-components";
import { ConfirmButton } from "../components/general/";
import { FoodRow, SideRow, ProteinRow } from "../components/general";
import { Select } from "antd";
import Lottie from "react-lottie";
import animationData from "../assets/lottie/fry.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const { Option } = Select;

const Order = () => {
  const [selection, setselection] = React.useState("sides");

  const onGenderChange = (value) => {
    setselection(value);
  };
  return (
    <OrderLayer>
      <div className="header">
        <div>
          <h4>Order</h4>
        </div>
        <div className="rightHeader">
          <Select placeholder={selection} onChange={onGenderChange} allowClear>
            <Option value="mains">Main Dishes</Option>
            <Option value="sides">Side Dishes</Option>
            <Option value="proteins">Protein Dishes</Option>
          </Select>
          <ConfirmButton />
        </div>
      </div>

      <div>
        {!selection && (
          <div>
            <Lottie options={defaultOptions} height={500} width={500} />
            <h4 style={{ textAlign: "center" }}>Select Option</h4>
          </div>
        )}
        {selection === "mains" && <FoodRow />}
        {selection === "sides" && <SideRow />}
        {selection === "proteins" && <ProteinRow />}
      </div>
    </OrderLayer>
  );

  function handleselectionChange(e) {
    setselection(e.target.value);
  }
};

export default Order;

const OrderLayer = styled.div`
  display: flex;
  flex: 1;
  border: 1px dotted #e2e8f0;
  flex-direction: column;
  h4 {
    font-size: 1.5rem;
    font-weight: 1000;
    margin: 0;
    padding: 0 0 0 0;
    color: #718096;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    margin: 0 0 2rem 0;

    .rightHeader {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }

    h4 {
      font-size: 1.5rem;
      font-weight: 1000;
      margin: 0;
      padding: 0 0 0 0;
    }
  }
`;

const Selector = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;
