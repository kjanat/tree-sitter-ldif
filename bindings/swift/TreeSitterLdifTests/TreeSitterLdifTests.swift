import XCTest
import SwiftTreeSitter
import TreeSitterLdif

final class TreeSitterLdifTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_ldif())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading LDIF grammar")
    }
}
