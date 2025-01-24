package furnitureEcommerce.repository;

import furnitureEcommerce.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart, Long> {
    void remove(Long itemId);

    void update(Cart cart);
}
