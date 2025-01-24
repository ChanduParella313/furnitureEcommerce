package furnitureEcommerce.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "Subcategory")
public class Subcategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long subcategoryId;

    @Column(nullable = false, unique = true)
    private String subcategoryName;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    @OneToMany(mappedBy = "subcategory", cascade = CascadeType.ALL)
    private List<Product> products;

    public Subcategory(Long subcategoryId, String subcategoryName, Category category, List<Product> products) {
        this.subcategoryId = subcategoryId;
        this.subcategoryName = subcategoryName;
        this.category = category;
        this.products = products;
    }

    public Long getSubcategoryId() {
        return subcategoryId;
    }

    public void setSubcategoryId(Long subcategoryId) {
        this.subcategoryId = subcategoryId;
    }

    public String getSubcategoryName() {
        return subcategoryName;
    }

    public void setSubcategoryName(String subcategoryName) {
        this.subcategoryName = subcategoryName;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }

    @Override
    public String toString() {
        return "Subcategory{" +
                "subcategoryId=" + subcategoryId +
                ", subcategoryName='" + subcategoryName + '\'' +
                ", category=" + category +
                ", products=" + products +
                '}';
    }
}
