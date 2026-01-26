import CardComp from "./CardComp";
import CardCommerce from "./CardCommerce";

export default function CardList({ data, type, children }) {
  return (
    <div className="block mx-auto w-4xl">
      { children }
      <div className="grid grid-cols-4 gap-4">

        {data.map((item, index) =>
          type == "categories" ? (
            <CardComp key={index} item={item} />
          ) : (
            <CardCommerce key={index} item={item} />
          )
        )}

      </div>
    </div>
  );
}
