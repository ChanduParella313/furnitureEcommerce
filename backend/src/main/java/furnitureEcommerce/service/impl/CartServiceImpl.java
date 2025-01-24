package furnitureEcommerce.service.impl;

import furnitureEcommerce.model.Cart;
import furnitureEcommerce.repository.CartRepository;
import furnitureEcommerce.service.CartService;

import java.util.List;
import java.util.Optional;

public class CartServiceImpl implements CartService {

    private final CartRepository cartRepository;

    public CartServiceImpl(CartRepository cartRepository){
        this.cartRepository=cartRepository;
    }


    @Override
    public Optional<Cart> getCartByUserId(Long userId) {
        return cartRepository.findById(userId);
    }

    @Override
    public void addItemToCart(Cart item) {
        cartRepository.save(item);

    }

    @Override
    public void removeItemFromCart(Long itemId) {
        cartRepository.remove(itemId);
    }

    @Override
    public void checkout(Cart cart) {
        cartRepository.update(cart);
    }
}
