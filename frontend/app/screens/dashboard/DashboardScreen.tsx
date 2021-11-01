import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

const DashboardScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ProfitLoss />
        <AccountsReceivable />
        <AccountsPayable />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

// profit loss

const ProfitLoss = () => {
  return (
    <View>
      <Text>Bezier Line Chart</Text>
      <LineChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};
// accounts receivables // Invoices

const AccountsReceivable = () => {
  return <View style={styles.accountsReceivable}></View>;
};

const AccountsPayable = () => {
  return <View style={styles.accountsPayable}></View>;
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {},
  accountsReceivable: {},
  accountsPayable: {}
});
