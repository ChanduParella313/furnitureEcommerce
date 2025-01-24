package furnitureEcommerce.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "InventoryLog")
public class InventoryLog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long logId;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @Column(nullable = false)
    private Integer changeQuantity;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ChangeReason changeReason;

    @Column(nullable = false)
    private LocalDateTime changedAt;

    public enum ChangeReason {
        PURCHASE, RETURN, ADJUSTMENT
    }

    public InventoryLog(Long logId, Product product, Integer changeQuantity, ChangeReason changeReason, LocalDateTime changedAt) {
        this.logId = logId;
        this.product = product;
        this.changeQuantity = changeQuantity;
        this.changeReason = changeReason;
        this.changedAt = changedAt;
    }

    public Long getLogId() {
        return logId;
    }

    public void setLogId(Long logId) {
        this.logId = logId;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Integer getChangeQuantity() {
        return changeQuantity;
    }

    public void setChangeQuantity(Integer changeQuantity) {
        this.changeQuantity = changeQuantity;
    }

    public ChangeReason getChangeReason() {
        return changeReason;
    }

    public void setChangeReason(ChangeReason changeReason) {
        this.changeReason = changeReason;
    }

    public LocalDateTime getChangedAt() {
        return changedAt;
    }

    public void setChangedAt(LocalDateTime changedAt) {
        this.changedAt = changedAt;
    }

    @Override
    public String toString() {
        return "InventoryLog{" +
                "logId=" + logId +
                ", product=" + product +
                ", changeQuantity=" + changeQuantity +
                ", changeReason=" + changeReason +
                ", changedAt=" + changedAt +
                '}';
    }
}
