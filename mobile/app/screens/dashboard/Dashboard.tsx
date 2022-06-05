import React from "react";
import { View, Button } from "react-native";
import default_style from "../../styles/default_style";
import { dashboardNavData } from "../../assets/data/dashboardNavData";
import { NavOptions } from "../../components";

const Dashboard = (AuthContext: React.Context<{ signOut: any }>) => {
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
