package furnitureEcommerce.dto;


public class SubcategoryDto {
    private Long subcategoryId;
    private String subcategoryName;
    private Long categoryId;

    public SubcategoryDto(Long subcategoryId, String subcategoryName, Long categoryId) {
        this.subcategoryId = subcategoryId;
        this.subcategoryName = subcategoryName;
        this.categoryId = categoryId;
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

    public Long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }

    @Override
    public String toString() {
        return "SubcategoryDto{" +
                "subcategoryId=" + subcategoryId +
                ", subcategoryName='" + subcategoryName + '\'' +
                ", categoryId=" + categoryId +
                '}';
    }
}
