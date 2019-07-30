    
pragma solidity ^0.5.10;
pragma experimental ABIEncoderV2;

contract Administrator {
    address private adminAddress;
    
    
    constructor() internal {
        adminAddress = msg.sender;
    }
    
    function owner() public view returns (address) {
        return adminAddress;
    }
    
    modifier onlyAdmin() {
        require(msg.sender == adminAddress);
        _;
    }
    
}

contract LinkedIn is Administrator {
    mapping(address => Organization) allOrganizations;
    
    struct Organization {
        string name;
        string emailAddress;
        bool verified;
    }
    
    function createOrganization(string memory name, string memory emailAddress) public {
        Organization memory newOrganization = Organization({
           name: name,
           emailAddress: emailAddress,
           verified: false
        });
        
        allOrganizations[msg.sender] = newOrganization;
    }
    
    function getOrganization(address searchAddress) public view returns (Organization memory){
        return allOrganizations[searchAddress];
    }
    
    function verifyOrganization(address organizationAddress) public onlyAdmin {
        allOrganizations[organizationAddress].verified = true;
    }
}
