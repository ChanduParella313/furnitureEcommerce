package furnitureEcommerce.repository;

import furnitureEcommerce.model.Shipping;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShippingRepository extends JpaRepository<Shipping,Long> {
}
