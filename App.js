import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppRegistry, Platform } from "react-native";
import React, { useEffect } from 'react';

import LoginComponent from "./login";

//onboarding
import TypeOfAccount from "./onBoarding/typeOfAccount";
import Gender from "./onBoarding/gender";
import AgeGroup from "./onBoarding/ageGroup";
import PreviousHistory from "./onBoarding/previousHistory";
import PerosnalInfo from "./onBoarding/personalInfo";
// import Location from './onBoarding/location';

import Home from "./home";

//Doctor
import DocterDesc from "./DoctorHome/docterDesc";
import Doctors from "./DoctorHome/Doctors";
import FindDocter from "./DoctorHome/findDocter";
import DocterSpecialization from "./DoctorHome/DoctorSpecialization";
import TreatmentType from "./DoctorHome/treatmentType";
import PatientDetailsScreen from "./DoctorHome/patientDetails";
import PaymentDetailsScreen from "./DoctorHome/Payment";
import DateTime from "./DoctorHome/DateTime";
import MyAppointmentsScreen from "./DoctorHome/MyAppointment";

//Pharmacy
import PharmacyHome from "./MedicalHome/pharmacyHome";
import PharmaDesc from "./MedicalHome/pharmacyDesc";

//LabTest
import LabTestHome from "./LabTest/labTestHome";
import LabTestDesc from "./LabTest/labTestDesc";

import { name as appName } from "./app.json";
import DateComponent from "./assets/component/Calender";


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
