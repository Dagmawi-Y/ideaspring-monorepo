import "./style.css";

const Products = ({ result }) => {
  return (
    <div className="whole">
      <section className="card-containerr">
        <div className="pitch" style={{marginRight: "30px"}}>
          <div className="card" style={{height:"620px", borderRadius: "18px"}}>
            <p className="card-text">Hit the big orange button to add a new pitch.</p>
            <div className="button-container">
              <button className="add-pitch-button">
                <a href='/startup/pitch' color='#dad4d4'>+</a>
              </button>
            </div>
          </div>
        </div>
        {result}
      </section>
    </div>
  );
};

export default Products;