from pathlib import Path
import pymupdf

assets = Path(__file__).resolve().parent / "assets"
with pymupdf.open(assets / "ALEXEY_SHMELEV.pdf") as doc:
    if len(doc) != 1:
        raise ValueError("The resume must contain exactly one page")
    (assets / "resume.svg").write_text(
        doc[0].get_svg_image(text_as_path=True), encoding="utf-8"
    )
