import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faEye, faStar, faDownload, faChartArea, faChartLine, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faClock } from "@fortawesome/free-regular-svg-icons";


export default function ProductCard() {
    return (
        <div className="flex justify-between border-1 border-gray-150 shadow-sm">
            <div className="product-card w-[348px] h-[604px] sm:w-[308px] sm:h-[604px] m-3 relative ">
                <img src="productcard.jpeg" className="object-cover" />
                <button className="absolute top-[20px] left-[20px] bg-[#E74040] w-[52px] h-[24px] font-container text-[14px] leading-6 font-bold text-white rounded-sm">Sale</button>
                <button className="absolute top-[160px] left-[75px] 2xl:top-[160px] 2xl:left-[75px] xl:top-[160px] xl:left-[75px] lg:top-[120px] lg:left-[55px] md:top-[80px] md:left-[45px] sm:top-[160px] sm:left-[90px]   p-2 rounded-full bg-white w-[40px] h-[40px] hover:text-red-600"><FontAwesomeIcon icon={faHeart} /></button>
                <button className="absolute top-[160px] left-[125px] 2xl:top-[160px] 2xl:left-[135px] xl:top-[160px] xl:left-[125px] lg:top-[120px] lg:left-[105px] md:top-[80px] md:left-[90px] sm:top-[160px] sm:left-[140px]  p-2 rounded-full bg-white w-[40px] h-[40px] hover:text-red-600"><FontAwesomeIcon icon={faCartShopping} /></button>
                <button className="absolute top-[160px] left-[175px] 2xl:top-[160px] 2xl:left-[195px] xl:top-[160px] xl:left-[175px] lg:top-[120px] lg:left-[155px] md:top-[80px] md:left-[135px] sm:top-[160px] sm:left-[190px]  p-2 rounded-full bg-white w-[40px] h-[40px] hover:text-red-600"><FontAwesomeIcon icon={faEye} /></button>
                <div className="flex-col text-left m-3">
                    <div className="flex justify-between mb-3">
                        <h4 className="text-[#23A6F0] text-[14px] font-container leading-6 font-bold">English Departement</h4>
                        <button className="w-[50px] h-[26px] bg-[#252B42] text-white font-container text-[12px] leading-[16px] rounded-xl hover:bg-gray-400"><FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} /> 4.9</button>
                    </div>
                    <h5 className="text-[16px] leading-6 font-container font-bold text[#252B42] mb-3">Graphic Design</h5>
                    <p className="text-sm leading-5 font-container text-[#737373] text- mr-3 mb-3">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                    <h6 className="font-bol text-[14px] leading-6 font-container text-[#737373] mb-3 font-bold"><FontAwesomeIcon icon={faDownload} /> 15 Sales</h6>
                    <div className="flex gap-1 mb-3">
                        <h5 className="text-[#BDBDBD] text-[16px] leading-6 font-container font-bold">$16.48</h5>
                        <h5 className="text-[#23856D] text-[16px] leading-6 font-container font-bold">$6.48</h5>
                    </div>
                    <div className="flex gap-1 mb-3">
                        <button className="p-2 rounded-full bg-[#23A6F0]"></button>
                        <button className="p-2 rounded-full bg-[#23856D]"></button>
                        <button className="p-2 rounded-full bg-[#E77C40]"></button>
                        <button className="p-2 rounded-full bg-[#252B42]"></button>
                    </div>
                    <div className="flex gap-1 mb-3 justify-between">
                        <h6 className="text-[12px] font-container leading-[16px] text-[#737373]"><FontAwesomeIcon icon={faClock} style={{ color: "#23A6F0", }} /> 22hr 30min</h6>
                        <h6 className="text-[12px] font-container leading-[16px] text-[#737373]"><FontAwesomeIcon icon={faChartLine} style={{ color: "#E77C40", }} /> 64 Lessons</h6>
                        <h6 className="text-[12px] font-container leading-[16px] text-[#737373]"><FontAwesomeIcon icon={faChartArea} style={{ color: "#23856D", }} /> Progress</h6>
                    </div>
                    <button className="border-1 border-[#23A6F0] text-[#23A6F0] px-[20px] py-[10px] rounded-[37px] hover:bg-[#23A6F0] hover:text-white">Learn More <FontAwesomeIcon icon={faChevronRight} /> </button>
                </div>
            </div>
        </div>
    )
}
