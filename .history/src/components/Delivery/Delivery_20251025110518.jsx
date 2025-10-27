import { Percent, Truck, Clock3, ShieldCheck } from "lucide-react";

const Delivery = () => {
  return (
    <div className="lg:container bg-white mx-auto shadow-md p-7 rounded-b-2xl">
      <div className="grid grid-cols-4">
        <div className="delivery_wrapper">
          <div className="flex items-center gap-4">
            <p>
              <Percent size="3rem" />
            </p>
            <div>
              <h4 className="text-base text-[#272343] mb-2.5 font-medium font-inter capitalize">
                Discount
              </h4>
              <p className="text-sm text-[#9a9caa] font-inter font-normal">
                Every week new sales
              </p>
            </div>
          </div>
        </div>
        <div className="delivery_wrapper">
          <div className="flex items-center gap-4">
            <p>
              <Truck size="3rem" />
            </p>
            <div>
              <h4 className="text-base text-[#272343] mb-2.5 font-medium font-inter capitalize">
                Free Delivery
              </h4>
              <p className="text-sm text-[#9a9caa] font-inter font-normal">
                100% Free for all orders
              </p>
            </div>
          </div>
        </div>
        <div className="delivery_wrapper">
          <div className="flex items-center gap-4">
            <p>
              <Clock3 size="3rem" />
            </p>
            <div>
              <h4 className="text-base text-[#272343] mb-2.5 font-medium font-inter capitalize">
                Great Support 24/7
              </h4>
              <p className="text-sm text-[#9a9caa] font-inter font-normal">
                Me care your experiences
              </p>
            </div>
          </div>
        </div>
        <div className="delivery_wrapper">
          <div className="flex items-center gap-4">
            <p>
              <ShieldCheck size="3rem" />
            </p>
            <div>
              <h4 className="text-base text-[#272343] mb-2.5 font-medium font-inter capitalize">
                Secure Payment
              </h4>
              <p className="text-sm text-[#9a9caa] font-inter font-normal">
                100% Secure Payment Method
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Delivery;
