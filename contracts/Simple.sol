pragma solidity ^0.5.0;

contract Simple{
string public hello ="hello world!";    
function get() public view returns(string memory){
return hello;
}
function set(string memory _hello) public{
hello = _hello;
}
}
