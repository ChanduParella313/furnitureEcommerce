package src.main.java.furnitureEcommerce.repository;


import src.main.java.furnitureEcommerce.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.PagingAndSortingRepository ;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
	
	
}