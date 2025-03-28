import { Parallax } from 'react-parallax'

const ParalaxBanner = ({children, imgSrc}) => {
    return (
        <Parallax blur={4} strength={300} bgImage={imgSrc}>
            <div className="bg-[rgba(0,0,0,0.7)] backdrop-sepia-80">
                {children}
            </div>
        </Parallax>
    )
}

export default ParalaxBanner