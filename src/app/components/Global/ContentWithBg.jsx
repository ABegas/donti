const ContentWithBg = ({text, imgSrc, children, maxWidth = 'max-w-[950px]'}) => {
    const bgImage = imgSrc || '/images/bg.jpg'

    return (
        <>
            <div className="pattern-bg text-[18px]" style={{ '--bg-url': `url(${bgImage})` }}>
                <div className={`${maxWidth} o-content m-auto py-8 md:py-20 px-8`}>
                    {text && <div dangerouslySetInnerHTML={{__html: text}} />}
                    {children}
                </div>
            </div>
            
        </>
    )
}

export default ContentWithBg
