import BeatLoader from 'react-spinners/BeatLoader';

const Pricing = () => {
    return (
        <div className="bg-[#3F181C] h-[70vh]">
            <div className="flex justify-center items-center h-full loading">
                <h1 className="text-white font-bold font-mono text-4xl">
                    Very Expensive <span><BeatLoader color='white'/></span>
                </h1>
            </div>
        </div>
    )
}

export default Pricing