import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports';
import NavigationStack from "./app/screens/NavigationStack";
import React from "react";

Amplify.configure(awsconfig);

export default function App() {
  return <NavigationStack></NavigationStack>;
}
