import React from 'react';
import Webcam from 'react-webcam';
 
class TestWebCam extends React.Component {
    setRef = (webcam) => {
      this.webcam = webcam;
    }
   
    capture = () => {
      console.log("I SAW A CLICK");
      const imageSrc = this.webcam.getScreenshot();
      console.log(imageSrc);
    };
   
    render() {
      return (
         <div> 
            <h1>I am here</h1>
            <div>
            <Webcam
                audio={false}
                height={350}
                ref={this.setRef}
                screenshotFormat="image/jpeg"
                width={350}
            />
            <button onClick={this.capture}>Capture photo</button>
            </div>
        </div>
      );
    }
  }

  export default TestWebCam;