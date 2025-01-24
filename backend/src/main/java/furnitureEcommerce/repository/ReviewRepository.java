package furnitureEcommerce.repository;

import furnitureEcommerce.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review,Long> {
}
