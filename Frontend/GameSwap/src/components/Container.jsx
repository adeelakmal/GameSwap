
export default function Container({direction,image,heading,text}) {
    if (direction ==="left"){
        return (
            <>
            <div className="md:container md:mx-auto mb-20 px-5 grid grid-cols-2">
            <div>
            <h4 className="text-4xl font-pixelify font-bold text-white mb-2">{heading}</h4>
            <p className="font-mono font-bold text-white leading-6">{text}</p>
            </div>
            <div className="flex justify-center items-center relative">
                <img className="rounded-lg h-auto max-h-60 fade-left" src={image} alt="Side image here"/>
            </div>
            </div>
            </>
        )
    }
    else if(direction==="right"){
        return (
            <>
            <div className="md:container md:mx-auto mb-20 px-5 grid grid-cols-2">
            <div className="flex justify-center items-center relative">
                <img className="rounded-lg h-auto max-h-60 fade-right" src={image} alt="Side image here"/>
            </div>
            <div>
            <h4 className="text-4xl font-pixelify font-bold text-white mb-2">{heading}</h4>
            <p className="font-mono font-bold text-white leading-6">{text}</p>
            </div>
            </div>
            </>
        )
    }
    else if(direction==="center"){
        return (
            <>
            <div className="sm:container md:mx-auto mb-20 px-20">
                <h4 className="text-4xl font-pixelify text-center font-bold text-white mb-2">{heading}</h4>
                <p className="font-mono font-bold text-center text-white leading-6">{text}</p>
            </div>
            </>
        )
    }
}
