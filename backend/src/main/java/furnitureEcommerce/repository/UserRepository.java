package furnitureEcommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import furnitureEcommerce.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    void update(User user);

    void delete(Long id);
}