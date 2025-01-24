package furnitureEcommerce.dto;

import java.time.LocalDateTime;

public class ReviewDto {
    private Long reviewId;
    private Long productId;
    private Long userId;
    private Integer rating;
    private String reviewText;
    private LocalDateTime createdAt;

    public Long getReviewId() {
        return reviewId;
    }

    public void setReviewId(Long reviewId) {
        this.reviewId = reviewId;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public String getReviewText() {
        return reviewText;
    }

    public void setReviewText(String reviewText) {
        this.reviewText = reviewText;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public ReviewDto(Long reviewId, Long productId, Long userId, Integer rating, String reviewText, LocalDateTime createdAt) {
        this.reviewId = reviewId;
        this.productId = productId;
        this.userId = userId;
        this.rating = rating;
        this.reviewText = reviewText;
        this.createdAt = createdAt;
    }

    @Override
    public String toString() {
        return "ReviewDto{" +
                "reviewId=" + reviewId +
                ", productId=" + productId +
                ", userId=" + userId +
                ", rating=" + rating +
                ", reviewText='" + reviewText + '\'' +
                ", createdAt=" + createdAt +
                '}';
    }
}

