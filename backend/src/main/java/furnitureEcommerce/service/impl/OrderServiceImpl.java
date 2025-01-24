package furnitureEcommerce.service.impl;

import furnitureEcommerce.model.Order;
import furnitureEcommerce.repository.OrderRepository;
import furnitureEcommerce.service.OrderService;

import java.util.List;
import java.util.Optional;

public class OrderServiceImpl implements OrderService {
    private final OrderRepository orderRepository;

    public OrderServiceImpl(OrderRepository orderRepository){
        this.orderRepository=orderRepository;
    }


    @Override
    public Optional<Order> getOrderById(Long id) {
        return orderRepository.findById(id);
    }

    @Override
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    @Override
    public void placeOrder(Order order) {
        orderRepository.save(order);
    }

    @Override
    public void updateOrder(Order order) {
        orderRepository.update(order);

    }

    @Override
    public void cancelOrder(Long id) {
        orderRepository.delete(id);
    }
}
