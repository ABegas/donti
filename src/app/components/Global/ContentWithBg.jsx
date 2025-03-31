const ContentWithBg = ({text, imgSrc}) => {
    const bgImage = imgSrc || '/images/bg.jpg'

    return (
        <div className="pattern-bg" style={{ '--bg-url': `url(${bgImage})` }}>
            <div className="o-content max-w-[950px] m-auto p-20">
                <div dangerouslySetInnerHTML={{__html: text}} />
            </div>
        </div>
    )
}

export default ContentWithBg
