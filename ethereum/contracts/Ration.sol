pragma solidity ^0.4.25;

contract ShopFactory {
    
    mapping(string => address[]) getBlockList;
    //address[] public deployedShops;

    function createShop(string managerName, uint rice, uint wheat, uint arhad, uint kerosene, string fpdName, string shopName, string addr, string blockName) public {
        address newShop = new Shop(managerName, rice, wheat, arhad, kerosene, fpdName, shopName, msg.sender, addr);
        getBlockList[blockName].push(newShop);
    }

    function getDeployedShops(string blockName) public view returns (address[]) {
        return getBlockList[blockName];
    }
}

contract Shop {
    
    struct Record {
        string orderId;
        string aadhar;
        string time;
    }
    
    Record[] public recordList;
    mapping(string => string) records;
    mapping(string => string) aadharDate;
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
    
    function aadharFromOrder(string aadhar) public view returns (string){
        return records[aadhar];
    }
    
    function getDate(string aadhar) public view returns(string) {
        return aadharDate[aadhar];
    }
    
    
    function purchase(string aadhar, string orderId, string time, uint kminus, uint rminus, uint wminus, uint aminus) public payable{
        require(msg.value > 70);
        Record memory newRecord = Record({
            orderId : orderId,
            aadhar : aadhar,
            time : time
        });
        records[aadhar] = orderId;
        aadharDate[aadhar] = time;
        recordList.push(newRecord);
        totalAmount = rminus*2 + wminus*4 + aminus*3 + kminus*5;
        kerosene = kerosene - kminus;
        rice = rice - rminus;
        wheat = wheat - wminus;
        arhad = arhad - aminus;
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
    
    function recordCount() public view returns (uint) {
        return recordList.length;
    }
}
