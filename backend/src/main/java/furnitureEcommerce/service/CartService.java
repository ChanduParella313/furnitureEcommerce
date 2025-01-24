package furnitureEcommerce.service;

import furnitureEcommerce.model.Cart;

public interface CartService {
    Cart getCartByUserId(Long userId);
    void addItemToCart(Cart item);
    void removeItemFromCart(Long itemId);
    void checkout(Cart cart);
}