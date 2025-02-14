import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const VideoRedirect = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href = "https://forms.gle/PaNhkHw445CJA7z67";
        }, 7000); // Redirect after 10 seconds
        
        return () => clearTimeout(timer); // Cleanup timeout on unmount
    }, []);

    return (
        <div style={{ width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <video 
                width="100%" 
                autoPlay 
                muted 
                playsInline 
                onCanPlay={(e) => e.target.play()} // Ensures video starts
                style={{ maxWidth: "800px", borderRadius: "10px" }}
            >
                <source src="https://res.cloudinary.com/dzrf9dbzd/video/upload/v1739471823/mmm_zvjafx.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>


    );
};

export default VideoRedirect;
