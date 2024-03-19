import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {

    const { name, features, price } = option;

    return (
        <div className="flex flex-col gap-6 bg-yellow-200 rounded-lg p-8 text-center">
            <h2>
                <span className="text-7xl font-bold">{price}</span>
                <span className="text-4xl font-semibold">/month</span>
            </h2>
            <h4 className="text-5xl font-bold">{name}</h4>
            <h4 className="text-5xl font-bold pl-[10%] text-left mt-16">Features</h4>
            <div className="flex-grow flex flex-col gap-3">
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>
            <button className="w-full h-12 flex items-center justify-center text-[#150B2B] rounded-[50px] font-semibold text-lg bg-[#0BE58A] border border-[#0BE58A] hover:text-[#0BE58A] hover:border-[#0BE58A] hover:bg-transparent">Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object.isRequired
}

export default PriceOption;