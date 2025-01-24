package furnitureEcommerce.dto;


public class CategoryDto {
    private Long categoryId;
    private String categoryName;
    private Long menuId;

    public CategoryDto(Long categoryId, String categoryName, Long menuId) {
        this.categoryId = categoryId;
        this.categoryName = categoryName;
        this.menuId = menuId;
    }

    public Long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public Long getMenuId() {
        return menuId;
    }

    public void setMenuId(Long menuId) {
        this.menuId = menuId;
    }

    @Override
    public String toString() {
        return "CategoryDto{" +
                "categoryId=" + categoryId +
                ", categoryName='" + categoryName + '\'' +
                ", menuId=" + menuId +
                '}';
    }
}
