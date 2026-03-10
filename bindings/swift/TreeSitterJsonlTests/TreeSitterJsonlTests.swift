import XCTest
import SwiftTreeSitter
import TreeSitterJsonl

final class TreeSitterJsonlTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_jsonl())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading JSON Lines grammar")
    }
}
