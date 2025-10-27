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
              <h4>Every week new sales</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Delivery;
