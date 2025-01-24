package furnitureEcommerce.repository;


import furnitureEcommerce.model.Subcategory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubcategoryRepository extends JpaRepository<Subcategory, Long> {
    void update(Subcategory subcategory);

    void delete(Long id);
}
