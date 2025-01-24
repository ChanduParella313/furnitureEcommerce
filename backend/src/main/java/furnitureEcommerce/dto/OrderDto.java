package furnitureEcommerce.dto;



import java.util.List;

public class OrderDto {
    private Long orderId;
    private Long userId;
    private Long addressId;
    private Double totalPrice;
    private String orderStatus;
    private List<OrderItemDto> orderItems;

    // Nested DTO for order items
    public static class OrderItemDto {
        private Long productId;
        private Integer quantity;
        private Double price;

        public Long getProductId() {
            return productId;
        }

        public void setProductId(Long productId) {
            this.productId = productId;
        }

        public Integer getQuantity() {
            return quantity;
        }

        public void setQuantity(Integer quantity) {
            this.quantity = quantity;
        }

        public Double getPrice() {
            return price;
        }

        public void setPrice(Double price) {
            this.price = price;
        }
    }

    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getAddressId() {
        return addressId;
    }

    public void setAddressId(Long addressId) {
        this.addressId = addressId;
    }

    public Double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public String getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(String orderStatus) {
        this.orderStatus = orderStatus;
    }

    public List<OrderItemDto> getOrderItems() {
        return orderItems;
    }

    public void setOrderItems(List<OrderItemDto> orderItems) {
        this.orderItems = orderItems;
    }

    public OrderDto(Long orderId, Long userId, Long addressId, Double totalPrice, String orderStatus, List<OrderItemDto> orderItems) {
        this.orderId = orderId;
        this.userId = userId;
        this.addressId = addressId;
        this.totalPrice = totalPrice;
        this.orderStatus = orderStatus;
        this.orderItems = orderItems;
    }

    @Override
    public String toString() {
        return "OrderDto{" +
                "orderId=" + orderId +
                ", userId=" + userId +
                ", addressId=" + addressId +
                ", totalPrice=" + totalPrice +
                ", orderStatus='" + orderStatus + '\'' +
                ", orderItems=" + orderItems +
                '}';
    }
}
