import PropTypes from "prop-types";
import { IoMdCheckmarkCircle } from "react-icons/io";

const Feature = ({ feature }) => {
    return (
        <div className="text-left pl-[12%] flex gap-3">
            <IoMdCheckmarkCircle className="text-3xl"></IoMdCheckmarkCircle> 
            <p className="text-3xl">{feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string.isRequired
}

export default Feature;