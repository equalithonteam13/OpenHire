pragma solidity ^0.5.8;
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

contract OpenHire is Administrator {
    mapping(address => Organization) allOrganizations;
    mapping(address => User) allUsers;
    address[] public allUserAddresses;


    struct Organization {
        string name;
        string emailAddress;
        bool verified;
    }

    //Can not return structs with mappings
    struct User {
        string name;
        string emailAddress;
        address[] experienceKeys;
        //mapping so that organizations can look themselves up and approve
        mapping(address => Experience) experience;

        //Can have either array of structs or mapping skill name to array + array with keys
        Skill[] skillsList;

    }

    struct Experience {
        string organization;
        string expertise;
        uint duration;
        bool verified;
    }

    struct Skill {
        string name;
        address[] endorsers;
    }

    function createOrganization(string memory name, string memory emailAddress) public {
        Organization memory newOrganization = Organization({
           name: name,
           emailAddress: emailAddress,
           verified: false
        });

        allOrganizations[msg.sender] = newOrganization;
    }

    function getOrganization(address searchAddress) public view returns (string memory, string memory, bool){
        return (allOrganizations[searchAddress].name, allOrganizations[searchAddress].emailAddress, allOrganizations[searchAddress].verified);
    }

    function verifyOrganization(address organizationAddress) public onlyAdmin {
        allOrganizations[organizationAddress].verified = true;
    }

    //Differentiate user from organization while creating on the front end
    function createUser(string memory name, string memory emailAddress) public {
        User storage newUser = allUsers[msg.sender];
        newUser.name = name;
        newUser.emailAddress = emailAddress;

        allUserAddresses.push(msg.sender);
    }

    function addExperience(address organizationAddress, string memory organizationName, string memory expertise, uint duration) public {
        Experience memory newExperience = Experience({
            organization: organizationName,
            expertise: expertise,
            duration: duration,
            verified: false
        });

        allUsers[msg.sender].experienceKeys.push(organizationAddress);
        allUsers[msg.sender].experience[organizationAddress] = newExperience;
    }

    //Organizations verify User experience
    function verifyExperience(address userAddress) public {
        require(allOrganizations[msg.sender].verified == true);
        allUsers[userAddress].experience[msg.sender].verified = true;
    }

    function addSkill(string memory skillName) public {
        Skill memory newSkill = Skill({
            name: skillName,
            endorsers: new address[](0)
        });
        allUsers[msg.sender].skillsList.push(newSkill);
    }

    function endorseSkill(address endorseeAddress, uint index) public {
        allUsers[endorseeAddress].skillsList[index].endorsers.push(msg.sender);
    }

    function getUserData(address userAddress) public view returns (string memory, string memory, address[] memory, Skill[] memory) {
        return (allUsers[userAddress].name, allUsers[userAddress].emailAddress, allUsers[userAddress].experienceKeys, allUsers[userAddress].skillsList);
    }

    function getExperience(address userAddress, address organizationAddress) public view returns (string memory, string memory, uint, bool) {
        return (allUsers[userAddress].experience[organizationAddress].organization,allUsers[userAddress].experience[organizationAddress].expertise,allUsers[userAddress].experience[organizationAddress].duration,allUsers[userAddress].experience[organizationAddress].verified);
    }
}
