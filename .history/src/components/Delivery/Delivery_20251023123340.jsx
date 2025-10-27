import { Percent } from "lucide-react";

const Delivery = () => {
  return (
    <div className="lg:container mx-auto">
      <div className="grid grid-cols-4">
        <div className="delivery_wrapper">
          <div className="flex items-center gap-4">
            <p>
              <Percent />
            </p>
            <div>
              <h4 className="text-base text-[#272343] mb-2.5 font-medium font-inter capitalize">
                Discount
              </h4>
              <h5 className="text-sm text-[#9a9caa] font-inter font-normal">
                Every week new sales
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Delivery;
