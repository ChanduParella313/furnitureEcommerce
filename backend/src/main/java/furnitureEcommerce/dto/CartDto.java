package furnitureEcommerce.dto;

import java.time.LocalDateTime;

public class CartDto {
    private Long cartId;
    private Long userId;
    private Long productId;
    private Integer quantity;
    private LocalDateTime addedAt;

    public Long getCartId() {
        return cartId;
    }

    public void setCartId(Long cartId) {
        this.cartId = cartId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

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

    public LocalDateTime getAddedAt() {
        return addedAt;
    }

    public void setAddedAt(LocalDateTime addedAt) {
        this.addedAt = addedAt;
    }

    public CartDto(Long cartId, Long userId, Long productId, Integer quantity, LocalDateTime addedAt) {
        this.cartId = cartId;
        this.userId = userId;
        this.productId = productId;
        this.quantity = quantity;
        this.addedAt = addedAt;
    }

    @Override
    public String toString() {
        return "CartDto{" +
                "cartId=" + cartId +
                ", userId=" + userId +
                ", productId=" + productId +
                ", quantity=" + quantity +
                ", addedAt=" + addedAt +
                '}';
    }
}
