package furnitureEcommerce.service;



import furnitureEcommerce.model.Product;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public interface ProductService {
    Optional<Product> getProductById(Long id);
    List<Product> getAllProducts();
    void addProduct(Product product);
    void updateProduct(Product product);
    void deleteProduct(Long id);
}