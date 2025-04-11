const Video = ({videoSrc}) => {
    return (
        <video src={videoSrc} controls playsInline className="absolute top-0 left-0 h-full w-full" />
    )
}

export default Video