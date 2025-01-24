package furnitureEcommerce.dto;

import java.time.LocalDateTime;

public class PaymentDto {
    private Long paymentId;
    private Long userId;
    private Long orderId;
    private String paymentMethod;
    private Double amount;
    private String paymentStatus;
    private String transactionId;
    private LocalDateTime paymentDate;

    public Long getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(Long paymentId) {
        this.paymentId = paymentId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public String getPaymentStatus() {
        return paymentStatus;
    }

    public void setPaymentStatus(String paymentStatus) {
        this.paymentStatus = paymentStatus;
    }

    public String getTransactionId() {
        return transactionId;
    }

    public void setTransactionId(String transactionId) {
        this.transactionId = transactionId;
    }

    public LocalDateTime getPaymentDate() {
        return paymentDate;
    }

    public void setPaymentDate(LocalDateTime paymentDate) {
        this.paymentDate = paymentDate;
    }

    public PaymentDto(Long paymentId, Long userId, Long orderId, String paymentMethod, Double amount, String paymentStatus, String transactionId, LocalDateTime paymentDate) {
        this.paymentId = paymentId;
        this.userId = userId;
        this.orderId = orderId;
        this.paymentMethod = paymentMethod;
        this.amount = amount;
        this.paymentStatus = paymentStatus;
        this.transactionId = transactionId;
        this.paymentDate = paymentDate;
    }

    @Override
    public String toString() {
        return "PaymentDto{" +
                "paymentId=" + paymentId +
                ", userId=" + userId +
                ", orderId=" + orderId +
                ", paymentMethod='" + paymentMethod + '\'' +
                ", amount=" + amount +
                ", paymentStatus='" + paymentStatus + '\'' +
                ", transactionId='" + transactionId + '\'' +
                ", paymentDate=" + paymentDate +
                '}';
    }
}
