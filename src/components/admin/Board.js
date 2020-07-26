import React from "react";
import User from "../general/User";
import Order from "./Order";
import { Card } from "antd";

const tabListNoTitle = [
  {
    key: "users",
    tab: "User Management",
  },
  {
    key: "orders",
    tab: "Order Management",
  },
  {
    key: "food",
    tab: "Food",
  },
];

const contentListNoTitle = {
  users: <User />,
  orders: <Order />,
  food: <p>Add Food Coming Soon</p>,
};

function TabCard() {
  const [noTitleKey, setNoTitleKey] = React.useState("users");

  function onTabChange(key, type) {
    setNoTitleKey(key);
  }

  return (
    <>
      <Card
        style={{ width: "100%" }}
        tabList={tabListNoTitle}
        activeTabKey={noTitleKey}
        // tabBarExtraContent={<a href="#">More</a>}
        onTabChange={(key) => {
          onTabChange(key, "noTitleKey");
        }}>
        {contentListNoTitle[noTitleKey]}
      </Card>
    </>
  );
}

export default TabCard;