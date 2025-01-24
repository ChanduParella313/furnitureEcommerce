package furnitureEcommerce.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "ActivityLog")
public class ActivityLog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long logId;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = true)
    private User user;

    @Column(nullable = false)
    private String action;

    @Column(nullable = false)
    private LocalDateTime performedAt;

    public ActivityLog(Long logId, User user, String action, LocalDateTime performedAt) {
        this.logId = logId;
        this.user = user;
        this.action = action;
        this.performedAt = performedAt;
    }

    public Long getLogId() {
        return logId;
    }

    public void setLogId(Long logId) {
        this.logId = logId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    public LocalDateTime getPerformedAt() {
        return performedAt;
    }

    public void setPerformedAt(LocalDateTime performedAt) {
        this.performedAt = performedAt;
    }

    @Override
    public String toString() {
        return "ActivityLog{" +
                "logId=" + logId +
                ", user=" + user +
                ", action='" + action + '\'' +
                ", performedAt=" + performedAt +
                '}';
    }
}
