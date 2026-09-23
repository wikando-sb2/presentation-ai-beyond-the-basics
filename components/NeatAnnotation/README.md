# NeatAnnotation sources

The stylesheet is adapted from [neat-annotations](https://github.com/syabro/neat-annotations/blob/main/neat-annotations.css)
(MIT, copyright 2026 Maxim Syabro). The upstream CSS SHA-256 when copied on 2026-09-23 was
`45a3d07a0cbb86b4e9d6995bc415ed9360ad43c145fd67e34de84690845d1934`.

The adaptations replace generated label text with a real `span` so the note is in the accessibility
tree, add a local font face, and bind `light-dark()` colors to Slidev's `.dark` class. Arrow shapes,
positions, colors, and reduced-motion behavior follow the upstream stylesheet. Its license is in
[`LICENSE.neat-annotations`](LICENSE.neat-annotations).

[`ShantellSans-Regular.woff2`](ShantellSans-Regular.woff2) is the regular 400-weight webfont from
[arrowtype/shantell-sans](https://github.com/arrowtype/shantell-sans/tree/main/fonts/Shantell%20Sans/Web/Static).
Its SHA-256 is `679b07d8ecedbd0a998e8ac6bd144e004eba350c691ffd2a0e13fa41693cfeb9`. The font is
licensed under the SIL Open Font License 1.1; the license and copyright notice are in
[`OFL.Shantell-Sans.txt`](OFL.Shantell-Sans.txt).
