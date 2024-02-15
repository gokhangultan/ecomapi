import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faChartLine, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CategoryCard() {
    return (
        <div>
            <div className="w-[328px] h-[606px] border-1 border-gray-150 shadow relative">
                <button className="absolute top-[20px] left-[20px] bg-[#E74040] w-[52px] h-[24px] font-container text-[14px] leading-6 font-bold text-white">NEW</button>
                <img src="feature.jpeg" className="w-[348px] h-[300px]  " />
                <div className="flex flex-col gap-3 m-3 ">
                    <div className="flex justify-start gap-3 text-xs flex-wrap">
                        <div className="text-[#8EC2F2]">Google</div>
                        <div>Trending</div>
                        <div>New</div>
                    </div>
                    <h4 className="text-xl leading-7">Loudest à la Madison #1 (L'integral)</h4>
                    <p>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                    <div className="flex justify-between">
                        <h6 className="text-xs font-container leading-4 text-[#737373]"><FontAwesomeIcon icon={faClock} style={{ color: "#8EC2F2" }} /> 22 April 2021</h6>
                        <h6 className="text-xs font-container leading-4 text-[#737373]"><FontAwesomeIcon icon={faChartLine} style={{ color: "#23856D" }} /> 10 comments</h6>
                    </div>
                    <button className="hover:border-1 hover:border-[#23A6F0]  w-[101px] h-[24px] hover:bg-[#23A6F0] hover:text-white rounded-xl text-secondaryColor text-sm leading-6">Learn More <FontAwesomeIcon icon={faChevronRight} style={{ color: "#8EC2F2" }} /> </button>
                </div>
            </div>
        </div>
    )
}