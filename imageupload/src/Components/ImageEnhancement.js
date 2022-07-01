import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {ref,uploadBytesResumable,getDownloadURL  } from "firebase/storage"
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SendIcon from "@mui/icons-material/Send";
import storage from "../firebaseConfig";



const ImageEnhancemnt = () => {
  let navigate = useNavigate(); 
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (!selectedFile) {
        setPreview(undefined)
        return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
}, [selectedFile])

const onSelectFile = e => {
    if (!e.target.files || e.target.files.length === 0) {
        setSelectedFile(undefined)
        return
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0])
}
 
const handleUpload = () =>{
    if (!selectedFile) {
        alert("Please choose a file first!")
    }
 
    const storageRef = ref(storage, `/files/${selectedFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, selectedFile);

    uploadTask.on(
        "state_changed",
        (snapshot) => {
            const percent = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
 
            // update progress
            setPercent(percent);
            if(percent === 100){
                console.log("done uploading");
               navigate("/enhancedImage");
            }
        },
        (err) => console.log(err),
        () => {
            // download url
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                console.log(url);
            });
        }
    );

   

    
}
  const Input = styled("input")({
    display: "none",
  });
  return (
    <>
    <Stack direction="row" alignItems="center" spacing={2}>
      <label htmlFor="contained-button-file">
        <Input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
          onChange={onSelectFile}
          
        />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>
      <Button variant="contained" onClick={handleUpload} endIcon={<SendIcon />}>
        Process
      </Button>
    </Stack>
    {selectedFile && <p>{percent} "% done uploading"</p>}
    {selectedFile &&  <img src={preview} style={{height:"400px",width:"400px"}} />}
    </>
  );
};
export default ImageEnhancemnt;
