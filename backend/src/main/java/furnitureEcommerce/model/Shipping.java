package furnitureEcommerce.model;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Shipping")
public class Shipping {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long shippingId;

    @ManyToOne
    @JoinColumn(name = "order_id", nullable = false)
    private Order order;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "address_id", nullable = false)
    private Address address;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ShippingStatus shippingStatus;

    private String trackingNumber;

    @Temporal(TemporalType.DATE)
    private Date estimatedDelivery;

    public enum ShippingStatus {
        PENDING, PROCESSING, SHIPPED, DELIVERED
    }

    public Shipping(Long shippingId, Order order, User user, Address address, ShippingStatus shippingStatus, String trackingNumber, Date estimatedDelivery) {
        this.shippingId = shippingId;
        this.order = order;
        this.user = user;
        this.address = address;
        this.shippingStatus = shippingStatus;
        this.trackingNumber = trackingNumber;
        this.estimatedDelivery = estimatedDelivery;
    }

    public Long getShippingId() {
        return shippingId;
    }

    public void setShippingId(Long shippingId) {
        this.shippingId = shippingId;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public ShippingStatus getShippingStatus() {
        return shippingStatus;
    }

    public void setShippingStatus(ShippingStatus shippingStatus) {
        this.shippingStatus = shippingStatus;
    }

    public String getTrackingNumber() {
        return trackingNumber;
    }

    public void setTrackingNumber(String trackingNumber) {
        this.trackingNumber = trackingNumber;
    }

    public Date getEstimatedDelivery() {
        return estimatedDelivery;
    }

    public void setEstimatedDelivery(Date estimatedDelivery) {
        this.estimatedDelivery = estimatedDelivery;
    }

    @Override
    public String toString() {
        return "Shipping{" +
                "shippingId=" + shippingId +
                ", order=" + order +
                ", user=" + user +
                ", address=" + address +
                ", shippingStatus=" + shippingStatus +
                ", trackingNumber='" + trackingNumber + '\'' +
                ", estimatedDelivery=" + estimatedDelivery +
                '}';
    }
}
