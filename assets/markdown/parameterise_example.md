---
type: "example-tab"
fakeTabName: "test_utils.py"
section: "example"
---
```python
@test("truncate('{text}', num_chars={num_chars}) returns '{expected}'")
def _(
    text=s,
    num_chars=each(20, 11, 10, 5),
    expected=each(s, s, "hello w...", "he..."),
):
    result = truncate(text, num_chars)
    expect(result).equals(expected)

```