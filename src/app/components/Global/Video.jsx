const Video = ({videoSrc, poster}) => {
    return (
        <video src={videoSrc} poster={poster} controls playsInline preload="metadata" className="absolute top-0 left-0 h-full w-full" />
    )
}

export default Video