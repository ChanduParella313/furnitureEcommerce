package furnitureEcommerce.repository;

import furnitureEcommerce.model.Wishlist;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WishlistRepository extends JpaRepository<Wishlist,Long> {
}
