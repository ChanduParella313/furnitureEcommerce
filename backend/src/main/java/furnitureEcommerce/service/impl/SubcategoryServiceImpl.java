package furnitureEcommerce.service.impl;

import furnitureEcommerce.model.Subcategory;
import furnitureEcommerce.repository.SubcategoryRepository;
import furnitureEcommerce.service.SubcategoryService;

import java.util.List;
import java.util.Optional;

public class SubcategoryServiceImpl implements SubcategoryService {

    private final SubcategoryRepository subcategoryRepository;

    public SubcategoryServiceImpl(SubcategoryRepository subcategoryRepository) {
        this.subcategoryRepository = subcategoryRepository;
    }

    @Override
    public Optional<Subcategory> getSubcategoryById(Long id) {
        return subcategoryRepository.findById(id);
    }

    @Override
    public List<Subcategory> getAllSubcategories() {
        return subcategoryRepository.findAll();
    }

    @Override
    public void addSubcategory(Subcategory subcategory) {
        subcategoryRepository.save(subcategory);
    }

    @Override
    public void updateSubcategory(Subcategory subcategory) {
        subcategoryRepository.update(subcategory);
    }

    @Override
    public void deleteSubcategory(Long id) {
        subcategoryRepository.delete(id);
    }
}
