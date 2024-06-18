import { useNavigate } from "react-router-dom";

const Banner = () => {

  const navigate = useNavigate();

  function handleClickToListedBooks() {
      navigate ("/listedBooks");
  }
  return (

    <div className="hero bg-base-200 rounded-xl p-4 ">
      <div className="hero hero-content flex-col lg:flex-row-reverse">
        <img src="https://m.media-amazon.com/images/I/71W--iKRHKL._SL1499_.jpg" className="w-80 h-96 rounded-lg shadow-2xl" />
        <div>
          <h1 className=" text-2xl md:text-4xl lg:text-6xl font-bold mb-12 lg:mr-28">Books to freshen <br /> up your bookshelf</h1>
          <button className="btn bg-[#23BE0A] text-white font-bold text-xl" onClick={handleClickToListedBooks}>View The List</button>
        </div>
      </div>
    </div>

  )
}

export default Banner