const ContentWithBg = ({text, imgSrc = '/images/bg.jpg', children, maxWidth = 'max-w-[1200px]'}) => {

    return (
        <>
            <div className="pattern-bg text-[18px]" style={{ '--bg-url': `url(${imgSrc})` }}>
                <div className={`${maxWidth} o-content m-auto py-8 md:py-20 px-6`}>
                    {text && <div dangerouslySetInnerHTML={{__html: text}} />}
                    {children}
                </div>
            </div>
            
        </>
    )
}

export default ContentWithBg
