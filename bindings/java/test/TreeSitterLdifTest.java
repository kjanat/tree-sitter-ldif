import io.github.treesitter.jtreesitter.Language;
import io.github.treesitter.jtreesitter.ldif.TreeSitterLdif;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;

public class TreeSitterLdifTest {
    @Test
    public void testCanLoadLanguage() {
        assertDoesNotThrow(() -> new Language(TreeSitterLdif.language()));
    }
}
