pragma solidity ^0.4.25;

contract ShopFactory {
    
    address[] public deployedShops;

    function createShop(string managerName, uint rice, uint wheat, uint arhad, string fpdName, string shopName, string addr) public {
        address newShop = new Shop(managerName, rice, wheat, arhad, fpdName, shopName, msg.sender, addr);
        deployedShops.push(newShop);
    }

    function getDeployedShops() public view returns (address[]) {
        return deployedShops;
    }
}

contract Shop {
    
    address public manager;
    uint public totalAmount;
    // mapping(address => Customer) public customers;
    string public  managerName;
    uint public  rice;
    uint public wheat;
    uint public arhad;
    string public addr;
    string public fpdName;
    string public shopName;

    constructor(string name, uint r, uint w, uint a, string f, string s, address c, string add) public {
        managerName = name;
        rice = r;
        wheat = w;
        arhad = a;
        fpdName = f;
        shopName = s;
        manager = c;
        addr = add;
    }

    function purchase() public payable {
        totalAmount = 2250;
        require(msg.value == totalAmount);
        rice = rice - 5;
        wheat = wheat - 5;
        arhad = arhad - 5;
    }
}
