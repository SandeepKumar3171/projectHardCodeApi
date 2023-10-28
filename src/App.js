import Product from "./components/Product";

function App() {

  let mydata = {
    "data": [
      {
        "name": "Cosmetics",
        "productList": [
          {
            "name": "Hair Oil",
            "price": 122
          },
          {
            "name": "Face wash",
            "price": 123
          }
        ]
      },
      {
        "name": "Household",
        "productList": [
          {
            "name": "Hair Oil",
            "price": 122
          },
          {
            "name": "Face wash",
            "price": 123
          }
        ]
      }
    ]
  }

  return (
    <>
      <div className="md:m-5 flex flex-col justify-between p-5">
        {
          mydata.data && mydata.data.map((item, index) => (
            <div key={index}>
              <p className="border-b-4 border-gray-700 m-2 text-xl font-semibold">{item.name}</p>
              <div className="flex md:flex-row flex-col w-full gap-5 md:m-5">

                {item.productList && item.productList.map((e,ind) => (

                  <div key={ind} className="md:w-1/2 md:ml-10 md:mr-10 w-full">
                      <Product
                      name={e.name}
                      price={e.price}
                    />
                    </div>
                ))}
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default App;
