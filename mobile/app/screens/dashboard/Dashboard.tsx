import { View, Text, Button } from "react-native";
import React from "react";
import default_style from "../../styles/default_style";
import { dashboardNavData } from "../../assets/data/dashboardNavData";
import { NavOptions } from "../../components";

const Dashboard = () => {
  // @ts-ignore
  const { signOut } = React.useContext(AuthContext);

  return (
    <View style={default_style.container}>
      <NavOptions items={dashboardNavData} />
      <View style={default_style.button_signout}>
        <Button title="Sign out" onPress={signOut} />
      </View>
    </View>
  );
};

export default Dashboard;
