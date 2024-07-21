import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppRegistry, Platform } from "react-native";
import React from "react";

import LoginComponent from "./login";

import TypeOfAccount from "./onBoarding/typeOfAccount";
import Gender from "./onBoarding/gender";
import AgeGroup from "./onBoarding/ageGroup";
import PreviousHistory from "./onBoarding/previousHistory";
import PerosnalInfo from "./onBoarding/personalInfo";
// import Location from './onBoarding/location';

import Home from "./home";
import DocterDesc from "./docterDesc";
import PharmacyHome from "./pharmacyHome";
import PharmaDesc from "./pharmacyDesc";
import LabTestHome from "./labTestHome";
import LabTestDesc from "./labTestDesc";
import FindDocter from "./findDocter";
import TreatmentType from "./treatmentType";
import DocterSpecialization from "./DoctorSpecialization";
import PatientDetailsScreen from "./patientDetails";
import PaymentDetailsScreen from "./Payment";
import { name as appName } from "./app.json";
import DateComponent from "./assets/component/Calender";
import DateTime from "./DateTime";
import Doctors from "./Doctors";
import MyAppointmentsScreen from "./MyAppointment";

const Stack = createStackNavigator();
AppRegistry.registerComponent(appName, () => App);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginComponent"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="loginComponent" component={LoginComponent} />
        <Stack.Screen name="typeOfAccount" component={TypeOfAccount} />
        <Stack.Screen name="gender" component={Gender} />
        <Stack.Screen name="ageGroup" component={AgeGroup} />
        <Stack.Screen name="previousHistory" component={PreviousHistory} />
        <Stack.Screen name="personalInfo" component={PerosnalInfo} />
        {/* <Stack.Screen name="location" component={Location} /> */}

        <Stack.Screen
          name="home"
          component={Home}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="docterDesc"
          component={DocterDesc}
          options={{ title: "DocterDesc" }}
        />
        <Stack.Screen
          name="pharmacy"
          component={PharmacyHome}
          options={{ title: "pharmacy" }}
        />
        <Stack.Screen
          name="pharmacyDesc"
          component={PharmaDesc}
          options={{ title: "pharmacyDesc" }}
        />
        <Stack.Screen
          name="labtest"
          component={LabTestHome}
          options={{ title: "labTest" }}
        />
        <Stack.Screen
          name="labTestDesc"
          component={LabTestDesc}
          options={{ title: "labTestDesc" }}
        />

        <Stack.Screen name="findDocter" component={FindDocter} />
        <Stack.Screen name="treatmentType" component={TreatmentType} />
        <Stack.Screen
          name="docSpecialization"
          component={DocterSpecialization}
        />
        <Stack.Screen
          name="datetime"
          component={DateTime}
          options={{ title: "datetime" }}
        />
        <Stack.Screen
          name="doctors"
          component={Doctors}
          options={{ title: "doctors" }}
        />
        <Stack.Screen
          name="patientDetail"
          component={PatientDetailsScreen}
        />
        <Stack.Screen
          name="paymentDetail"
          component={PaymentDetailsScreen}
        />
        <Stack.Screen
          name="myAppointment"
          component={MyAppointmentsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
