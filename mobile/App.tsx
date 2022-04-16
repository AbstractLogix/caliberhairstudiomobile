import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports';
import NavigationStack from "./app/navigation/NavigationStack";
import React from "react";

Amplify.configure(awsconfig);

export default function App() {
  return <NavigationStack></NavigationStack>;
}
