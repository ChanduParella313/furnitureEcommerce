package furnitureEcommerce.dto;

public class ProductDto {
    private Long productId;
    private String productName;
    private String description;
    private Double price;
    private Integer stock;
    private String image;
    private String color;
    private String material;
    private String style;
    private String finish;
    private String brand;
    private String features;
    private String pattern;
    private String size;
    private String availability;
    private Long subcategoryId;

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getStock() {
        return stock;
    }

    public void setStock(Integer stock) {
        this.stock = stock;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getMaterial() {
        return material;
    }

    public void setMaterial(String material) {
        this.material = material;
    }

    public String getStyle() {
        return style;
    }

    public void setStyle(String style) {
        this.style = style;
    }

    public String getFinish() {
        return finish;
    }

    public void setFinish(String finish) {
        this.finish = finish;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getFeatures() {
        return features;
    }

    public void setFeatures(String features) {
        this.features = features;
    }

    public String getPattern() {
        return pattern;
    }

    public void setPattern(String pattern) {
        this.pattern = pattern;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getAvailability() {
        return availability;
    }

    public void setAvailability(String availability) {
        this.availability = availability;
    }

    public Long getSubcategoryId() {
        return subcategoryId;
    }

    public void setSubcategoryId(Long subcategoryId) {
        this.subcategoryId = subcategoryId;
    }

    public ProductDto(Long productId, String productName, String description, Double price, Integer stock, String image, String color, String material, String style, String finish, String brand, String features, String pattern, String size, String availability, Long subcategoryId) {
        this.productId = productId;
        this.productName = productName;
        this.description = description;
        this.price = price;
        this.stock = stock;
        this.image = image;
        this.color = color;
        this.material = material;
        this.style = style;
        this.finish = finish;
        this.brand = brand;
        this.features = features;
        this.pattern = pattern;
        this.size = size;
        this.availability = availability;
        this.subcategoryId = subcategoryId;
    }

    @Override
    public String toString() {
        return "ProductDto{" +
                "productId=" + productId +
                ", productName='" + productName + '\'' +
                ", description='" + description + '\'' +
                ", price=" + price +
                ", stock=" + stock +
                ", image='" + image + '\'' +
                ", color='" + color + '\'' +
                ", material='" + material + '\'' +
                ", style='" + style + '\'' +
                ", finish='" + finish + '\'' +
                ", brand='" + brand + '\'' +
                ", features='" + features + '\'' +
                ", pattern='" + pattern + '\'' +
                ", size='" + size + '\'' +
                ", availability='" + availability + '\'' +
                ", subcategoryId=" + subcategoryId +
                '}';
    }
}
