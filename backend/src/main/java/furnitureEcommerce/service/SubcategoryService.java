package furnitureEcommerce.service;

import furnitureEcommerce.model.Subcategory;

import java.util.List;
import java.util.Optional;

public interface SubcategoryService {
    Optional<Subcategory> getSubcategoryById(Long id);
    List<Subcategory> getAllSubcategories();
    void addSubcategory(Subcategory subcategory);
    void updateSubcategory(Subcategory subcategory);
    void deleteSubcategory(Long id);
}
