import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";

const ItemList = ({ items }) => {
  // console.log(items);
  const imgId =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

  const defaultImgUrl =
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const dispatch = useDispatch();

  const handleItems = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="m-2 flex border-b-2 border-gray-200 p-2 text-left"
        >
          <div className="flex-grow">
            <div className="flex items-center justify-between">
              <div className="flex-grow">
                <span className="font-semibold">{item?.card?.info?.name}</span>
                <span>{" ₹ "}</span>
                <span>
                  {item?.card?.info?.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
                <span>{" /-"}</span>
              </div>
              <div className="relative">
                <img
                  className="h-24 w-24 rounded-xl object-cover"
                  src={
                    item?.card?.info?.imageId
                      ? imgId + item.card.info.imageId
                      : defaultImgUrl
                  }
                  alt="image"
                />
                <button
                  className="absolute bottom-0 left-5 mt-2 rounded-lg bg-white p-2 shadow-lg"
                  onClick={() => handleItems(item)}
                >
                  Add +
                </button>
              </div>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
