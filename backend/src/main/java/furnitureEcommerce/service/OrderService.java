package furnitureEcommerce.service;

import furnitureEcommerce.model.Order;

import java.util.List;
import java.util.Optional;

public interface OrderService {

    Optional<Order> getOrderById(Long id);
    List<Order> getAllOrders();
    void placeOrder(Order order);
    void updateOrder(Order order);
    void cancelOrder(Long id);

}
