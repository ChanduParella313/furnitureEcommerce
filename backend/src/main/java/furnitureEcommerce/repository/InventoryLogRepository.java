package furnitureEcommerce.repository;

import furnitureEcommerce.model.InventoryLog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InventoryLogRepository extends JpaRepository<InventoryLog,Long> {
}
