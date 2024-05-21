import "./style.css";

const Products = ({ result }) => {
  return (
    <div className="whole">
      <section className="card-containerr">{result}</section>
    </div>
  );
};

export default Products;