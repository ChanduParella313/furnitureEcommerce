package furnitureEcommerce.repository;

import furnitureEcommerce.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category,Long> {

    void update(Category category);

    void delete(Long id);
}
