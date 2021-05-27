pragma solidity >=0.4.25 <0.6.0;

// Create, edit, and view order here

contract OrderInterface {

    function GetAllOrderBasicInformation() external view returns (
        // return orderID, timestamp, fee, storeID
    );

    function GetAllOrderDetailInformation(uint storeID) external view returns (
        // return orderID, timestamp, fee, storeID, orderContent
    );

}

contract OrderContract {

    // Declare event
    event NewOrder();

    function UserSetMyOrderPost(uint storeID, uint[] items, uint[] items_number, uint delivery tip) external payable {
        // return orderID
    }

    function SetOrderDelivering(uint orderID) external payable {
        // return orderID
    }

    function SetOrderDelivered(uint64 orderID) external {
        // assure call by deliveryman
    }

    function SetOrderReceived(uint64 orderID) external {
        // assure call by customer
    }

    function UserRateDeliveryman(address user, uint score) external {
        // rating
    }

    function DeliverymanRateCustomer(address user, uint score) external {
        // rating
    }

}