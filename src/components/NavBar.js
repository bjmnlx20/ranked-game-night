import { Link } from "react-router-dom";


// this works? https://medium.com/zastrin/how-to-save-your-ethereum-dapp-users-from-paying-gas-for-transactions-abd72f15e14d

// or this https://docs.openzeppelin.com/learn/sending-gasless-transactions

function Navbar(object) {
  

  return (
    <div className="">

                <Link to="/">- - -LEADER BOARD- - -</Link>
                <div> </div>

                <Link to="/create">- - - R E G I S T E R - - - </Link>

    </div>
  );
}

export default Navbar;
