import { fetchExternalImage } from "next/dist/server/image-optimizer";

const AllShoes = async () => {
  const res = await fetch("http://localhost:5000/shoes");
  const shoes = await res.json();

  return (
    <div>
      <h1 className="text-5xl text-center">All Shoes</h1>
      <div className="grid grid-cols-3 gap-3">
        {shoes.map((shoe) => (
          <div key={shoe.id} className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {shoe.title}
                <div className="badge badge-secondary">{shoe.price}</div>
              </h2>
              <p>{shoe.description}</p>
              <div className="card-actions justify-end">
                <div className="btn btn-warning">Details</div>
                <div className="btn  btn-primary">Buy Now</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllShoes;
