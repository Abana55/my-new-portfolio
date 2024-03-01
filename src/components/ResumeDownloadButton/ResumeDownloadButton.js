import resume from '../../assets/resume/alec(1)'

function ResumeDownloadButton() {
    return (
      <div className="resume-download-button">
        <a href='resume' download="Your_Resume_Name.pdf">
          <button>Download My Resume</button>
        </a>
      </div>
    );
  }

  export default ResumeDownloadButton;