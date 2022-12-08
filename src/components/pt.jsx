import tailorImg from "../assets/images/professional-tailor.png"

export default function Pt() {
    return (
        <>
            <div className="flex lg:justify-center">
            <div className="px-[7%] py-20 lg:flex items-start lg:justify-between">
                <div className="pb-3 lg:w-[40%]">
                    <h1 className="w-fit font-bold px-2">
                        PROFESSIONAL <br /> <span className="text-blue-500">TAILORS</span>
                    </h1>
                    <p className="text-[12px] px-2 md:w-[300px] lg:w-[400px]">
                        We have dealt with various kinds of garments, be it school, office or hotel uniforms, labor & security, fashion & casual wear, or any other kind of fabrics. Moreover, we offer embroidery and printing on all of our products. We use only the finest material and are sourcing our raw materials all over the world. We have dealt with various kinds of garments, be it school, office or hotel uniforms, labor & security, fashion & casual wear, or any other kind of fabrics. Moreover, we offer embroidery and printing on all of our products. We use only the finest material and are sourcing our raw materials all over the world.other kind of fabrics. products. We use only the finest material and are sourcing our raw materials all over the world.other kind of fabrics.
                    </p>
                </div>

                <div className="lg:w-[50%]">
                    <img src={tailorImg} alt="" className="lg:w-[300px] max-w-[300px]"/>
                    <div className="relative shadow-2xl bg-white bottom-10 w-[88%] rounded-md float-right p-3 left-4 lg:w-[250px] md:max-w-[350px] md:mr-[240px]">
                        <div className="flex justify-between items-center">
                            <h2 className="font-semibold">SALMAN AZEEM</h2>
                            <p className="text-gray-500 text-[12px]">15 YEARS OF INDUSTRY EXPERIENCE</p>
                        </div>
                        <p className="text-[12px] pt-3">
                            We have dealt with various kinds of garments, be it school, office or hotel uniforms, labor & security, fashion & casual wear, or any other kind of fabrics. Moreover, we offer embroidery and printing on all of our products. We use only
                        </p>
                    </div>
                </div>

            </div>
            </div>
        </>
    )
}