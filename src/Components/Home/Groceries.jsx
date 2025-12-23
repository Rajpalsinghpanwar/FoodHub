import { NavLink } from "react-router";

function Groceries({item}) {

 
  
  
  return (
    <div className="w-full h-full  flex flex-col ">
      <NavLink className="h-52 w-44 text-center" to="/collections">
        <img className="h-40 w-40" src={item.image} alt="" />
        <span className="flex  justify-center items-center h-8 w-32 text-[15px] font-bold ml-4 mt-3">{item.name}</span>
      </NavLink>
      
    </div>
  );
}

export default Groceries;