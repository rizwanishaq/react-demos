import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/layouts/Header";
import PieExample from "./pages/PieExample";
import Home from "./pages/Home";
import Personal from "./pages/Personal";
import ScatterPlot from "./pages/ScatterPlot";
import ApexChart from "./pages/ApexChart";
import ReChartExample from "./pages/ReChartExample";
import WorkOuts from "./pages/WorkOuts";
import ImagePreview from "./pages/ImagePreview";
import ExpenseTracker from "./pages/ExpenseTracker";
import CovidTracker from "./pages/CovidTracker";
import RealTimeChart from "./pages/RealTimeChart";
import SimpleFirebase from "./pages/SimpleFirebase";
import RealTimeApexChart from "./pages/RealTimeApexChart";
import VoiceAssistant from "./pages/VoiceAssistant";
import SpeechCommand from "./pages/SpeechCommand";
import PitchDetection from "./pages/PitchDetection";
import EventDetection from "./pages/EventDetection";
import ImageCapture from "./pages/ImageCapture";
import ObjectDetection from "./pages/ObjectDetection";
import FaceDetection from "./pages/FaceDetection";
import SearchBar from "./pages/SearchBar";
import UploadImage from "./pages/UploadImage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import BinanceData from "./pages/BinanceData";
import UseWebSocketExample from "./pages/UseWebSocketExample";
import SimpleBootStrapExample from "./pages/SimpleBootStrapExample";
import D3Example from "./pages/D3Example";
import VideoFrames from "./pages/VideoFrames";
import SelfiSegmentation from "./pages/SelfiSegmentation";
// import Footer from "./components/layouts/Footer";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { user } = useAuthContext();
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/react-demos" element={<Home />} />
        <Route path="/About" element={<Personal />} />
        <Route path="/piechart" element={<ScatterPlot />} />
        <Route path="/pies" element={<PieExample />} />
        <Route path="/apexchart" element={<ApexChart />} />
        <Route path="/rechart" element={<ReChartExample />} />
        <Route
          path="/workouts"
          element={user ? <WorkOuts /> : <Navigate to="/" />}
        />
        <Route path="/imagepreview" element={<ImagePreview />} />
        <Route path="/expensetracker" element={<ExpenseTracker />} />
        <Route path="/covidtracker" element={<CovidTracker />} />
        <Route path="/realtimechart" element={<RealTimeChart />} />
        <Route path="/firebasetutorial" element={<SimpleFirebase />} />
        <Route path="/realtimeapexchart" element={<RealTimeApexChart />} />
        <Route path="/voicecontrolsystem" element={<VoiceAssistant />} />
        <Route path="/speechcommand" element={<SpeechCommand />} />
        <Route path="/pitchdetection" element={<PitchDetection />} />
        <Route path="/eventdetection" element={<EventDetection />} />
        <Route path="/imagecapture" element={<ImageCapture />} />
        <Route path="/objectdetection" element={<ObjectDetection />} />
        <Route path="/facedetection" element={<FaceDetection />} />
        <Route path="/search" element={<SearchBar />} />
        <Route path="/uploadimage" element={<UploadImage />} />
        <Route
          path="/signup"
          element={!user ? <SignUp /> : <Navigate to="/" />}
        />
        <Route
          path="/signin"
          element={!user ? <SignIn /> : <Navigate to="/" />}
        />
        <Route path="/binancewebsocket" element={<BinanceData />} />
        <Route path="/usewebsocketexample" element={<UseWebSocketExample />} />
        <Route path="/bootstrapexample" element={<SimpleBootStrapExample />} />
        <Route path="/d3examples" element={<D3Example />} />
        <Route path="/videoframes" element={<VideoFrames />} />
        <Route path="/selfeisegmentation" element={<SelfiSegmentation />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
