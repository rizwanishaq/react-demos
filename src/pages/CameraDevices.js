import React, { useState, useEffect, useCallback, useRef } from "react";
import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/face-landmarks-detection";
import { Container } from "react-bootstrap";
import { drawMesh } from "../utils/utilities";

const CameraDevices = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [model, setModel] = useState(null);

  useEffect(() => {
    const loadModel = async () => {
      const net = facemesh.SupportedModels.MediaPipeFaceMesh;
      const detectorConfig = {
        runtime: "mediapipe", // or 'tfjs'
        solutionPath: "https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh",
      };
      const detector = await facemesh.createDetector(net, detectorConfig);
      setModel(detector);
    };

    loadModel();
  }, [setModel]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (model) {
        console.log(model);
        detect(model);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const detect = async (model) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      // OLD MODEL
      //       const face = await net.estimateFaces(video);
      // NEW MODEL
      const face = await model.estimateFaces({ input: video });
      console.log(face);

      // Get canvas context
      const ctx = canvasRef.current.getContext("2d");
      requestAnimationFrame(() => {
        drawMesh(face, ctx);
      });
    }
  };

  return (
    <Container className="mt-2 text-center">
      <Webcam
        ref={webcamRef}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 9,
          width: 640,
          height: 480,
        }}
      />

      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 9,
          width: 640,
          height: 480,
        }}
      />
    </Container>
  );
};

export default CameraDevices;
