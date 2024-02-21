import proddata from './../../data/data.json';
import './product.css';
function Prodcont() {
  return (
    <div className="prodcont">
      {proddata.map((item) => (
        <div key={item.id} className='item'>
          <img src={item.image} alt={item.name} className='itemimg' />
          <div className='itemname'>{item.name}</div>
          <button>Add to cart</button>
        </div>
      ))}
    </div>
  );
}

export default Prodcont;
