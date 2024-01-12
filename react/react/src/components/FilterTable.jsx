/* eslint-disable react/prop-types */
function SearchBar() {
  return (
    <div className="flex flex-col justify-start">
      <input />
      <div>
        <input type="checkbox" /> Only in stock
      </div>
    </div>
  );
}
function Product({item}){
return (
<div className="bg-blue-500">
	<div className="w-full flex justify-between">
		<span className={item.stocked ? "" : "text-red-500"}>{item.name}</span>
		<span>{item.price}</span>
	</div>
</div>
)
}

function Table({fruitList}) {
  return (
		<div className="flex flex-col gap-4">
		<Product item={fruitList[0]} />
		<Product item={fruitList[1]} />
		<Product item={fruitList[2]} />
		<Product item={fruitList[4]} />
		</div>

	);
}

function FilterTable() {
  const fruits = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  ];
  return (
    <div>
      <SearchBar />
      <Table fruitList={fruits} />
    </div>
  );
}

export default FilterTable;
