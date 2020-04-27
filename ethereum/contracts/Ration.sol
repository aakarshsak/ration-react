pragma solidity ^0.4.25;

contract ShopFactory {
    
    address[] public deployedShops;

    function createShop(string managerName, uint rice, uint wheat, uint arhad, uint kerosene, string fpdName, string shopName, string addr) public {
        address newShop = new Shop(managerName, rice, wheat, arhad, kerosene, fpdName, shopName, msg.sender, addr);
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
    uint public kerosene;
    string public addr;
    string public fpdName;
    string public shopName;
    string public blockName;

    constructor(string name, uint r, uint w, uint a, uint k, string f, string s, address c, string add) public {
        managerName = name;
        rice = r;
        wheat = w;
        arhad = a;
        kerosene = k;
        fpdName = f;
        shopName = s;
        manager = c;
        addr = add;
    }

    function purchase() public {
        totalAmount = 70;
        kerosene = kerosene - 5;
        rice = rice - 5;
        wheat = wheat - 5;
        arhad = arhad - 5;
    }
    
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    
    function createRequest(string b) public restricted {
        blockName = b;
    }
    
    
    function getDetails() public view returns (
        string, uint, uint, uint, uint, string, string, address, string
    ) {
        return (
            managerName,
            rice,
            wheat,
            arhad,
            kerosene,
            fpdName,
            shopName,
            manager,
            addr
        );
    }
}
