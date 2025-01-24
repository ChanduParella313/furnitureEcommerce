package furnitureEcommerce.service;

import furnitureEcommerce.model.User;
import java.util.List;
import java.util.Optional;

public interface UserService {

    Optional<User> getUserById(Long id);
    List<User> getAllUsers();
    void addUser(User user);
    void updateUser(User user);
    void deleteUser(Long id);

}
