package furnitureEcommerce.dto;


import java.time.LocalDateTime;

public class WishlistDto {
    private Long wishlistId;
    private Long userId;
    private Long productId;
    private LocalDateTime addedAt;

    public Long getWishlistId() {
        return wishlistId;
    }

    public void setWishlistId(Long wishlistId) {
        this.wishlistId = wishlistId;
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

    public LocalDateTime getAddedAt() {
        return addedAt;
    }

    public void setAddedAt(LocalDateTime addedAt) {
        this.addedAt = addedAt;
    }

    public WishlistDto(Long wishlistId, Long userId, Long productId, LocalDateTime addedAt) {
        this.wishlistId = wishlistId;
        this.userId = userId;
        this.productId = productId;
        this.addedAt = addedAt;
    }

    @Override
    public String toString() {
        return "WishlistDto{" +
                "wishlistId=" + wishlistId +
                ", userId=" + userId +
                ", productId=" + productId +
                ", addedAt=" + addedAt +
                '}';
    }
}
