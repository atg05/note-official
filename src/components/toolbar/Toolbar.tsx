import ImageIcon from "../../assets/svg/image_icon.svg?react";
import VideoIcon from "../../assets/svg/video_icon.svg?react";
import AudioIcon from "../../assets/svg/mic_icon.svg?react";
import "./Toolbar.style.css";
import FileUploader from "../fileUploader/FileUploader";

const Toolbar = ({}) => {
  return (
    <div className="toolbar_container">
      {/* <ImageIcon /> */}
      <FileUploader fileType="Image" icon={<ImageIcon className="icon" />} />
      <FileUploader fileType="Video" icon={<VideoIcon className="icon" />} />
      <FileUploader fileType="Audio" icon={<AudioIcon className="icon" />} />
    </div>
  );
};

export default Toolbar;
