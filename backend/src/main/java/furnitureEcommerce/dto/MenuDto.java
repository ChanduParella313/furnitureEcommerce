package furnitureEcommerce.dto;

import java.util.List;

public class MenuDto {

    private Long menuId;
    private String menuName;

    // List of associated categories (optional, based on use case)
    private List<CategoryDto> categories;

    // Getters and Setters
    public Long getMenuId() {
        return menuId;
    }

    public void setMenuId(Long menuId) {
        this.menuId = menuId;
    }

    public String getMenuName() {
        return menuName;
    }

    public void setMenuName(String menuName) {
        this.menuName = menuName;
    }

    public List<CategoryDto> getCategories() {
        return categories;
    }

    public void setCategories(List<CategoryDto> categories) {
        this.categories = categories;
    }

    public MenuDto(Long menuId, String menuName, List<CategoryDto> categories) {
        this.menuId = menuId;
        this.menuName = menuName;
        this.categories = categories;
    }

    @Override
    public String toString() {
        return "MenuDto{" +
                "menuId=" + menuId +
                ", menuName='" + menuName + '\'' +
                ", categories=" + categories +
                '}';
    }
}
